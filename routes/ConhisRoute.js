const express = require("express")
const router = express.Router()
const conhis = require("../controllers/ConhisController")
const report = require("../controllers/ReportConhisController")

router.get('/getpackid',conhis.getpack)
//ward 
router.get('/wardlist',conhis.wardlist)

//report
router.get('/reportdrugdta/:params',report.prescriptiondta)
router.get('/reportwarddta/:params',report.prescriptiondtaward)
router.get('/reportpatientdta/:params',report.prescriptiondtapatient)

module.exports=router