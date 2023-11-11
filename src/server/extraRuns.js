function extraRunsConceded(deliveriesData,matchesData){

    const matchIds = matchesData
        .filter((match) => match.season ==2016)
        .map((match) => match.id)

    const filteredDeliveries = deliveriesData.filter((delivery)=>{
        return matchIds.includes(delivery.match_id)
    })

    return filteredDeliveries.reduce((extraRunsTeam,bowl)=>{
        team = bowl.bowling_team
        extraRuns = parseInt(bowl.extra_runs,10)
        if (!extraRunsTeam[team]){
            extraRunsTeam[team] = extraRuns
        }
        else{
            extraRunsTeam[team] += extraRuns
        }
        return extraRunsTeam
    },{})

}

module.exports = extraRunsConceded