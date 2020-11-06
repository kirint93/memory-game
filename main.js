


const cardContainer = document.querySelectorAll(".card")

let firstCard,  secondCard;
let clickedCards = [];


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
        alert("Well done you found a match")    
    }else{
            setTimeout(() => {
    back.classList.toggle("back-hide")
                }, 500);
        }
    }));

    
