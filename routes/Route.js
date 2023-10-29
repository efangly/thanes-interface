const express = require("express")
const router = express.Router()
const upload = require("../middleware/UploadFile")
const middle = require("../controllers/MiddleController")
const drug = require("../controllers/DrugProfileController")

//middle 
router.get('/middle',middle.getMiddle)
router.get('/middle/:filter',middle.getFilterMiddle)
router.post('/middle',middle.insertMiddle)
router.put('/middle/:f_prescriptionno',middle.updateMiddle)
router.delete('/middle/:f_prescriptionno',middle.deleteMiddle)
router.get('/reorder/:refcode',middle.getMiddleOrder)

//drug profile
router.get('/images/:filename',drug.StreamDrugImage)
router.get('/drugimage',drug.DrugImagelist)
router.post('/drugimage',upload.single('fileupload'),drug.CreateDrugImage)
router.delete('/drugimage/:drugcode/:drugimage',drug.RemoveDrugImage)

module.exports=router