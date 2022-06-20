'use strict';
// console.log(document.querySelector('.message').textContent); 
// document.querySelector('.message').textContent='Correct Number';
// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textConternt=10;
// document.querySelector('.guess').value=23;

let number=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;

document.querySelector('.check').addEventListener('click',function(){
    const guess= Number(document.querySelector('.guess').value);

    if(!guess){
        document.querySelector('.message').textContent='⛔ No Number';
    }

    //player win 

    else if(guess===number){
        document.querySelector('.message').textContent='🎉🎉🎉Hurray, You Got Me!!';
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
        document.querySelector('.number').textContent=number;
        

        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
    }


    //guess too high

    else if(guess>number){
        if(score>1){
            document.querySelector('.message').textContent='Too High!';
            score=score-1;
            document.querySelector('.score').textContent=score;
            
        }
       else{
        document.querySelector('.message').textContent="You Lost the Game";
        document.querySelector('.score').textContent=0;
        document.querySelector('body').style.backgroundColor='#ff0000';
       }
    }
    else if(guess < number){
        if(score>1){
            document.querySelector('.message').textContent='Too Low!';
            score=score-1;
            document.querySelector('.score').textContent=score;
           
        }
       else{
        document.querySelector('.message').textContent="You Lost the Game";
        document.querySelector('.score').textContent=0;
        document.querySelector('body').style.backgroundColor='#0285';
       }
    }
});
document.querySelector('.again').addEventListener('click',function(){

    score=20;
    number=number=Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent='Start Guessing.';
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
});