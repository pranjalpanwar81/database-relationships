/*
==========================================
MongoDB Relationship: One-to-Many
==========================================

Description:
A Customer stores references (ObjectIds) to multiple Order documents.

Example:

Customer
 ├── name
 └── orders
      ├── ObjectId(Order1)
      ├── ObjectId(Order2)
      └── ObjectId(Order3)

Uses:
- References
- ObjectId
- populate()

==========================================
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Connect to MongoDB
main()
  .then(async () => {
    console.log("✅ Connected to MongoDB");

    await addCustomer();

    mongoose.connection.close();
  })
  .catch(console.error);

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

// ====================
// Order Schema
// ====================

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const Order = mongoose.model("Order", orderSchema);

// ====================
// Customer Schema
// ====================

const customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

const Customer = mongoose.model("Customer", customerSchema);

// ====================
// Add Customer & Orders
// ====================

async function addCustomer() {

  // Delete old data (optional, useful while practicing)
  await Order.deleteMany({});
  await Customer.deleteMany({});

  // Create Orders
  const order1 = await Order.create({
    item: "Laptop",
    price: 999,
  });

  const order2 = await Order.create({
    item: "Mouse",
    price: 29,
  });

  const order3 = await Order.create({
    item: "Keyboard",
    price: 49,
  });

  // Create Customer
  const customer = new Customer({
    name: "Jane Smith",
    orders: [order1._id, order2._id, order3._id],
  });

  // Save Customer
  await customer.save();

  console.log("\n✅ Customer Saved Successfully\n");

  // Fetch Customer with Orders
  const result = await Customer.findOne({
    name: "Jane Smith",
  }).populate("orders");

  console.log("========== Customer Details ==========\n");

  console.log(result);
}