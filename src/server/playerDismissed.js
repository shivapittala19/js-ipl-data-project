function playerDismissedByBowler(deliveriesData){

    const dismissedPlayerBowler = deliveriesData.reduce(
        (dismissalCount,delivery) =>{
            const playerDismissed = delivery.player_dismissed
            const bowler =  delivery.bowler
            if(playerDismissed && bowler){
                if(!dismissalCount[playerDismissed]){
                    dismissalCount[playerDismissed] ={}
                }

                if(!dismissalCount[playerDismissed][bowler]){
                    dismissalCount[playerDismissed][bowler]  =1
                }
                else{
                    dismissalCount[playerDismissed][bowler] += 1
                }
               
            }
            return dismissalCount
        },{})

    let maxDismissals = 0
    let mostFrequentDismissal = {}

    for (const batsman in dismissedPlayerBowler) {
      for (const bowler in dismissedPlayerBowler[batsman]) {
        const dismissals = dismissedPlayerBowler[batsman][bowler];
        if (dismissals > maxDismissals) {
          maxDismissals = dismissals;
          mostFrequentDismissal = { batsman, bowler, dismissals };
        }
      }
    }
    return mostFrequentDismissal

}

module.exports = playerDismissedByBowler