document.addEventListener("DOMContentLoaded", (event) => {
    let counter = document.querySelector('.counter')
    let increase = document.querySelector('.increase')
    let reset = document.querySelector('.reset')
    let decrease = document.querySelector('.decrease')

    let count = 0;    

    increase.addEventListener('click', () => {
        count++;
        counter.innerHTML =  count;
        counter.style.color = 'green';
        
    }) 
 
    decrease.addEventListener('click', () => {    
        count--;
        counter.innerHTML =  count;
        counter.style.color = 'red';
    })

    reset.addEventListener('click', () => {
        count = 0;
        counter.innerHTML = count;
        counter.style.color = 'black'
    })    
    
} )