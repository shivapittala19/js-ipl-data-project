function higestPlayerOfTheMatches(matchesData){
    
    const groupBySeason = matchesData.reduce((awardsBySeason,match) =>{

        const season = match.season
        const playerOfTheMatch = match.player_of_match

        if(!awardsBySeason[season]){
            awardsBySeason[season] = {}
        }

        if(!awardsBySeason[season][playerOfTheMatch]){
            awardsBySeason[season][playerOfTheMatch] = 1
        }
        else{
            awardsBySeason[season][playerOfTheMatch] += 1
        }
        return awardsBySeason
    },{})

    // const groupByPlayerSeason = groupBySeason.reduce(
    //     (highestAwardsBySeason,eachSeason) =>{
    //         const highestPlayerAward = eachSeason.reduce(
    //             (playerAward,{player,awards})=>{
    //                 if (awards > playerAward.awards){
    //                     playerAward.player = player
    //                     playerAward.awards = awards
    //                 }
    //                 return playerAward
    //             },{player:'',awards:0})
    //         highestAwardsBySeason[eachSeason] = highestPlayerAward
    //         return highestAwardsBySeason  
    //     },
    // {})
    // return groupByPlayerSeason

    const highestAwardsBySeason = {};

    for (const season in groupBySeason) {
        highestAwardsBySeason[season] = Object.entries(groupBySeason[season]).reduce(
        (playerAward, [player, awards]) => {
            if (awards > playerAward.awards) {
            playerAward.player = player;
            playerAward.awards = awards;
            }
            return playerAward;
        },
        { player: '', awards: 0 }
        );
    }
    return highestAwardsBySeason
}

module.exports = higestPlayerOfTheMatches