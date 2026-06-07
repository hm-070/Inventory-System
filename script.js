const inventory = new Map();

function addToInventory(form){
    const itemNameFromForm = form.itemName.value;
    const noOfItems = form.amount.value;
    if (itemNameFromForm != "" && noOfItems != ""){
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
    }
    return false;
}

window.onload = function(){
    var table = document.getElementById("inventoryTable");
    table.innerHTML = `
    <tr>
        <th>Items</th>
        <th>Amount</th>
    </tr>
    `;
}

function updateTable(){
    var table = document.getElementById("inventoryTable");
    table.innerHTML = `
    <tr>
        <th>Items</th>
        <th>Amount</th>
    </tr>
    `;
    for (let [item, amount] of inventory){
        var row = table.insertRow(-1);
        var itemCell = row.insertCell(0);
        var amountCell = row.insertCell(1);
        var plusMinusCell = row.insertCell(2);
        var deleteCell = row.insertCell(3);
        itemCell.innerHTML = item;
        amountCell.innerHTML = amount;
        plusMinusCell.innerHTML = `<input type="button" id="plusOne${item}" value="+" onclick="plusOne('${item}')"><input type="button" id="minusOne${item}" value="-" onclick="minusOne('${item}')">`;
        deleteCell.innerHTML = `<input type="button" id="delete${item}" value="Delete" onclick="deleteItem('${item}')">`;
    }
}

function deleteItem(item){
    console.log(`deleteItem(${item})`);
    inventory.delete(item);
    updateTable();
}

function plusOne(item){
    console.log(`plusOne${item}`);
    var amount = inventory.get(item);
    amount++;
    inventory.set(item, amount);
    updateTable();
}

function minusOne(item){
    console.log(`minusOne${item}`);
    var amount = inventory.get(item);
    if (amount > 1){
        amount--;
    }
    inventory.set(item, amount);
    updateTable();
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