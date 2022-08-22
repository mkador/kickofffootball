// Slected Part

const selectBtnPlayerOne = document.getElementById('player-1');
const selectBtnPlayerTwo = document.getElementById('player-2');
const selectBtnPlayerThree = document.getElementById('player-3');
const selectBtnPlayerFour = document.getElementById('player-4');
const selectBtnPlayerFive = document.getElementById('player-5');
const selectBtnPlayerSix = document.getElementById('player-6');

let countSelectedPlayer = 0;

function selectedPlayer(playerId,buttonId){
    if(countSelectedPlayer <=5){
    const playerName = document.getElementById(playerId).innerText;
    const selectedPlayer = document.getElementById('selected-player');
    const h5 = document.createElement('h5');
    h5.innerText = `${countSelectedPlayer+1}. ${playerName}`
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

// Calculation Part-2

document.getElementById('calculate-with-money').addEventListener('click',function(){
    const inputPerPlayerAmount = document.getElementById('input-per-player-amount');
    const inPutPerPlayerString = inputPerPlayerAmount.value;
    const inputPerPlayer = parseFloat(inPutPerPlayerString);
    if(isNaN(inputPerPlayer)){
        alert('Please enter a valid number');
        return;
    }
    const playersDeal = (inputPerPlayer * countSelectedPlayer);
    const playerExpenses = document.getElementById('player-expenses');
    playerExpenses.innerText = playersDeal;
    
})


document.getElementById('calculate-total').addEventListener('click',function(){
    const managerInputField = document.getElementById('manager-input-field');
    const managerInputString = managerInputField.value;
    const managerInputTaka = parseFloat(managerInputString);
   
    
    const coachInputField = document.getElementById('coach-input-field');
    const coachInputString = coachInputField.value;
    const coachInputTaka = parseFloat(coachInputString);
    
    if(isNaN(coachInputTaka) || isNaN(managerInputTaka)){
        alert('Please enter a valid number');
        return;
    }
    


    const playersDealString = document.getElementById('player-expenses').innerText
    const playersDeal  = parseFloat(playersDealString);
    if(isNaN(playersDeal)){
        alert('Please ,Calculate Player Expenses First');
        return;
    }
    

    const totalTaka = managerInputTaka + coachInputTaka + playersDeal;
    

    const totalAmount = document.getElementById('total-amount');
    totalAmount.innerText = totalTaka;
})