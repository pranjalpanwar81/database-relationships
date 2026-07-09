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

customerSchema.post("findOneAndDelete", async (customer) => {
  if (customer.orders.length) {
    let res = await Order.deleteMany({ _id: { $in: customer.orders } });
    customer.log(res);
  }
});

const Customer = mongoose.model("Customer", customerSchema);

//Functions 
const findCustomer = async () => {
    let result = await Customer.find({}).populate("orders");
    console.log(result[0]);
}; 

const addCustomer = async () => {
    let newcust = new Customer({
        name: "Pranjal"
    });

    let newOrder =  new Order({
        item: "Laptop",
        price: 1000
    });

    newcust.orders.push(newOrder);
    await newOrder.save();
    await newcust.save();

    console.log("Customer and Order added successfully!");
};

const deleteCustomer = async () => {
    let data = await Customer.findByIdAndDelete("6a4f48f918c14698a1d30cf5");
    console.log(data);
}

deleteCustomer();