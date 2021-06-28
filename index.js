
let catHealth=document.querySelector('span.cathealth')
let dogHealth=document.querySelector('span.doghealth')
let fight=document.querySelector('button.fight')
let fightdog=document.querySelector('button.fightdog')
let fightcat=document.querySelector('button.fightcat')
let start=document.querySelector('div.start')
let wins=document.querySelector('div.wins')
let fighter=100
let catTurn=1
let dogTurn=2

catHealth.innerHTML='100'
dogHealth.innerHTML='100'

 function startgame(){
    fighter=document.querySelector('#fighter').selectedIndex;

console.log(fighter);
start.style.display = "none";
if(fighter == 0){
    fightdog.style.display = "block"
}else if(fighter == 1){
    fightcat.style.display ='block'
}

}

function attackdog(){
    let randomAttack=Math.floor(Math.random()*100)
    let dog=+dogHealth.textContent;

    if(catTurn == 1){
    dogHealth.innerHTML=dog - randomAttack;
    [catTurn,dogTurn]=[dogTurn,catTurn]
    }

    if(randomAttack > dog ){
        wins.innerHTML=' congratulations cat wins :) !!! '
    }
}
function attackcat(){
    let randomAttack=Math.floor(Math.random()*100)
    let cat=+catHealth.textContent;

    if(dogTurn == 1){
    catHealth.innerHTML=cat - randomAttack;
    [catTurn,dogTurn]=[dogTurn,catTurn]
    }

    if(randomAttack > cat ){
        wins.innerHTML=' congratulations dog wins :) !!! '
    }

}
function change(){

if(catTurn == 1 && fighter == 1){
    attackdog()
}else if(dogTurn == 1 && fighter == 0){
    attackcat()
}



}