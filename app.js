'use strict';
const items = document.querySelectorAll(".item");
const sortablelist = document.querySelector(".sortable-list");

items.forEach(item=>{
    item.addEventListener("dragstart",()=>{
        //adding delay
        setTimeout(()=>item.classList.add("dragging"),0);
    });
    item.addEventListener("dragend",()=>{
        item.classList.remove('dragging');
    });
})
const initSortableList=(e)=>{
    const draggingItem = sortablelist.querySelector(".dragging");
    // Getting all the elements except currently dragging and making an array of them
    const siblings = [...sortablelist.querySelectorAll(".item:not(.dragging)")];
    //Finding the sibling aftr which the dragging item should be placed
    let nextSibling = siblings.find(sibling=>{
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight /2;
    });
    //Inserting the dragging item before the next sibling.
    sortablelist.insertBefore(draggingItem, nextSibling)
    }
sortablelist.addEventListener("dragover", initSortableList);
sortablelist.addEventListener('dragenter',e=>e.preventDefault());