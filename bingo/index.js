let card =[];

//get name of user
function getName(){
    return prompt("Please introduce your name");
}
//get confirmation to start working with board
function getConfirm(){
    return confirm("Do you want to play with this board?");
}
//get a random number 1-10
function genRamNum(){
    return Math.floor((Math.random() * 10) + 1);
}

//generate only unique numbers
function randomNoRepeats(array) {
    var numbers = array.slice(0);
    return function () {
        if (numbers.length < 1) { numbers = array.slice(0); }
        var index = Math.floor(Math.random() * numbers.length);
        var item = numbers[index];
        numbers.splice(index, 1);
        return item;
    };
}
var numberSelected = randomNoRepeats([1,2,3,4,5,6,7,8,9,10]);

//make board with random numbers
function getCard(){
    for (let i = 0; i<15; i++){
        var ramNum=genRamNum();
        card.push(ramNum);
    }  
   console.log(card.slice(0,5) + '\n' + card.slice(5,10) + '\n'+ card.slice(10,15) + '\n');

    if (!getConfirm()){
        card = getCard();
    }
    return card;
}
//check if random number exists in card
function matchNum(){
    matchRanNum = numberSelected();
    for (let i = 0; i<=card.length-1;i++){
        if (card[i]===matchRanNum){
            card[i]="X";
        }
    } 
    console.log(
      `The number that came up is ${matchRanNum} \n`+ 
        card.slice(0,5) + '\n' + card.slice(5,10) + '\n'+ card.slice(10,15) + '\n');
    
  /*  while(card[i]!=="X"){
        matchNum(card);
    }*/
    var continuePlaying = confirm('Do you want to continue?')
    if(continuePlaying) {
        matchNum()
    } else {
        return alert('Goodbye')
    }
}

function bingo(){
    let name = getName();
    if (name.length!==0){
        console.log(`Welcome ${name}`);
        /*showPointRules()*/
        getCard();
        matchNum();              
    } else {
        console.log("Please introduce your name")
    }
    if (confirm("One more game?")){
        bingo();
    } else{
        console.log(`See you later ${name}`);
    }  
}
bingo();


