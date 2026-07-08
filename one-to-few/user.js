/*
==========================================
MongoDB Relationship: One-to-Few
==========================================

Description:
A single User document stores a small number of Address documents as embedded subdocuments.

Example:

User
 ├── username
 └── addresses
      ├── location
      └── city

Best Used When: The number of child documents is small and does not grow significantly.
==========================================
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

main()
  .then(() => {
    console.log("✅ Connected to MongoDB");
    addUsers();
  })
  .catch(console.error);

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const userSchema = new Schema({
    username: String,
    addresses: [{
        location: String,
        city: String,
    }]
});

const User = mongoose.model('User', userSchema);

const addUsers = async () => {
    let user = new User({
        username: 'John Doe',
        addresses: [{
            location: '123 Main St',
            city: 'New York'
        }]
    });
    user.addresses.push({
        location: '456 Elm St',
        city: 'Los Angeles'
    });

    let result = await user.save();
    console.log(result);
};