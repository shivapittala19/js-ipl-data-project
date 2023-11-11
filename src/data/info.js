const fs = require("fs")
const parser = require("papaparse")

const matches = fs.readFileSync("./src/data/matches.csv", "utf-8")
const deliveries = fs.readFileSync("./src/data/deliveries.csv","utf-8")

//read matches data
const {data:matchesData} = parser.parse(matches, {
    header: true,  
    skipEmptyLines: true,
  })

//read deliveries data
const {data:deliveriesData} = parser.parse(deliveries, {
    header: true,
    skipEmptyLines:true
})

module.exports={matchesData,deliveriesData}
