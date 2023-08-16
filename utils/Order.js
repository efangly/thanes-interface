const { v4: uuidv4 } = require('uuid')
const { getdatetime, getdate, getdatetimeid } = require('./Getdate')
const { ValidateNumber, ValidateDosagedispense, ValidateString } = require('./Validate')
const Middle = require('../models/Middle')
const Prescription = require('../models/Prescription')
require("dotenv").config()

exports.validateorder = (middle, frequency) => {
  let middleorder = []
  let referror = []
  for (let i = 0; i < middle.length; i++) {
    let wardname = middle[i].f_warddesc
    if(middle[i].f_tomachineno == "2"){
      if(wardname.match(/ด่วน/) !== null || wardname.match(/ยกเลิก/) !== null || wardname.match(/loss/) !== null || wardname.match(/OFF/) !== null || wardname.match(/ลบทิ้ง/) !== null) {
        CancelOrder(middle[i].f_referenceCode)
        continue;
      }
    }
    let errordetail = ValidateField(middle[i], frequency)
    let takedate = middle[i].f_ordertargetdate == "" ? getdatetime() : middle[i].f_ordertargetdate
    if (errordetail.length !== 0) {
      referror.push({ f_referenceCode: middle[i].f_referenceCode, error: errordetail })
    } else {
      middleorder.push({
        f_prescriptionno: middle[i].f_prescriptionno,
        f_seq: middle[i].f_seq,
        f_seqmax: middle[i].f_seqmax,
        f_prescriptiondate: middle[i].f_prescriptiondate,
        f_prioritycode: middle[i].f_prioritycode,
        f_prioritydesc: middle[i].f_prioritydesc,
        f_durationcode: middle[i].f_durationcode,
        f_durationdesc: middle[i].f_durationdesc,
        f_orderitemtype: middle[i].f_orderitemtype,
        f_orderitemgroupcode: middle[i].f_orderitemgroupcode,
        f_orderitemcode: middle[i].f_orderitemcode,
        f_orderitemname: middle[i].f_orderitemname,
        f_orderitemnameTH: middle[i].f_orderitemnameTH,
        f_orderitemgenericname: middle[i].f_orderitemgenericname,
        f_orderqty: middle[i].f_orderqty,
        f_orderunitcode: middle[i].f_orderunitcode,
        f_orderunitdesc: middle[i].f_orderunitdesc,
        f_dosage: middle[i].f_dosage,
        f_dosagedispense: middle[i].f_dosagedispense,
        f_dosageunit: middle[i].f_dosageunit,
        f_maxdispenseqtyperday: middle[i].f_maxdispenseqtyperday,
        f_maxdispenseqtyperdayunit: middle[i].f_maxdispenseqtyperdayunit,
        f_drugform: middle[i].f_drugform,
        f_drugformname: middle[i].f_drugformname,
        f_ordercreatedate: middle[i].f_ordercreatedate,
        f_ordercreatetime: middle[i].f_ordercreatetime,
        f_orderacceptdate: middle[i].f_orderacceptdate,
        f_orderaccepttime: middle[i].f_orderaccepttime,
        f_orderacceptfromip: middle[i].f_orderacceptfromip,
        f_ordertargetdate: takedate.substr(0, 10),
        f_ordertargettime: middle[i].f_ordertargettime,
        f_itemlotcode: middle[i].f_itemlotcode,
        f_itemlotexpire: middle[i].f_itemlotexpire,
        f_itemidentify: middle[i].f_itemidentify,
        f_noteprocessing: middle[i].f_noteprocessing,
        f_ipdpf_record_no: middle[i].f_ipdpf_record_no,
        f_highAlertDrug: middle[i].f_highAlertDrug,
        f_useracceptby: middle[i].f_useracceptby,
        f_userorderby: middle[i].f_userorderby,
        f_instructioncode: middle[i].f_instructioncode,
        f_instructiondesc: middle[i].f_instructiondesc,
        f_frequencycode: middle[i].f_frequencycode,
        f_frequencydesc: middle[i].f_frequencydesc,
        f_frequencyTime: middle[i].f_frequencyTime,
        f_sex: middle[i].f_sex,
        f_PRN: middle[i].f_PRN,
        f_patientname: middle[i].f_patientname,
        f_patientepisodedate: middle[i].f_patientepisodedate,
        f_en: middle[i].f_en,
        f_patientdob: middle[i].f_patientdob,
        f_hn: middle[i].f_hn,
        f_daily_dose_flag: middle[i].f_daily_dose_flag,
        f_doctorcode: middle[i].f_doctorcode,
        f_doctorname: middle[i].f_doctorname,
        f_wardcode: middle[i].f_wardcode,
        f_warddesc: middle[i].f_warddesc,
        f_roomcode: middle[i].f_roomcode,
        f_roomdesc: middle[i].f_roomdesc,
        f_fromlocationname: middle[i].f_fromlocationname,
        f_pharmacylocationcode: middle[i].f_pharmacylocationcode,
        f_pharmacylocationdesc: middle[i].f_pharmacylocationdesc,
        f_tomachineno: middle[i].f_tomachineno,
        f_freetext1: middle[i].f_freetext1,
        f_freetext2: middle[i].f_freetext2,
        f_freetext3: middle[i].f_freetext3,
        f_freetext4: middle[i].f_freetext4,
        f_bedcode: middle[i].f_bedcode,
        f_beddesc: middle[i].f_beddesc,
        f_referenceCode: middle[i].f_referenceCode,
        f_status: middle[i].f_status,
        f_num_type_desc: middle[i].f_num_type_desc,
        f_num_type_of_daily_dose: middle[i].f_num_type_of_daily_dose,
        f_dispensestatus: "1",
        f_opd_adminby: middle[i].f_opd_adminby,
        f_comment: middle[i].f_comment,
        f_ipd_admincontinue: middle[i].f_ipd_admincontinue,
        f_opd_admindatetime: middle[i].f_opd_admindatetime,
        f_opd_adminlocation: middle[i].f_opd_adminlocation,
        f_bagspecialdrug: middle[i].f_bagspecialdrug,
        f_opd_adminremark: middle[i].f_opd_adminremark,
        f_opd_adminstatus: middle[i].f_opd_adminstatus,
        f_lastmodified: middle[i].f_lastmodified,
        RowID: `row-${uuidv4()}`
      })
    }
  }
  return referror.length === 0 ? { status: true, data: middleorder } : { status: false, data: referror }
}

