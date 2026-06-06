const inventory = new Map();

function addToInventory(form){
    const itemNameFromForm = form.itemName.value;
    const noOfItems = form.amount.value;
    console.log("item: " + itemNameFromForm + "\n no of items: " + noOfItems);
    if (isInMap(itemNameFromForm)){
        const noInList = Number(inventory.get(itemNameFromForm));
        const newNo = noInList + Number(noOfItems)
        inventory.set(itemNameFromForm, newNo);
    } else{
        inventory.set(itemNameFromForm, noOfItems);
    }
    displayMap();
    return false;
}

function resetInventory(){
    for(let [k, v] of inventory){
        inventory.delete(k);
    }
    console.log("Inventory Reset")
    displayMap()
}

function displayMap(){
    for(let [item, amount] of inventory){
        console.log("There are " + amount + " " + item + "s");
    }
}

function isInMap(val){
    for(let k of inventory.keys()){
        if (k == val){
            return true;
        }
    }
    return false;
}