function printOrderDetails(order_id, quantity, item_name){
    if(quantity <= 0 ){
        console.log("Pls select at least 1 item");
    } else{
        total = price * quantity;
        console.log(`The order id is ${order_id} quantity of ${quantity} ${item_name} total price is  ${total} rs`);
    }
}

order_id = prompt("Enter the Order ID");
quantity = prompt("Enter the Quantity");
item_name = prompt("Enter  the item name ");
price = 10;
total = 0;
console.log(printOrderDetails(order_id, quantity,item_name));