const Ward = require("../models/Ward")
const Conhis = require("../configs/conhisdb")
const { errorlog } = require('../utils/Log')
const { getpackorder } = require("../utils/Getpackid")
require("dotenv").config()

exports.wardlist = async (req,res)=>{
  await Ward.findAll({
    order: [ ['f_wardseq', 'ASC'] ]
  })
  .then((ward) => {
    res.json(ward)
  })
  .catch((err) => {
    errorlog(`wardlist => ${err}`)
    res.json({error: err})
  })
}

exports.getpack = async (req,res) => {
  const { f_hn,f_orderacceptdate,f_pack_id,f_tomachineno } = req.query
  let query = "SELECT a.PatientId AS f_hn"
  query += ",CONVERT(varchar(10),a.OrderAcceptTime,120) AS f_orderacceptdate"
  query += ",a.FrequencyDesc AS f_relm,a.PackId AS f_pack_id"
  query += ",a.ReferenceCode AS f_pack_detail"
  query += ",b.DrugImage AS f_drug_image,a.OrderAcceptId AS f_userlogin"
  query += ",a.OrderAcceptName AS f_namelogin"
  query += ",a.MachinNo AS f_tomachineno FROM tb_getpack a "
  query += "LEFT JOIN M_DrugImage b ON a.DrugCd = b.DrugCode "
  query += "WHERE a.ReferenceCode <> '' "
  if(f_hn !== undefined){
    query += "AND PatientId = '"+f_hn+"' "
  }
  if(f_orderacceptdate !== undefined){
    query += "AND CONVERT(varchar(10),a.OrderAcceptTime,120) = '"+f_orderacceptdate+"' "
  }
  if(f_pack_id !== undefined){
    query += "AND PackId LIKE '%"+f_pack_id.split(",",1)+"%' "
  }
  if(f_tomachineno !== undefined){
    query += "AND MachinNo = '"+f_tomachineno+"' "
  }
  query += "ORDER BY CONVERT(varchar(10),a.OrderAcceptTime,120),PatientId,FrequencyTime" 
  await Conhis.query(query)
  .then((result) => {
    let id = getpackorder(result[0])
    res.status(id.MessageCode).json(id)
  }).catch((err) => {
    errorlog(`getpack => ${err}`)
    res.status(400).json({
      result: 'Error',
      MessageCode: 400,
      Message: 'Error'
    })
  })
}