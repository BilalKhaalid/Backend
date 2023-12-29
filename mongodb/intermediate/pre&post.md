<!-- ? Pre & Post Hooks / Middlewares in mongoose -->

## Concepts

### Pre Hooks

**Definition:** Pre hooks (pre-save, pre-remove, etc.) are functions that run before a specific Mongoose operation, allowing you to modify data or perform actions before the operation is executed.

### Post Hooks

**Definition:** Post hooks (post-save, post-remove, etc.) are functions that run after a specific Mongoose operation, enabling you to perform additional actions or clean-up tasks.

### Middlewares in Mongoose

**Definition:** Middlewares are functions that provide a way to run custom code at various points in the Mongoose document lifecycle.

**Use Cases:**

- Data Validation: Ensure that certain conditions are met before saving a document.
- Logging: Log information about operations before or after they occur.
- Security Checks: Implement security checks before performing sensitive operations.
- Complex Calculations: Perform complex calculations or modifications to data.

## Code Example

Let's create a simple Mongoose schema for a "User" with a pre-save hook for data validation:

```javascript
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create User schema
const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
});

// Define pre-save hook for data validation
userSchema.pre('save', function (next) {
  // Example: Ensure email is unique before saving
  // Note: This is a simple example; in real-world scenarios, you might query the database for uniqueness.
  const UserModel = mongoose.model('User', userSchema);
  UserModel.findOne({ email: this.email }, (err, user) => {
    if (user) {
      // Email already exists, reject saving
      next(new Error('Email must be unique'));
    } else {
      // Email is unique, proceed with saving
      next();
    }
  });
});

// Create User model
const User = mongoose.model('User', userSchema);

// Example usage
const newUser = new User({
  username: 'john_doe',
  email: 'john@example.com',
  password: 'secure_password',
});
newUser.save((err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('User saved successfully');
  }
});



//! Post

This is a simplified example, and in real-world scenarios, you might use other mechanisms for checking uniqueness and implement additional validation logic.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create User schema
const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
});

// Define post-save hook for logging
userSchema.post('save', function (doc) {
  // Log a message after the user is successfully saved
  console.log(`User ${doc.username} saved successfully.`);
});

// Create User model
const User = mongoose.model('User', userSchema);

// Example usage
const newUser = new User({
  username: 'jane_doe',
  email: 'jane@example.com',
  password: 'secure_password',
});

newUser.save((err, savedUser) => {
  if (err) {
    console.error(err.message);
  } else {
    // The post-save hook will log a message
    console.log('Save operation completed.');
  }
});


```

## Explanation for Pre-save:

In this example, the pre-save hook checks whether the email is unique before saving the user. It queries the database to see if there is any existing user with the same email. If found, it rejects the save operation; otherwise, it proceeds with saving the user.

## Explanation for Post-save:

In this example, the post-save hook is defined using userSchema.post('save', function (doc) {...}). This hook runs after a user is successfully saved. In this case, it logs a message to the console with the username of the saved user.

When you run the save operation, you should see both the success message from the newUser.save callback and the log message from the post-save hook.
