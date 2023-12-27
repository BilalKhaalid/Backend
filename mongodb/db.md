<!-- ! Keep this Diagram in mind to better visualize the database working -->

<!-- ! Code Side -->                  <!-- ! MongoDb Side -->
<!-- * DB setup --> converts into --> DB Formation(Creation)
<!-- ? Model setup --> converts  --> Collection creation
<!-- ? Schema setup --> converts --> Document creation

<!-- ? What are Collections -->

Collections are the sub category or variety of data we want to have in our database.For Example: Amazon database has many collections for different types of data like Users,Products,Sales,Admin etc.

<!-- ? What is Schema -->

Schema is defining how a user i.e.(document) in the collection will be.It means what the structure a document will have in a specific collection.It contains different fields for a same document which can be of different types.

<!--? By writing this line in code it creates a database with the name you give in mongodb  -->
<!--! mongoose.connect("mongodb://localhost:27017/your_database_name")-->

<!-- ! By writing this we define how a single user will be i.e. what structure the document will have -->
<!-- const UsersSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  age: Number,
}); -->

<!-- ? By writing this line in code a collection named Users will be created in the database with all the attribute of the schema we provided i.e. the document in this collection will have the structure of the schema we provided -->
<!-- * mongoose.model("Users", UsersSchema); -->

<!-- ? Cookie And Session -->

<!-- ! Client Side -->            <!-- ! Server Side -->

1. When we want to save data - 1) When we want to save data on
   on client side we use cookies - server we use session
2. Cookie are less secure than sessions - 2) Sessions are more secure
3. cookies can be manipulated by user - 3) Sessions can't be manipulated by user

<!-- ? Cookies Creation -->
 <!--! This below line is used to create a cookie -->

res.cookie("age", 23);

   <!--! This line is used to read all the cookies that exists in the frontend -->

req.cookies

  <!--! This line is used to clear Cookie from the frontend -->

res.clearCookie("ban");
