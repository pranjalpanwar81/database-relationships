# MongoDB Database Relationships with Mongoose

This repository contains my practice code for learning **MongoDB Database Relationships** using **Node.js**, **MongoDB**, and **Mongoose**.

It is part of my backend development learning journey.

---

## 📚 Relationships Covered

### 1. One-to-Few

**Folder:** `one-to-few`

A single document contains a small number of embedded documents.

**Example**

A User has a few Addresses.

```

User

 ├── username

 └── addresses

      ├── location

      └── city

```

Used when the number of child documents is small and limited.

---

### 2. One-to-Many

**Folder:** `one-to-many`

A parent document references multiple child documents using ObjectIds.

**Example**

Customer → Orders

```

Customer

 ├── name

 └── orders

      ├── ObjectId(Order1)

      ├── ObjectId(Order2)

      └── ObjectId(Order3)

```

Uses **Mongoose populate()** to retrieve complete order details.

---

### 3. One-to-Squillions

**Folder:** `one-to-many/posts.js`

Instead of storing millions of references inside one document, every child document stores the parent's ObjectId.

**Example**

User ← Posts

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

│

├── one-to-few/

│   └── user.js

│

├── one-to-many/

│   ├── customer.js

│   └── posts.js

│

├── package.json

├── package-lock.json

├── .gitignore

└── README.md

```

---

## 🚀 Installation

Clone the repository

```bash

git clone https://github.com/YOUR_USERNAME/database-relationships.git

```

Install dependencies

```bash

npm install

```

Start MongoDB

```bash

mongod

```

or

```bash

brew services start mongodb-community

```

Run examples

```bash

node one-to-few/user.js

```

```bash

node one-to-many/customer.js

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

- populate()

- Schema Design Best Practices

- One-to-Few Relationship

- One-to-Many Relationship

- One-to-Squillions Relationship

---

## 📖 References

- MongoDB Documentation

- Mongoose Documentation

---

⭐ This repository is created for learning and practicing MongoDB relationships.