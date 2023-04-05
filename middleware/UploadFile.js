const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join('public/images'))
  },
  filename: (req, file, cb) => {
    let extArr = file.originalname.split('.')
    let ext = extArr[extArr.length-1]
    cb(null, "img-" + Date.now() + '.' + ext)
  }
})

const upload = multer({ 
  storage: storage,
  fileFilter: (req, file, cb) => {
    if(file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true)
    }else {
      return cb(new Error('Invalid mime type'))
    }
  } 
})

module.exports = upload