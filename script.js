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
    updateTable();
    return false;
}

function updateTable(){
    var table = document.getElementById("inventoryTable");
    table.innerHTML = `
    <br>
    <tr>
        <th>Items</th>
        <th>Amount</th>
    </tr>
    `;
    for (let [item, amount] of inventory){
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        // Items cell
        cell1.innerHTML = item;
        // Amount cell
        cell2.innerHTML = amount;
    }
}

function resetInventory(){
    for(let [k, v] of inventory){
        inventory.delete(k);
    }
    console.log("Inventory Reset");
    updateTable();
    displayMap();
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