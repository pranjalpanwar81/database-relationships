/*
==========================================
MongoDB Relationship: One-to-Squillions
==========================================

Description:
Instead of storing millions of references
inside one User document, each Post stores
the User's ObjectId.

Example:

User
 ├── username
 └── email

Post
 ├── content
 ├── likes
 └── user (ObjectId)

Best Used When:
A parent document can have thousands or
millions of child documents.

==========================================
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

main()
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch(console.error);

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const userSchema = new Schema({
    username: String,
    email: String,
});

const postSchema = new Schema({
    content: String,
    likes: Number,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});

const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);

const addData = async () => {
    let user1 = new User.findOne({
        username: 'John Doe',
        email: 'john.doe@example.com'
    });

    let post1 = new Post({
        content: 'This is my first post!',
        likes: 10,
        user: user1._id
    });

    post1.user = user1._id;

    await user1.save();
    await post1.save();

    // console.log('User and Post saved successfully!');
}

addData();