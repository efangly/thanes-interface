const express = require("express")
const router = express.Router()
const reportjsd = require("../controllers/ReportJsdController")

//reporrJSD
router.get('/jsdusedrug/:date/:cassette/:drugname',reportjsd.jsdusedrug)
router.get('/jsdpatientusedrug/:hn/:drugname/:ward/:date',reportjsd.jsdpatientusedrug)
router.get('/jsdpatientusedrug',reportjsd.jsdpatientusedrug)
router.get('/jsdstock',reportjsd.jsdstock)
router.get('/jsdstock/:cassette/:drugname',reportjsd.jsdstockwithparams)
router.get('/jsdminstock',reportjsd.jsdminstock)
router.get('/jsdminstock/:cassette/:drugname',reportjsd.jsdminstockwithparams)
router.get('/jsdwardusedrug',reportjsd.jsdwardusedrug)

module.exports=router