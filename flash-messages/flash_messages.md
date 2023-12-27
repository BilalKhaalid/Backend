<!-- ! flash messages  -->

Flash messages are used when we want to save data in any route in the server and we can use the data in any other route.

<!-- ? For Example  -->

When a user is signing in with a invalid username/email or password we want to send a response to the front end which is an error that credentials are invalid. This will show an error in the form of alert or similar strategy in the frontend

<!-- ? What is Connect-Flash? -->

It is a library which is used to bind the backend flash messages with the frontend messages in our case (alerts) in the frontend

<!-- ? How to use connect-flash -->

First we need to require and use it as a middleware in app.js

<!-- !Example -->

app.use(flash());

Then we need to require and use express-session as middleware

<!-- !Example -->

app.use(
session({
resave: false,
saveUninitialized: false,
secret: "hello",
})
);

Then we can set a flash message by req.flash(name_of_flash,value)

<!-- !Example -->

req.flash("info", "Flash is back!");

Then we can use it in any other route by req.flash(name_of_flash)

<!-- !Example -->

req.flash("info")
