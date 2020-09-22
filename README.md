# How to run app on local machine

#### Things you'll need
* Somewhere to store/run your database (ex: XAMPP, WAMP, SQL-Workbench)
* Node.js
* CORS Changer Chrome devtool extension (https://chrome.google.com/webstore/detail/moesif-orign-cors-changer/digfbfaphojjndkpccljibejjbppifbc)

#### Steps to get the app running
1. Start up your local Database.
2. Run the sql file located in the 'sql_scripts' folder to import sample database.
3. Configure your database settings in index.js lines 7 - 10.
4. Open terminal and use command 'node index.js' you should see to messages in the console 'Server running on 5000...' & 'DB connected...'
5. Open index.html in your browser make sure that CORS changer extension is set to "ON" reload page if necessary.

# Homework will probably look something like this...
1. Build CRUD API using postman to verify output
2. Create Front End
3. Use AJAX to connect the front to the back

![alt text](https://images.unsplash.com/photo-1527295110-5145f6b148d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1017&q=80) 