const ValidateField = (middle, frequencylist) => {
  let errordetail = []
  if (middle.f_tomachineno == process.env.MACHINE_NO) {
    if (ValidateString(middle.f_frequencycode).status) {
      let result = frequencylist.map(e => e.Frequencycode).indexOf(middle.f_frequencycode)
      if (result === -1) {
        errordetail.push(`f_frequencycode ไม่พบข้อมูลมื้อยา : ${(middle.f_frequencycode)}`)
      }
    } else {
      errordetail.push(`f_frequencycode ${ValidateString(middle.f_frequencycode).result}`)
    }
    ValidateNumber(middle.f_dosage).status ? null : errordetail.push(`f_dosage ${ValidateNumber(middle.f_dosage).result}`)
    ValidateNumber(middle.f_orderqty).status ? null : errordetail.push(`f_orderqty ${ValidateNumber(middle.f_orderqty).result}`)
  }
  ValidateString(middle.f_prescriptionno).status ? null : errordetail.push(`f_prescriptionno ${ValidateString(middle.f_prescriptionno).result}`)
  ValidateNumber(middle.f_seq).status ? null : errordetail.push(`f_seq ${ValidateNumber(middle.f_seq).result}`)
  ValidateNumber(middle.f_seqmax).status ? null : errordetail.push(`f_seqmax ${ValidateNumber(middle.f_seqmax).result}`)
  ValidateString(middle.f_prescriptiondate).status ? null : errordetail.push(`f_prescriptiondate ${ValidateString(middle.f_prescriptiondate).result}`)
  ValidateString(middle.f_prioritycode).status ? null : errordetail.push(`f_prioritycode ${ValidateString(middle.f_prioritycode).result}`)
  ValidateString(middle.f_durationcode).status ? null : errordetail.push(`f_durationcode ${ValidateString(middle.f_durationcode).result}`)
  ValidateString(middle.f_orderitemcode).status ? null : errordetail.push(`f_orderitemcode ${ValidateString(middle.f_orderitemcode).result}`)
  ValidateString(middle.f_orderitemname).status ? null : errordetail.push(`f_orderitemname ${ValidateString(middle.f_orderitemname).result}`)
  ValidateString(middle.f_orderitemnameTH).status ? null : errordetail.push(`f_orderitemnameTH ${ValidateString(middle.f_orderitemnameTH).result}`)
  ValidateString(middle.f_orderunitcode).status ? null : errordetail.push(`f_orderunitcode ${ValidateString(middle.f_orderunitcode).result}`)
  ValidateDosagedispense(middle.f_dosagedispense).status ? null : errordetail.push(ValidateDosagedispense(middle.f_dosagedispense).result)
  ValidateString(middle.f_dosageunit).status ? null : errordetail.push(`f_dosageunit ${ValidateString(middle.f_dosageunit).result}`)
  ValidateString(middle.f_ordercreatedate).status ? null : errordetail.push(`f_ordercreatedate ${ValidateString(middle.f_ordercreatedate).result}`)
  ValidateString(middle.f_ordercreatetime).status ? null : errordetail.push(`f_ordercreatetime ${ValidateString(middle.f_ordercreatetime).result}`)
  ValidateString(middle.f_highAlertDrug).status ? null : errordetail.push(`f_highAlertDrug ${ValidateString(middle.f_highAlertDrug).result}`)
  ValidateString(middle.f_instructioncode).status ? null : errordetail.push(`f_instructioncode ${ValidateString(middle.f_instructioncode).result}`)
  ValidateString(middle.f_PRN).status ? null : errordetail.push(`f_PRN ${ValidateString(middle.f_PRN).result}`)
  ValidateString(middle.f_patientname).status ? null : errordetail.push(`f_patientname ${ValidateString(middle[i].f_patientname).result}`)
  ValidateString(middle.f_en).status ? null : errordetail.push(`f_en ${ValidateString(middle.f_en).result}`)
  ValidateString(middle.f_hn).status ? null : errordetail.push(`f_hn ${ValidateString(middle.f_hn).result}`)
  ValidateString(middle.f_wardcode).status ? null : errordetail.push(`f_wardcode ${ValidateString(middle.f_wardcode).result}`)
  ValidateString(middle.f_roomcode).status ? null : errordetail.push(`f_roomcode ${ValidateString(middle.f_roomcode).result}`)
  ValidateString(middle.f_tomachineno).status ? null : errordetail.push(`f_tomachineno ${ValidateString(middle.f_tomachineno).result}`)
  ValidateString(middle.f_status).status ? null : errordetail.push(`f_status ${ValidateString(middle.f_status).result}`)
  ValidateString(middle.f_dispensestatus).status ? null : errordetail.push(`f_dispensestatus ${ValidateString(middle.f_dispensestatus).result}`)

  return errordetail
}

