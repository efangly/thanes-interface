const Sequelize = require('sequelize')
const db = require('../configs/conhisdb')

const MiddleBackup = db.define('MiddleBackup', {
  f_prescriptionno: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  f_seq: {
    type: Sequelize.INTEGER
  },
  f_seqmax: {
    type: Sequelize.INTEGER
  },
  f_prescriptiondate: {
    type: Sequelize.STRING
  },
  f_prioritycode: {
    type: Sequelize.STRING
  },
  f_prioritydesc: {
    type: Sequelize.STRING
  },
  f_durationcode: {
    type: Sequelize.STRING
  },
  f_durationdesc: {
    type: Sequelize.STRING
  },
  f_orderitemtype: {
    type: Sequelize.INTEGER
  },
  f_orderitemgroupcode: {
    type: Sequelize.STRING
  },
  f_orderitemcode: {
    type: Sequelize.STRING
  },
  f_orderitemname: {
    type: Sequelize.STRING
  },
  f_orderitemnameTH: {
    type: Sequelize.STRING
  },
  f_orderitemgenericname: {
    type: Sequelize.STRING
  },
  f_orderqty: {
    type: Sequelize.DECIMAL
  },
  f_orderunitcode: {
    type: Sequelize.STRING
  },
  f_orderunitdesc: {
    type: Sequelize.STRING
  },
  f_dosage: {
    type: Sequelize.DECIMAL
  },
  f_dosagedispense: {
    type: Sequelize.STRING
  },
  f_dosageunit: {
    type: Sequelize.STRING
  },
  f_maxdispenseqtyperday: {
    type: Sequelize.STRING
  },
  f_maxdispenseqtyperdayunit: {
    type: Sequelize.STRING
  },
  f_drugform: {
    type: Sequelize.STRING
  },
  f_drugformname: {
    type: Sequelize.STRING
  },
  f_ordercreatedate: {
    type: Sequelize.STRING
  },
  f_ordercreatetime: {
    type: Sequelize.STRING
  },
  f_orderacceptdate: {
    type: Sequelize.STRING
  },
  f_orderaccepttime: {
    type: Sequelize.STRING
  },
  f_orderacceptfromip: {
    type: Sequelize.STRING
  },
  f_ordertargetdate: {
    type: Sequelize.STRING
  },
  f_ordertargettime: {
    type: Sequelize.STRING
  },
  f_itemlotcode: {
    type: Sequelize.STRING
  },
  f_itemlotexpire: {
    type: Sequelize.STRING
  },
  f_itemidentify: {
    type: Sequelize.STRING
  },
  f_noteprocessing: {
    type: Sequelize.STRING
  },
  f_ipdpf_record_no: {
    type: Sequelize.STRING
  },
  f_highAlertDrug: {
    type: Sequelize.STRING
  },
  f_useracceptby: {
    type: Sequelize.STRING
  },
  f_userorderby: {
    type: Sequelize.STRING
  },
  f_instructioncode: {
    type: Sequelize.STRING
  },
  f_instructiondesc: {
    type: Sequelize.STRING
  },
  f_frequencycode: {
    type: Sequelize.STRING
  },
  f_frequencydesc: {
    type: Sequelize.STRING
  },
  f_frequencyTime: {
    type: Sequelize.STRING
  },
  f_sex: {
    type: Sequelize.STRING
  },
  f_PRN: {
    type: Sequelize.STRING
  },
  f_patientname: {
    type: Sequelize.STRING
  },
  f_patientepisodedate: {
    type: Sequelize.STRING
  },
  f_en: {
    type: Sequelize.STRING
  },
  f_patientdob: {
    type: Sequelize.STRING
  },
  f_hn: {
    type: Sequelize.STRING
  },
  f_daily_dose_flag: {
    type: Sequelize.STRING
  },
  f_doctorcode: {
    type: Sequelize.STRING
  },
  f_doctorname: {
    type: Sequelize.STRING
  },
  f_wardcode: {
    type: Sequelize.STRING
  },
  f_warddesc: {
    type: Sequelize.STRING
  },
  f_roomcode: {
    type: Sequelize.STRING
  },
  f_roomdesc: {
    type: Sequelize.STRING
  },
  f_fromlocationname: {
    type: Sequelize.STRING
  },
  f_pharmacylocationcode: {
    type: Sequelize.STRING
  },
  f_pharmacylocationdesc: {
    type: Sequelize.STRING
  },
  f_tomachineno: {
    type: Sequelize.STRING
  },
  f_freetext1: {
    type: Sequelize.STRING
  },
  f_freetext2: {
    type: Sequelize.STRING
  },
  f_freetext3: {
    type: Sequelize.STRING
  },
  f_freetext4: {
    type: Sequelize.STRING
  },
  f_bedcode: {
    type: Sequelize.STRING
  },
  f_beddesc: {
    type: Sequelize.STRING
  },
  f_referenceCode: {
    type: Sequelize.STRING
  },
  f_status: {
    type: Sequelize.STRING
  },
  f_num_type_desc: {
    type: Sequelize.STRING
  },
  f_num_type_of_daily_dose: {
    type: Sequelize.STRING
  },
  f_dispensestatus: {
    type: Sequelize.STRING
  },
  f_opd_adminby: {
    type: Sequelize.STRING
  },
  f_comment: {
    type: Sequelize.STRING
  },
  f_ipd_admincontinue: {
    type: Sequelize.STRING
  },
  f_opd_admindatetime: {
    type: Sequelize.STRING
  },
  f_opd_adminlocation: {
    type: Sequelize.STRING
  },
  f_bagspecialdrug: {
    type: Sequelize.STRING
  },
  f_opd_adminremark: {
    type: Sequelize.STRING
  },
  f_opd_adminstatus: {
    type: Sequelize.STRING
  },
  f_lastmodified: {
    type: Sequelize.STRING
  },
  RowID: {
    type: Sequelize.STRING
  }
},{
  tableName: 'tb_thaneshosp_middle_bak'
})

module.exports = MiddleBackup