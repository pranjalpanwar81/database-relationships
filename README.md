# MongoDB Database Relationships with Mongoose

This repository contains my practice code for learning **MongoDB Database Relationships** using **Node.js**, **MongoDB**, and **Mongoose**.

It is part of my backend development learning journey, where I explore different relationship patterns, schema design techniques, and best practices used in real-world applications.

---

## 📚 Relationships Covered

| Relationship | Status |
|--------------|--------|
| One-to-Few | ✅ Completed |
| One-to-Many | ✅ Completed |
| One-to-Squillions | ✅ Completed |
| Many-to-Many | ⏳ Coming Soon |
| Virtual Populate | ⏳ Coming Soon |
| Aggregation Pipeline | ⏳ Coming Soon |
| Transactions | ⏳ Coming Soon |

---

## 📖 Relationship Overview

### 1. One-to-Few

**Folder:** `one-to-few`

A single document contains a small number of embedded documents.

**Example**

```
User
 ├── username
 └── addresses
      ├── location
      └── city
```

**Best Used When**

- Related data is small.
- Child documents are always accessed with the parent.
- Better read performance is required.

---

### 2. One-to-Many

**Folder:** `one-to-many`

A parent document stores references to multiple child documents using **ObjectIds**.

**Example**

```
Customer
 ├── name
 └── orders
      ├── ObjectId(Order1)
      ├── ObjectId(Order2)
      └── ObjectId(Order3)
```

### Concepts Practiced

- Referenced Documents
- ObjectId
- `ref`
- `populate()`
- Saving related documents
- Fetching related documents
- Cascade Delete using Mongoose Middleware

---

### 3. One-to-Squillions

**Folder:** `one-to-many/posts.js`

Instead of storing millions of references inside one document, every child document stores the parent's ObjectId.

**Example**

```
User
 ├── username
 └── email

Post
 ├── content
 ├── likes
 └── user (ObjectId)
```

This is the recommended approach when a parent can have a very large number of child documents.

---

## 🛠️ Technologies Used

- Node.js
- MongoDB
- Mongoose
- JavaScript

---

## 📂 Project Structure

```
database-relationships/

├── one-to-few/
│   └── user.js
│
├── one-to-many/
│   ├── customer.js
│   ├── handlingdeletion.js
│   └── posts.js
│
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## 📄 File Descriptions

### 📁 one-to-few

| File | Description |
|------|-------------|
| `user.js` | Demonstrates the **One-to-Few** relationship using embedded documents. A User document stores multiple addresses directly inside the same document. |

---

### 📁 one-to-many

| File | Description |
|------|-------------|
| `customer.js` | Demonstrates a **One-to-Many** relationship using **ObjectId references**. A Customer stores references to multiple Order documents and uses `populate()` to retrieve complete order details. |
| `handlingdeletion.js` | Demonstrates **Cascade Delete** using Mongoose middleware (`pre("findOneAndDelete")`). When a customer is deleted, all related orders are automatically removed to maintain database consistency. |
| `posts.js` | Demonstrates the **One-to-Squillions** relationship where each Post stores the User's ObjectId instead of the User storing millions of Post references. This approach is suitable for scalable applications. |

---

## 🚀 Installation

Clone the repository

```bash
git clone https://github.com/pranjalpanwar81/database-relationships.git
```

Move into the project directory

```bash
cd database-relationships
```

Install dependencies

```bash
npm install
```

Start MongoDB

```bash
mongod
```

or (Homebrew)

```bash
brew services start mongodb-community
```

Run the examples

```bash
node one-to-few/user.js
```

```bash
node one-to-many/customer.js
```

```bash
node one-to-many/handlingdeletion.js
```

```bash
node one-to-many/posts.js
```

---

## 🎯 What I Learned

- MongoDB Schema Design
- Embedded Documents
- Referenced Documents
- ObjectId Relationships
- Mongoose Models
- Schema References (`ref`)
- populate()
- Mongoose Middleware
- Cascade Delete
- One-to-Few Relationship
- One-to-Many Relationship
- One-to-Squillions Relationship
- Schema Design Best Practices

---

## 📝 Key Takeaways

- Use **Embedded Documents** when related data is small and always accessed together.
- Use **Referenced Documents** when related data grows independently.
- **ObjectId** is used to establish relationships between collections.
- **ref** tells Mongoose which model the ObjectId belongs to.
- **populate()** replaces ObjectIds with complete document data.
- **Mongoose Middleware** can automate tasks such as Cascade Delete.
- Choosing the correct relationship pattern improves scalability and performance.

---

## 📖 References

- MongoDB Documentation
- Mongoose Documentation

---

## 🚀 Future Topics

- Many-to-Many Relationships
- Virtual Populate
- Nested Populate
- Aggregation Pipeline
- Transactions
- Indexing
- Performance Optimization

---

⭐ This repository documents my learning journey with MongoDB and Mongoose by implementing different relationship models, schema designs, and best practices through hands-on examples.
