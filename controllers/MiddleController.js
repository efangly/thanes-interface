const Middle = require('../models/Middle')
const socket = require('../configs/socket')
const { settoconhis } = require("../utils/Conhis")
const { Op } = require("sequelize")
const { validateorder } = require('../utils/Order')
const { errorlog } = require('../utils/Log')
const { FrequencyList } = require('../utils/GetFrequency')
require("dotenv").config()

exports.getMiddle = async (req,res)=>{
  await Middle.findAll({
    where: { 
      f_dispensestatus: "1"
    },
    order: [
      ['f_lastmodified', 'DESC']
    ]
  }).then((middle) => {
    res.status(200).json(middle)
  }).catch((err) => {
    errorlog(`getMiddle => ${err}`)
    res.status(400).json({ status: 400 ,message: err })
  })
}

exports.getFilterMiddle = async (req,res)=>{
  const { filter } = req.params
  await Middle.findAll({
    where: { 
      [Op.or]: [{ f_prescriptionno: filter }, { f_hn: filter }]
    },
    order: [
      ['f_lastmodified', 'DESC']
    ]
  }).then((middle) => {
    res.status(200).json(middle)
  }).catch((err) => {
    errorlog(`getMiddle => ${err}`)
    res.status(400).json({ status: 400 ,message: err })
  })
}

exports.insertMiddle = async (req,res)=>{
  const order = req.body.order
  let frequency = await FrequencyList()
  let { data,status } = validateorder(order,frequency)
  if(status){
    await Middle.bulkCreate( data )
    .then((middle) => {
      if(settoconhis(data,frequency)){
        socket.emit("send_message", { message: `มีรายการเข้าใหม่ ${data.length} รายการ`,type: 'new' })
        res.status(200).json({ status: 200 ,message: 'Success!!' })
      }
    })
    .catch((err) => {
      errorlog(`insertMiddle => ${err}`)
      res.status(400).json({ status: 400 ,message: 'Failed!!' })
    })  
  }else{
    errorlog((`insertMiddle => Ref : ${JSON.stringify(data)}`))
    res.status(400).json({ status: 400 ,message: 'Failed!!' ,reference: data })
  }
}

exports.updateMiddle = async (req,res)=>{
  const { f_status,f_dispensestatus } = req.body
  const { f_prescriptionno,f_orderitemcode } = req.params
  await Middle.update({ f_status: f_status,f_dispensestatus: f_dispensestatus},
    { where: { f_prescriptionno: f_prescriptionno,f_orderitemcode: f_orderitemcode } })
  .then((middle) => {
    res.status(200).json({ status: 200 ,message: 'แก้ไขรายการสำเร็จ' }) })
  .catch((err) => {
    errorlog(`updateMiddle => ${err}`)
    res.status(400).json({ status: 400 ,message: 'แก้ไขรายการไม่สำเร็จ' })
  })
}

exports.deleteMiddle = async (req,res)=>{
  const { f_referenceCode } = req.params
  await Middle.update({ f_status: "2", f_dispensestatus_lgs: "0" },{ where: { f_referenceCode: f_referenceCode.split(",") } })
  .then((middle) => {
    socket.emit("send_message", { message: `ยกเลิก ${f_referenceCode.split(",").length} รายการสำเร็จ`,type: 'new' })
    res.status(200).json({ status: 200 ,message: 'ยกเลิกรายการสำเร็จ' }) })
  .catch((err) => {
    errorlog(`deleteMiddle => ${err}`)
    res.status(400).json({ status: 400 ,message: 'ยกเลิกรายการไม่สำเร็จ' })
  })
}

exports.getMiddleOrder = async (req,res)=>{
  await Middle.findAll({
    attributes: [
      'f_prescriptionno','f_seq','f_seqmax','f_prescriptiondate','f_prioritycode','f_prioritydesc',
      'f_durationcode','f_durationdesc','f_orderitemtype','f_orderitemgroupcode','f_orderitemcode',
      'f_orderitemname','f_orderitemnameTH','f_orderitemgenericname','f_orderqty','f_orderunitcode',
      'f_orderunitdesc','f_dosage','f_dosagedispense','f_dosageunit','f_maxdispenseqtyperday',
      'f_maxdispenseqtyperdayunit','f_drugform','f_drugformname','f_ordercreatedate','f_ordercreatetime',
      'f_orderacceptdate','f_orderaccepttime','f_orderacceptfromip','f_ordertargetdate','f_ordertargettime',
      'f_itemlotcode','f_itemlotexpire','f_itemidentify','f_noteprocessing','f_ipdpf_record_no',
      'f_highAlertDrug','f_useracceptby','f_userorderby','f_instructioncode','f_instructiondesc',
      'f_frequencycode','f_frequencydesc','f_frequencyTime','f_sex','f_PRN','f_patientname','f_patientepisodedate',
      'f_en','f_patientdob','f_hn','f_daily_dose_flag','f_doctorcode','f_doctorname','f_wardcode','f_warddesc',
      'f_roomcode','f_roomdesc','f_fromlocationname','f_pharmacylocationcode','f_pharmacylocationdesc',
      'f_tomachineno','f_freetext1','f_freetext2','f_freetext3','f_freetext4','f_bedcode','f_beddesc',
      'f_referenceCode','f_status','f_num_type_desc','f_num_type_of_daily_dose','f_dispensestatus','f_opd_adminby',
      'f_comment','f_ipd_admincontinue','f_opd_admindatetime','f_opd_adminlocation','f_bagspecialdrug',
      'f_opd_adminremark','f_opd_adminstatus','f_seq','f_seq','f_seq','f_seq','f_seq','f_seq'
    ],
    where: { 
      f_dispensestatus: "1"
    },
    order: [
      ['f_lastmodified', 'DESC']
    ]
  }).then((middle) => {
    res.status(200).json(middle)
  }).catch((err) => {
    errorlog(`getMiddleOrder => ${err}`)
    res.status(400).json({ status: 400 ,message: err })
  })
}