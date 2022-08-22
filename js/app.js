// Slected Part

const selectBtnPlayerOne = document.getElementById('player-1');
const selectBtnPlayerTwo = document.getElementById('player-2');
const selectBtnPlayerThree = document.getElementById('player-3');
const selectBtnPlayerFour = document.getElementById('player-4');
const selectBtnPlayerFive = document.getElementById('player-5');
const selectBtnPlayerSix = document.getElementById('player-6');

let countSelectedPlayer = 1;

function selectedPlayer(playerId,buttonId){
    if(countSelectedPlayer <=5){
    const playerName = document.getElementById(playerId).innerText;
    const selectedPlayer = document.getElementById('selected-player');
    const h5 = document.createElement('h5');
    h5.innerText = `${countSelectedPlayer}. ${playerName}`
    selectedPlayer.appendChild(h5);
    buttonId.disabled = true;
    countSelectedPlayer++;
    }
    else{
        alert('You are allowed to select five Players');
    }

}


selectBtnPlayerOne.addEventListener('click',function(){
    selectedPlayer('player-1-name',selectBtnPlayerOne);
   
})

selectBtnPlayerTwo.addEventListener('click',function(){
    selectedPlayer('player-2-name',selectBtnPlayerTwo);
})
selectBtnPlayerThree.addEventListener('click',function(){
    selectedPlayer('player-3-name',selectBtnPlayerThree);
   
})

selectBtnPlayerFour.addEventListener('click',function(){
    selectedPlayer('player-4-name',selectBtnPlayerFour);
})

selectBtnPlayerFive.addEventListener('click',function(){
    selectedPlayer('player-5-name',selectBtnPlayerFive);
})


selectBtnPlayerSix.addEventListener('click',function(){
    selectedPlayer('player-6-name',selectBtnPlayerSix);
})
