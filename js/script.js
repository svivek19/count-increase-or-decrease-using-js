const contentEl = document.querySelector('.content');
const incrementEl = document.querySelector('.increment');
const decrementEl = document.querySelector('.decrement');

let count = 0;

function contentDisplay() {
    contentEl.textContent = count;
    contentEl.className = count > 0 ? 'positive' : count < 0 ? 'negative' : '';
}

incrementEl.addEventListener('click',(event)=>{
    event.preventDefault()
    count++;
    contentDisplay()
})
decrementEl.addEventListener('click',(e)=>{
    e.preventDefault()
    count--;
    contentDisplay();
})
