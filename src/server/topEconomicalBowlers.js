function topEconomicalBowlers(deliveriesData,matchesData){

    const matchIds = matchesData
        .filter((match) => match.season ==2015)
        .map((match) => match.id)

    const filteredDeliveries2015 = deliveriesData.filter((delivery) => {
        return matchIds.includes(delivery.match_id);
      });

    const bowlerStats = filteredDeliveries2015.reduce((runsBalls,delivery)=>{
        const bowler = delivery.bowler
        const totalRuns = parseInt(delivery.total_runs,10) - parseInt(delivery.legbye_runs,10)
        const isWideBall = delivery.wide_runs >= 1
        const isNoBall = delivery.noball_runs >= 1

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

    const top10EconomicalBowlers = Object.entries(bowlerEconomy).sort((a,b)=>a[1]-b[1]).slice(0,10)

    const convertedData = top10EconomicalBowlers.map((item) => {
        return {
          bowler: item[0],
          economy: item[1], 
        };
      });

    return convertedData
}

module.exports = topEconomicalBowlers