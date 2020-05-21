# How to run app on local machine

## Things you'll need
* Somewhere to store/run your database (ex: XAMPP, WAMP, SQL-Workbench)
* Node.js
* CORS Changer Chrome devtool extension (https://chrome.google.com/webstore/detail/moesif-orign-cors-changer/digfbfaphojjndkpccljibejjbppifbc)

## Steps to get the app running
1. Start up your local Database.
2. Run the sql file located in the 'sql_scripts' folder to import sample database.
3. Open terminal and use command 'npm run dev' you should see to messages in the console 'Server running on 5000...' & 'DB connected...'
4. Open index.html in your browser make sure that CORS changer extension is set to "ON" reload page if necessary.