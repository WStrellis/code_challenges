function balanceStatements(list){
  let bad = []
  let buy = 0
  let sell = 0
  let bad = []
let buy = 0
let sell = 0
if(!list.length){return `Buy: ${buy} Sell: ${sell}`}
  //split string
  // loop over array
  // compare each one against regex
  list.split(',').forEach( order => {
  // if it is bad add to bad array
    if(!/^ ?[\S]+ [\d]+ [\d]*\.[\d]+ [S|B]$/g.test(order)){
    bad.push(order.trim())
    return
    }
  // otherwise check B/S value and add to correct var
  let amount = /([\d]+) ([\d]*\.[\d]+)/.exec(order);
  (/(S|B)$/i.exec(order)[1] === 'S')? sell += Math.round((+amount[1] * +amount[2])): buy += Math.round((+amount[1] * +amount[2]))
  })
  
  // return string with correct format
  return bad.length ? `Buy: ${buy} Sell: ${sell}; Badly formed ${bad.length}: ${bad.join(' ;')} ;` :
  `Buy: ${buy} Sell: ${sell}`
}
module.exports = balanceStatements
  
