const express = require("express")
const server = express()

server.use(express.json())

server.get("/", (req, res) => {
    res.json({message: "hello world"})
})

//returns an array of users
server.get("/api/users", (req, res) => {

})

//returns user obj with specific id 
server.get("/api/users/:id", (req, res) => {

})

//creates user info sent via request body 
server.post("/api/users", (req, res) => {

})

//removes users with spec id & returns the deleted user
server.delete("/api/users/:id", (req, res) => {

})

//updates user with specific id. returns modified user
server.patch("/api/users/:id", (req, res) => {

})

server.listen(3000, () => {
    console.log("server started at port 3000")
})