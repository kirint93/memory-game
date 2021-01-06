
const cardContainer = document.querySelectorAll(".card")
const front = document.querySelectorAll("front")
let firstCard,  secondCard;

const display = document.getElementById('timer');
const alertText = document.getElementById("alert-text");


cardContainer.forEach(container => container.addEventListener("click", (event) => { 
    const [front, back] = container.children
    front.classList.toggle("front-show")
    back.classList.toggle("back-hide")


    console.log(event);
    console.log(container.dataset);
    
    
    

    

    if ( firstCard === undefined) {
        second = 0;
        minute = 0; 
        hour = 0;
        startTimer();
        return   firstCard = container.dataset.number;
    } 
    if ( secondCard === undefined) {
        secondCard = container.dataset.number;
    }

    if (firstCard === secondCard ) {
        alertText.innerHTML = "<p>You found a match!</p>";
        
    }else{        
        alertText.innerHTML = "<P> Keep Trying </P>";

            setTimeout(() => {
                
                 back.classList.toggle("back-hide")
                 
                },2000);
        }
    }));
    
    
    var second = 0, minute = 0;
    const timer = document.querySelector(".timer");
    let interval;
    function startTimer(){
        interval = setInterval(function(){
            timer.innerHTML = minute+"mins "+second+"secs";
            second++;
            if(second == 60){
                minute++;
                second = 0;
            }
            if(minute == 60){
                hour++;
                minute = 0;
            }
        },1000);
    }
    function moveCounter(){
        moves++;
        counter.innerHTML = moves;
        //start timer on first move
        if(moves == 1){
            second = 0;
            minute = 0; 
            hour = 0;
            startTimer();
        }


(function shuffle() {
        cardContainer.forEach(container => {
            let ramdomPos = Math.floor(Math.random() * 12);
            container.style.order = ramdomPos;
        });
        })(); 


    }
