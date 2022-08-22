// Slected Part

let countSelectedPlayer = 0;
const selectBtnPlayerOne = document.getElementById('player-1');
const selectBtnPlayerTwo = document.getElementById('player-2');
const selectBtnPlayerThree = document.getElementById('player-3');
const selectBtnPlayerFour = document.getElementById('player-4');
const selectBtnPlayerFive = document.getElementById('player-5');
const selectBtnPlayerSix = document.getElementById('player-6');



function selectedPlayer(playerId,buttonId){
    if(countSelectedPlayer <=5){
    const playerName = document.getElementById(playerId).innerText;
    const selectedPlayer = document.getElementById('selected-player');
    const h5 = document.createElement('h5');
    h5.innerText = `${countSelectedPlayer}. ${playerName}`
    selectedPlayer.appendChild(h5);
    buttonId.disabled = true;
    
    }
    else{
        alert('You are allowed to select five Players');
        return;
    }

}

function getInput(inputFieldId){
    const inputString = document.getElementById(inputFieldId).value;
    const inputValue = parseFloat(inputString);
    return inputValue;
    
}



selectBtnPlayerOne.addEventListener('click',function(){
    countSelectedPlayer++;
    selectedPlayer('player-1-name',selectBtnPlayerOne);

   
})

selectBtnPlayerTwo.addEventListener('click',function(){
    countSelectedPlayer++;
    selectedPlayer('player-2-name',selectBtnPlayerTwo);
})
selectBtnPlayerThree.addEventListener('click',function(){
    countSelectedPlayer++;
    selectedPlayer('player-3-name',selectBtnPlayerThree);
   
})

selectBtnPlayerFour.addEventListener('click',function(){
    countSelectedPlayer++;
    selectedPlayer('player-4-name',selectBtnPlayerFour);
})

selectBtnPlayerFive.addEventListener('click',function(){
    countSelectedPlayer++;
    selectedPlayer('player-5-name',selectBtnPlayerFive);
})


selectBtnPlayerSix.addEventListener('click',function(){
    countSelectedPlayer++;
    
    selectedPlayer('player-6-name',selectBtnPlayerSix);
})

// Calculation Part-2

document.getElementById('calculate-with-money').addEventListener('click',function(){
    const inputPerPlayer = getInput('input-per-player-amount');
    if(isNaN(inputPerPlayer)){
        alert('Please enter a valid number');
        return;
    }
    const playersDeal = (inputPerPlayer * countSelectedPlayer);
    const playerExpenses = document.getElementById('player-expenses');
    playerExpenses.innerText = playersDeal;
    
})


document.getElementById('calculate-total').addEventListener('click',function(){
   
    const managerInputTaka = getInput('manager-input-field');
    const coachInputTaka = getInput('coach-input-field');

    if(isNaN(managerInputTaka)|| isNaN(coachInputTaka)){
        alert('Please enter a valid number');
        return;
    }
    

    const playersDealString = document.getElementById('player-expenses').innerText
    const playersDeal  = parseFloat(playersDealString);
    if(isNaN(playersDeal)){
        alert('Please, Calculate Player Expenses First');
        return;
    }
    

    const totalTaka = managerInputTaka + coachInputTaka + playersDeal;
    const totalAmount = document.getElementById('total-amount');
    totalAmount.innerText = totalTaka;
})