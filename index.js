const csv = require('csv-parser')

const { LOCATION, CSV_FILE } = require("./settings")

const { qr } = require("./qr")

fs.createReadStream(CSV_FILE)
  .pipe(csv())
  .on('data', (data) => {
    qr(data.url, data.id, LOCATION)
      .then(a => console.log(`Written image ${data.id}.png`) )
      .catch(console.error)
  })
  .on('end', () => {
    console.log("Read done")
    // Maybe compress the folder now
  })
