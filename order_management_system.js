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

   
   // for (let quantity in itemsOrdered) {
   //     inventory.find(item => itemsOrdered.name === item.name);
     //   if (!itemsOrdered) {
       //     console.log(`Error: Item doesn't exist`);
         //  break;
       //}
      //if(itemsOrdered.quantity > inventory.quantity) {
        //    console.log(`Error: No items in stock`);
          //  break;
      // }
   // }
   // for (let quantity in itemsOrdered) {
   //     inventory.find(item = itemsOrdered.name === item.name);
     //  itemsOrdered.quantity -= inventory.quantity;
   // }

let newOrder = {
    customerName: customerName,
    itemsOrdered: itemsOrdered,
    status: "Pending"
};
orders.push(newOrder);
}
console.log(placeOrder("Jake Bag", {name:"Energy Drink", quantity: 2}));
console.log(`Order has been placed for ${customerName}`, newOrder);
