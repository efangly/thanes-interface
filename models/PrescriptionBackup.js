const Sequelize = require('sequelize')
const db = require('../configs/conhisdb')

const PrescriptionBackup = db.define('PrescriptionBackup', {
  PrescriptionNo: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  SeqNo: {
    type: Sequelize.INTEGER
  },
  PrescriptionNoHIS: {
    type: Sequelize.STRING
  },
  PriorityCd: {
    type: Sequelize.STRING
  },
  PatientId: {
    type: Sequelize.STRING
  },
  PatientName: {
    type: Sequelize.STRING
  },
  PatientAn: {
    type: Sequelize.STRING
  },
  Birthday: {
    type: Sequelize.STRING
  },
  WardCd: {
    type: Sequelize.STRING
  },
  WardName: {
    type: Sequelize.STRING
  },
  RoomNo: {
    type: Sequelize.STRING
  },
  BedNo: {
    type: Sequelize.STRING
  },
  PrescriptionDate: {
    type: Sequelize.STRING
  },
  TakeDate: {
    type: Sequelize.STRING
  },
  TakeTime: {
    type: Sequelize.STRING
  },
  BarcodeId: {
    type: Sequelize.STRING
  },
  DrugCd: {
    type: Sequelize.STRING
  },
  DrugName: {
    type: Sequelize.STRING
  },
  DispensedDose: {
    type: Sequelize.DECIMAL
  },
  DispensedTotalDose: {
    type: Sequelize.DECIMAL
  },
  DispensedUnit: {
    type: Sequelize.STRING
  },
  Freq_Counter: {
    type: Sequelize.STRING
  },
  Freq_Desc: {
    type: Sequelize.STRING
  },
  Freq_Desc_Detail_Code: {
    type: Sequelize.STRING
  },
  Freq_Desc_Detail: {
    type: Sequelize.STRING
  },
  MakeRecTime: {
    type: Sequelize.STRING
  },
  UpDateRecTime: {
    type: Sequelize.STRING
  },
  FreePrintItem_Presc1: {
    type: Sequelize.STRING
  },
  FreePrintItem_Presc2: {
    type: Sequelize.STRING
  },
  FreePrintItem_Presc3: {
    type: Sequelize.STRING
  },
  FreePrintItem_Presc4: {
    type: Sequelize.STRING
  },
  FreePrintItem_Presc5: {
    type: Sequelize.STRING
  },
  ProcFlg: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  DTAFlg: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  MachineFlg: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  PrintFlg: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  SMTFlg: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  ProcessFlg: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  PharmacyIPD: {
    type: Sequelize.STRING
  },
  RowID: {
    type: Sequelize.STRING
  },
  CreateDateTime: {
    type: Sequelize.STRING
  },
  FieldUpdate: {
    type: Sequelize.STRING
  },
  PackTime: {
    type: Sequelize.STRING
  },
  UserDispensing: {
    type: Sequelize.STRING
  },
  Prescription: {
    type: Sequelize.STRING
  },
  NormalStatus: {
    type: Sequelize.STRING
  },
  f_status: {
    type: Sequelize.INTEGER
  }
},{
  tableName: 'M_Prescription_bak'
})

module.exports = PrescriptionBackup