
exports.getpackorder = (packorder) => {
  let index = 0
  let hn = ""
  let orderacceptdate = ""
  let person = []
  while(index < packorder.length){
    if(hn !== packorder[index].f_hn && orderacceptdate !== packorder[index].f_orderacceptdate){ 
      hn = packorder[index].f_hn 
      orderacceptdate = packorder[index].f_orderacceptdate
    }
    let { relm,current } = getorder(packorder,hn,orderacceptdate,index)
    person.push({
      f_hn: hn,
      f_orderacceptdate: packorder[index].f_orderacceptdate,
      f_tomachineno: packorder[index].f_tomachineno,
      order: relm,
      f_userlogin: packorder[index].f_userlogin,
      f_namelogin: packorder[index].f_namelogin
    })
    index = current
  }
  let responsedata = {
    result: {
      person: person.length === 0 ? "Not Found" : person
    },
    MessageCode: person.length === 0 ? 404 : 200,
    Message: person.length === 0 ? "Not Found" : "OK"
  }
  return responsedata
}

const getorder = (order,hn,orderacceptdate,index) => {
  let current = index
  let relm = []
  do{
    let detail = []
    let currentrelm = order[current].f_relm
    let packid = order[current].f_pack_id
    do{
      detail.push({
        f_referenceCode: order[current].f_pack_detail,
        f_drug_image: `http://localhost:8080/interface${order[current].f_drug_image}`
      })
      current += 1
      if(current === order.length){ break }
    }while(currentrelm === order[current].f_relm)
    relm.push({
      f_relm: currentrelm,
      f_pack_id: packid,
      f_pack_detail: detail
    })
    if(current === order.length){ break }
  }while(order[current].f_hn === hn && orderacceptdate === order[current].f_orderacceptdate)
  return { relm,current }
}