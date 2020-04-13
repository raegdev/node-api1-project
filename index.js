const express = require("express")
const server = express()
const data = require('./user-resource')

server.use(express.json())

server.get("/", (req, res) => {
    res.json({message: "hello world"})
})

//returns an array of users
server.get("/api/users", (req, res) => {
    const users = data.getUsers()
    res.json(users)
})

//returns user obj with specific id 
server.get("/api/users/:id", (req, res) => {
    const userId = req.params.id
	const user = data.getUserById(userId)

	if (user) {
		res.json(user)
	} else {
		res.status(500).json({
			errorMessage: "The users information could not be retrieved.",
		})
	}
})

//creates user info sent via request body 
server.post("/api/users", (req, res) => {
    if (!req.body.name || !req.body.bio) {
		return res.status(400).json({
			errorMessage: "Please provide name and bio for the user.",
		})
    }
    
    const newUser = data.createUser({
        name: req.body.name,
        bio: req.body.bio
    })

    res.status(201).json(newUser)
    
})

//removes users with spec id & returns the deleted user
server.delete("/api/users/:id", (req, res) => {
    const user = data.getUserById(req.params.id)

    if (user) {
        data.deleteUser(user.id)
        res.status(204).end()
    } else {
        res.status(404).json({
            message: "user not found"
        })
    }
})

//updates user with specific id. returns modified user
server.patch("/api/users/:id", (req, res) => {
    const user = data.getUserById(req.params.id)

    if (user) {
        const updatedUser = data.updateUser(user.id, {
            name: req.body.name || user.name,
            bio: req.body.bio || user.bio
        })
        res.json(updatedUser)
    } else {
        res.status(404).json({
            message: "user not found"
        })
    }
})

server.listen(3000, () => {
    console.log("server started at port 3000")
})