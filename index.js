const {matchesData,deliveriesData} = require('./src/data/info')
const fs = require("fs")

const matchesPerYear = require('./src/server/matchesPerYear')
const matchesWonPerTeamYear = require('./src/server/matchesWonPerTeamYear')
const extraRunsConceded = require('./src/server/extraRuns')
const wonTossWonMatch = require('./src/server/wonTossWonMatch')
const topEconomicalBowlers = require('./src/server/topEconomicalBowlers')
const higestPlayerOfTheMatches = require('./src/server/higestMOM')
const bestStrikeRate = require('./src/server/bestStrikeRate')
const bestEconomySuperOver = require('./src/server/bestEconomySuperOver')
const playerDismissed = require('./src/server/playerDismissed')

fileNames = [
    'matchesPerYear',
    'matchesWonPerTeamYear',
    'extraRuns',
    'wonTossWonMatch',
    'topEconomicalBowlers',
    'higestMOM',
    'bestStrikeRate',
    'bestEconomySuperOver',
    'playerDismissed'
]
problemNumber = [0,1,2,3,4,5,6,7,8]

function main(){
    problemNumber.forEach(problem => {
        switch(problem){

            case 0:
                const matchYear = matchesPerYear(matchesData)
                writeObjectToOutput(fileNames[problem],matchYear)
                break

            case 1:
                const wonTeamMatches = matchesWonPerTeamYear(matchesData);
                writeObjectToOutput(fileNames[problem],wonTeamMatches)
                break

            case 2:
                const extraRunsByTeam = extraRunsConceded(deliveriesData,matchesData)
                writeObjectToOutput(fileNames[problem],extraRunsByTeam)
                break
            
            case 3:
                const bothTossMatch = wonTossWonMatch(matchesData)
                writeObjectToOutput(fileNames[problem],bothTossMatch)
                break
            
            case 4:
                const economicalBowlers =  topEconomicalBowlers(deliveriesData,matchesData)
                writeObjectToOutput(fileNames[problem],economicalBowlers)
                break
            
            case 5:
                const highestAwardsBySeason = higestPlayerOfTheMatches(matchesData)
                writeObjectToOutput(fileNames[problem],highestAwardsBySeason)
                break
            
            case 6:
                const higestStrikeRateSeason = bestStrikeRate(matchesData,deliveriesData)
                writeObjectToOutput(fileNames[problem],higestStrikeRateSeason)
                break

            case 7:
                const bestBowlerSuperOver = bestEconomySuperOver(deliveriesData)
                writeObjectToOutput(fileNames[problem],bestBowlerSuperOver)
                break
            
            case 8:
                const mostFrequentDismissal = playerDismissed(deliveriesData)
                writeObjectToOutput(fileNames[problem],mostFrequentDismissal)
                break
        }
    
    });
    
}

function writeObjectToOutput(fileName,dataObject){
    fs.writeFileSync(`./src/public/output/${fileName}.json`,JSON.stringify(dataObject,null,2))
}

main()