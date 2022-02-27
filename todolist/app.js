//selectors
const form = document.querySelector('form')
const input = document.querySelector('#input-area')
const header = document.querySelector('.header h1')
const selectType = document.querySelector('#select-area')
const selectArrow = document.querySelector('.button')
const listContainer = document.querySelector('.list')

// variables
let editElement;
let editFlag = false;

// event listeners
form.addEventListener('submit', createItem)
selectType.addEventListener('change', filterItems)
selectArrow.addEventListener('change', filterItems)
listContainer.addEventListener('click', checkEditDel)

// function for creating an item
function createItem(event){
    event.preventDefault()

    //Collecting input field value/data
    const inputVal = input.value
    const id = new Date().getTime().toString();

    //Creating a new item
    if (inputVal && !editFlag){

    //Creating div container
        const itemContainer = document.createElement('div')
        
        itemContainer.classList.add('item')

    //Creating Text Element/ Title
        itemContainer.innerHTML = `<p>${inputVal}</p>
        <div class="iconbtns">
          <i class="fas fa-check checkicon"></i>
          <i class="fas fa-edit editicon"></i>
          <i class="fas fa-trash-alt trashicon"></i>
        </div>`
        
        //Appending them together
        listContainer.appendChild(itemContainer)
        backToDefault()
    } else if (inputVal && editFlag){
        editElement.innerHTML = inputVal;
        backToDefault()
    } 
}

//function to 'back to default'
function backToDefault(){
    input.value = ''
    editElement = ''
    editFlag = false;
}

// function to check/complete edit and delete item
function checkEditDel(e){
    let thisOne = e.target
    let currentItem = thisOne.parentElement.parentElement
    //Checked Item
    if(thisOne.classList.contains('checkicon')){
        currentItem.classList.toggle('checked')
    }
    //Edit Item
    if(thisOne.classList.contains('editicon')){
        editElement = currentItem.firstChild;
        input.value = editElement.innerHTML
        editFlag = true;
    }
    // Delete Item
    if (thisOne.classList.contains('trashicon')){
        currentItem.classList.add('fall')
        currentItem.addEventListener('transitionend', function(){
            currentItem.remove()
        })         
    }
}

// function for filtering the item
function filterItems(e){
    let selectType = e.target.value
    let items = document.querySelectorAll('.item')

    items.forEach(item => {
        switch(selectType){
            case 'all':
                item.style.display = 'flex'
                break;
            case 'completed':
                item.classList.contains('checked') ?
                item.style.display = 'flex' : item.style.display = 'none'
                break;
            case 'incomplete':
                !item.classList.contains('checked') ?
                item.style.display = 'flex' : item.style.display = 'none'
                break;
            default:
                header.innerHTML = 'Not found'
        }
    })   
}


// function to save into local storage
function saveToLocalStorage(){
    localStorage.setItem('orange', JSON.stringify('item1'))
}
saveToLocalStorage()
