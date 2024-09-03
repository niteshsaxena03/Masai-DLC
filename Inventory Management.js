class Inventory {
  object1 = {};

  constructor(id, name, quantity, price) {
    this.object1 = { id: id, name: name, quantity: quantity, price: price };
  }

  addItem(inventory, item) {
    inventory.push(item);
  }
  deleteItem(inventory, id) {
    for (let i = 0; i < inventory.length; i++) {
      if (inventory[i].object1.id === id) {
        inventory.splice(i, 1);
      }
    }
  }
  updateItem(inventory, id, newDetails) {
    for (let i = 0; i < inventory.length; i++) {
      if (inventory[i].object1.id === id) {
        inventory[i].object1 = newDetails;
      }
    }
  }
  printInventory(inventory) {
    console.log(inventory);
  }
  getItem(inventory, id) {
    for (let i = 0; i < inventory.length; i++) {
      if (inventory[i].object1.id === id) {
        console.log(inventory[i].object1);
      }
    }
  }
}

//created an empty inventory
const inventory = [];

const obj1 = new Inventory(1, "Apple", 10, 0.5);
const obj2 = new Inventory(2, "Banana", 20, 0.2);

//pushing initial elements
inventory.push(obj1);
inventory.push(obj2);

console.log("Initial items are", inventory);
const obj3 = new Inventory(3, "Orange", 15, 0.7);

//adding a new item
obj3.addItem(inventory, obj3);
console.log("After adding item is:");

//printing the inventory
obj3.printInventory(inventory);

const obj4 = new Inventory();
const updatedItem = { id: 2, name: "Banana", quantity: 30, price: 0.2 };

//updating an item
obj4.updateItem(inventory, 2, updatedItem);
console.log("Updated item is:");
obj4.printInventory(inventory);

const obj5 = new Inventory();

//deleting an item
obj5.deleteItem(inventory, 2);
console.log("After deleting the item is:");
obj5.printInventory(inventory);

const obj6 = new Inventory();
console.log("Item with id 2 is");
obj6.getItem(inventory, 2);
