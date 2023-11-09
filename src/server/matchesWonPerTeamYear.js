function matchesWonPerTeamYear(deliveriesData){

    return deliveriesData.reduce((wonTeamMatches,match)=>{
        const winner = match.winner
        const year = match.season

        if(!wonTeamMatches[year]){
            wonTeamMatches[year] = {}
        }

        if(!wonTeamMatches[year][winner]){
            wonTeamMatches[year][winner] = 1
        }
        else{
            wonTeamMatches[year][winner]+= 1
        }
        return wonTeamMatches
    },{})

}

module.exports = matchesWonPerTeamYear;