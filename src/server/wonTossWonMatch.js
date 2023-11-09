function wonTossWonMatch(matchesData){

    return matchesData.reduce((bothTossMatch,match) =>{
        const tossWinner = match.toss_winner
        const winner = match.winner
        if (tossWinner == winner){
            if (!bothTossMatch[winner]){
                bothTossMatch[winner] = 1
            }
            else{
                bothTossMatch[winner] += 1
            }
        }
        return bothTossMatch
    },{})
}

module.exports = wonTossWonMatch;