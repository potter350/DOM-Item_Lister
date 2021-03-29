let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');


//event for submit add item
form.addEventListener('submit', addItem)

//delete event
itemList.addEventListener('click', removeItem)

//filter event
filter.addEventListener('keyup', filterItems)

//capturing text input
function addItem(e) {
   e.preventDefault()

  let newItem = document.getElementById('item').value;
  
  //creating li to add to listItems
  let li = document.createElement('li')
  li.className = 'list-group-item '

  //li.textContent = newItem
  li.appendChild(document.createTextNode(newItem))
  console.log(li)

  //creating delete button
  let deletebtn = document.createElement('button')
  deletebtn.className = 'btn btn-danger btn-sm float-right delete'
  deletebtn.textContent = 'X'

  //adding button to Li
  li.appendChild(deletebtn)

  //adding li to ul
  itemList.appendChild(li)
}



//removing items
function removeItem(e) {

    if(e.target.classList.contains('delete')) {
        
        if (confirm('Are you sure')) {
            let li = e.target.parentElement
            itemList.removeChild(li)
        }
    }
    
}

// // Filter Items
// function filterItems(e){
//     // convert text to lowercase
//     var text = e.target.value.toLowerCase();
//     // Get lis
//     var items = itemList.getElementsByTagName('li');
//     // Convert to an array
//     Array.from(items).forEach(function(item){
//       var itemName = item.firstChild.textContent;
//       if(itemName.toLowerCase().indexOf(text) != -1){
//         item.style.display = 'block';
//       } else {
//         item.style.display = 'none';
//       }
//     });
//   }

//filter Item
function filterItems(e) {
  //converting text to lowercase
  let text = e.target.value.toLowerCase();
  //console.log(text)
  //getting list 
   let items = itemList.getElementsByTagName('li');
   //console.log(items)
  // converting to array (becoz its a
  // html collection - so cant perform array methods)

         Array.from(items).forEach(function(item){
           let itemName = item.firstChild.textContent;
           console.log(itemName)
           console.log(itemName.toLowerCase())
                if(itemName.toLowerCase().indexOf(text) != -1) {
                    item.style.display = 'block';
                }
                else{
                    item.style.display = 'none';
                }

        });
        
}
