function bestStrikeRate(matchesData,deliveriesData){

    const strikeRateSeason = deliveriesData.reduce((seasonData,delivery)=>{
        const batsman = delivery.batsman
        const runs = parseInt(delivery.batsman_runs,10)
        const isWideBall = delivery.wide_runs >= 1
        const season = matchesData.find((match)=>match.id === delivery.match_id).season

        if(!isWideBall){
            if(!seasonData[season]){
                seasonData[season] = {}
            }
            if(!seasonData[season][batsman]){
                seasonData[season][batsman] = {'runs':runs,'balls':1}
            }
            else{
                seasonData[season][batsman].runs += runs
                seasonData[season][batsman].balls += 1
            }
        }
        return seasonData
    },{})

    let higestStrikeRateSeason = {}

    for(const season in strikeRateSeason){

        higestStrikeRateSeason[season] = {
            maxStrikeRate : 0,
            batsman : ''
        }

        for(const batsman in strikeRateSeason[season]){

            const {runs,balls} = strikeRateSeason[season][batsman]
            const batsmanStrikeRate = (runs/balls) * 100

            if(batsmanStrikeRate > higestStrikeRateSeason[season].maxStrikeRate){
                higestStrikeRateSeason[season].maxStrikeRate = batsmanStrikeRate.toFixed(2)
                higestStrikeRateSeason[season].batsman = batsman
            }
        }
    }
    return higestStrikeRateSeason
}

module.exports = bestStrikeRate