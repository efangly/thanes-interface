const DrugImage = require("../models/DrugImage")
const fs = require('fs')
const path = require('path')
const { errorlog } = require('../utils/Log')

exports.DrugImagelist = async (req,res)=>{
  await DrugImage.findAll({
    order: [
      ['DrugCassette', 'ASC']
    ]
  }).then((result) => {
    res.status(200).json(result)
  }).catch((err) => {
    errorlog(`DrugImagelist => ${err}`)
    res.status(400).json({ status: 400 ,message: err })
  })  
}

exports.CreateDrugImage = async (req,res)=>{
  if(req.file === undefined){
    res.status(400).json({ status: 400 ,message: "ไม่พบไฟล์รูป" })
  }else{
    let { drugcode ,drugcassette ,drugname ,path } = req.body
    let pathfile = `/images/${req.file.filename}`
    await DrugImage.create({
      DrugCode: drugcode, DrugCassette: drugcassette, DrugImage: pathfile, DrugName: drugname
    }).then((result) => {
      res.status(200).json({ status: 200, msg: "อัพโหลดสำเร็จ!!" })
    }).catch((err) => {
      errorlog(`CreateDrugImage => ${err}`)
      res.status(400).json({ status: 400 ,message: err })
    })
  }  
}

exports.RemoveDrugImage = async (req,res)=>{
  let DrugCode = req.params.drugcode
  let filename = req.params.drugimage
  await DrugImage.destroy({ 
    where: { DrugCode: DrugCode }
  }).then((result) => {
    fs.unlinkSync(path.join('public/images',filename))
    res.status(200).json({ status: 200, msg: "ลบรายการสำเร็จ!!" })
  }).catch((err) => {
    errorlog(`RemoveDrugImage => ${err}`)
    res.status(400).json({ status: 400 ,message: err })
  })  
}

exports.StreamDrugImage = (req,res)=>{
  let imgnm = req.params.filename
  res.statusCode = 200
  const readStream = fs.createReadStream(path.join('public/images', imgnm))
  readStream.on("error", err => {
    const errfile = err.path.split("\\")
    errorlog(`StreamDrugImage => ${err}`)
    res.status(400).json({
      status: 400,
      message: "No such file or directory => " + errfile[errfile.length - 1]
    })
  })
  readStream.pipe(res)
}