
exports.ValidateNumber = (param) => {
  let msg = "EMPTY"
  let num
  if(isNaN(param)){ 
    msg = "ต้องเป็นตัวเลขเท่านั้น"
  }else{
    if(typeof param === 'string'){
      msg = "ต้องเป็น Numeric Type"
    }else{
      num = param
      if(num <= 0){
        msg = "ต้องมากกว่า 0"
      }
    }
  }
  return {
    status: msg === "EMPTY" ? true : false,
    result: msg === "EMPTY" ? num : msg
  }
}

exports.ValidateString = (param) => {
  let msg = "EMPTY"
  if(param === ""){ 
    msg = "ห้ามมีค่าว่าง"
  }else{
    
  }
  return {
    status: msg === "EMPTY" ? true : false,
    result: msg === "EMPTY" ? null : msg
  }
}

exports.ValidateDosagedispense = (dosagedispense) => {
  let msg = "EMPTY"
  if(dosagedispense === ""){
    msg = "f_dosagedispense ห้ามมีค่าว่าง"
  }else{
    let dispensed = dosagedispense.split(",").findIndex(dispensed => dispensed < 0)
    if(dispensed === -1){ 
      msg = "EMPTY"
    }else{
      msg = "f_dosagedispense น้อยกว่า 0"
    }
  }
  return {
    status: msg === "EMPTY" ? true : false,
    result: msg === "EMPTY" ? null : msg
  }
}