const CancelOrder = async (refcode) => {
  await Middle.update({
    f_status: "2"
  }, {
    where: { f_referenceCode: refcode }
  })
  await Prescription.update({
    ProcFlg: "1"
  }, {
    where: { FreePrintItem_Presc1: refcode }
  })
}

exports.generateorder = (middle, frequency) => {
  let prescription = []
  let hn = ""
  let count = 1
  for (let i = 0; i < middle.length; i++) {
    if (middle[i].f_tomachineno == process.env.MACHINE_NO) {
      let freq = frequency.map(e => e.Frequencycode).indexOf(middle[i].f_frequencycode)
      let datelabel = `${middle[i].f_prescriptionno.substr(6, 2)}-${middle[i].f_prescriptionno.substr(4, 2)}-${Number(middle[i].f_prescriptionno.substr(0, 4)) + 543}`
      let timedesc = frequency[freq].Frequencydesc.split(",")
      let timedesc1 = frequency[freq].Frequencydesc1.split(",")
      let dosage = middle[i].f_dosagedispense.split(/[,0]+/).filter(Boolean)
      for (let j = 0; j < timedesc1.length; j++) {
        if (hn !== middle[i].f_hn) {
          count = 1
          hn = middle[i].f_hn
        }
        prescription.push({
          PrescriptionNo: `${middle[i].f_prescriptionno}${count}`,
          SeqNo: count,
          PrescriptionNoHIS: `${getdate()}${middle[i].f_hn}`,
          PriorityCd: middle[i].f_prioritycode,
          PatientId: middle[i].f_hn,
          PatientName: middle[i].f_patientname,
          PatientAn: middle[i].f_en,
          Birthday: middle[i].f_patientdob,
          WardCd: middle[i].f_wardcode,
          WardName: middle[i].f_warddesc,
          RoomNo: middle[i].f_roomcode,
          BedNo: middle[i].f_bedcode,
          PrescriptionDate: middle[i].f_prescriptiondate,
          TakeDate: middle[i].f_ordertargetdate,
          TakeTime: timedesc1[j],
          BarcodeId: `${getdatetimeid()}${Math.floor(Math.random() * 10)}`,
          DrugCd: middle[i].f_orderitemcode,
          DrugName: middle[i].f_orderitemname,
          DispensedDose: dosage[j],
          DispensedTotalDose: middle[i].f_orderqty,
          DispensedUnit: middle[i].f_orderunitcode,
          Freq_Counter: timedesc1.length,
          Freq_Desc: timedesc[j],
          Freq_Desc_Detail_Code: timedesc1[j],
          Freq_Desc_Detail: timedesc[j],
          FreePrintItem_Presc1: middle[i].f_referenceCode,
          FreePrintItem_Presc2: middle[i].f_orderacceptdate,
          FreePrintItem_Presc3: `${datelabel}|${Number(middle[i].f_prescriptionno.substr(8, 2))}/${Number(middle[i].f_prescriptionno.substr(10, 4))}`,
          FreePrintItem_Presc4: timedesc[j],
          FreePrintItem_Presc5: "",
          MachineFlg: middle[i].f_tomachineno,
          PharmacyIPD: null,
          RowID: uuidv4(),
          FieldUpdate: null,
          PackTime: null,
          UserDispensing: null,
          Prescription: null,
          NormalStatus: middle[i].f_prioritydesc
        })
        count = count + 1
      }
    }
  }
  return prescription
}