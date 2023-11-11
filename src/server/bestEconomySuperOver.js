function bestEconomySuperOver(deliveriesData){

    const bowlerStats = deliveriesData.reduce((runsBalls,delivery)=>{
        const bowler = delivery.bowler
        const totalRuns = parseInt(delivery.total_runs,10) - parseInt(delivery.legbye_runs,10)
        const isWideBall = delivery.wide_runs >= 1
        const isNoBall = delivery.noball_runs >= 1
        const isSuperOver = delivery.is_super_over == 1

        if(isSuperOver){
            if(!isNoBall && !isWideBall){
                if(!runsBalls[bowler]){
                    runsBalls[bowler] = {runs:totalRuns,balls:1}
                }
                else{
                    runsBalls[bowler].runs += totalRuns
                    runsBalls[bowler].balls += 1
                }
            }
            else{
                if(!runsBalls[bowler]){
                    runsBalls[bowler] = {runs:totalRuns,balls:0}
                }
                else{
                    runsBalls[bowler].runs += totalRuns
                }
            }
        }
        return runsBalls
    },{})

    const bowlerEconomy = Object.keys(bowlerStats).reduce((economyData,bowler)=>{
        const runs = bowlerStats[bowler].runs
        const balls = bowlerStats[bowler].balls
        if(!economyData[bowler]){
            economyData[bowler]=((runs/balls)*6).toFixed(2)
        }
        return economyData
    },{})

    const bestEconomyBowler = Object.entries(bowlerEconomy).sort(
        (a, b) => a[1] - b[1]
      )[0]

    const [bestBowlerName, economy] = bestEconomyBowler

    const bestBowlerObject = {
        [bestBowlerName]: economy,
      };

    return bestBowlerObject
}

module.exports = bestEconomySuperOver