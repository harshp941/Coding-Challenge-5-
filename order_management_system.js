// Task 1 Create an Inventory Array of Product Objects
let inventory = [
    {name: "Cold Brew" , price: 5, quantity: 12},
    {name: "Energy Drink" , price: 3, quantity: 15},
    {name: "Dark Roast" , price: 6, quantity: 10},
    {name: "Light Roast" , price: 4, quantity: 5},
    {name: "Mug" , price: 10, quantity: 7}
];
console.log(inventory);

// Task 2 Create an Orders Array of Order Objects
let orders = [];


// Task 3 Create a Function to Place an Order

function placeOrder(customerName,itemsOrdered) {   
    itemsOrdered.forEach(item => {
        let product = inventory.find(p => p.name === item.name);
        //to check if product is in stock and has enough quantity
       if (!product.name || product.name < product.quantity)
            return;
});
    if (inventory.quantity <= 0) {
         console.log(`Error: item not in stock :( `);
        return;
    }

itemsOrdered.forEach(item => {
    let product = inventory.find(p => p.name === item.name);
    product.quantity -= item.quantity;
});

let newOrder = {
    customerName: customerName,
    itemsOrdered: itemsOrdered,
    status: "Pending"
};
orders.push(newOrder);
}
console.log(placeOrder("Jake Bag", {name:"Energy Drink", quantity: 2}));
console.log(`Order has been placed for ${customerName}`, newOrder);

//Task 4 Create a Function to Calculate Total for an Order
function calculateOrderTotal(order){
return order.item.reduce((total,item) => {
    let product = inventory.find(p => p.name === item.name);
    return total + (product.price * item.quantity);
},0);
}
console.log(calculateOrderTotal(orders[0]));

//Task 5 Create a Function to Mark an Order as Completed
function completeOrder(customerName) {{
    let order = orders.find(order => order.customerName === customerName && order.status === "Pending");
    if (order) {
        order.status = "Completed";
        console.log(`Order for has been completed for ${customerName} `)
    } else {
console.log(`No order found for ${customerName}`)
    }
}
}
console.log("Jake Bag");

//Task 6 Create a Function to Check Pending Orders
function checkPendingOrders(orders) {
    orders.forEach(orders =>
    {if (orders.status = "Pending") {

 } } )
};
console.log(`Details for pending Orders${checkPendingOrders(orders)}`)
