# MongoDB API Project

## Install Node.js and the Required Packages:
- npm init -y
- npm install express mongoose dotenv
  
## Create a .env file
- touch .env
- MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<database>?retryWrites=true&w=majority PORT=5000
  
## Start the Server:
node server.js
