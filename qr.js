const qr = require('qrcode')
const fs = require("fs")

module.exports.qr = (url, name, loc) => {
  return new Promise((resolve, reject) => {
    if(!url){ return reject("No url provided") }
    if(!name){ return reject("No name provided") }
    if(!loc){ return reject("No location provided") }
    qr.toDataURL(url, (err, data) => {
      if(err){ return reject(err) }
      let d = Buffer.from(data.split(",")[1], "base64")
      fs.writeFile(`${loc}/${name}.png`, d, err => {
        if(err){ return reject(err) }
        resolve(true)
      })
    })
  })
}
