function matchesPerYear(matchesData){
    
    return matchesData.reduce((matchYear,match)=>{
        const year = match.season
        if(!matchYear[year]){
            matchYear[year] = 1
        }
        else{
            matchYear[year]+=1
        }
        return matchYear
    },{})
    
}

module.exports = matchesPerYear;
