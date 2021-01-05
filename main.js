

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
             
                },2000);
        }
    }));
    
    
        


(function shuffle() {
        cardContainer.forEach(container => {
            let ramdomPos = Math.floor(Math.random() * 12);
            container.style.order = ramdomPos;
        });
        })(); 


        
