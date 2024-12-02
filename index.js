let guess=(Math.floor(Math.random()*100)+1)
const hints =document.getElementById('hint')
const Attempt = document.getElementById('att')
const get_btn=document.getElementById('btn')
console.log(guess)
let count = 0
let game_state = 0
const total_guesses = 11


function check(){
    let val =  document.forms[0]['val'].value
    count++
    Attempt.innerHTML = count;
    console.log(val)
    console.log('count:',count);

    if(game_state==0 && count < total_guesses){
        if(val==guess){
            hints.innerHTML = 'Guess is Correct'
            game_state =1
            get_btn.innerHTML = 'Reset'
         Attempt.innerHTML = 'Attempts : '+count
        // console.log('Attempt:'+count )
        
        }

        else if(val<guess){
            console.log('Guess is lower');
            console.log('Attempt:'+count )
            hints.innerHTML = 'Guess is lower'
            Attempt.innerHTML = 'Attempts : '+ count
        
        }
        else{
            console.log('Guess is Higher');
            console.log('Attempt:'+count )
            hints.innerHTML = 'Guess is Higher'
            Attempt.innerHTML = 'Attempts : '+count
        
        }
    }
        else{
            console.log('game over')
                Reset()
         
            }

        if(count==10){
            hints.innerHTML = 'Game over'
            Reset();
        }
}

function Reset(){
   // const get_btn = document.getElementById('btn')
    get_btn.innerHTML = 'Reset'
    count = 0
    console.log('Attempts : '+count)
    Attempt.innerHTML = 'Attempts : '+count
    guess=(Math.floor(Math.random()*100)+1)
    hints.innerHTML = 'Guess it'


}
