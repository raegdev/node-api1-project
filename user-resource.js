// {
//     id: "a_unique_id", // hint: use the shortid npm package to generate it
//     name: "Jane Doe", // String, required
//     bio: "Not Tarzan's Wife, another Jane",  // String, required
//   }

let users = [
    {id: "1", name: 'hermione granger', bio: 'cleverest witch of our year'},
    {id: "2", name: 'bernadette meadows', bio: 'witch. herbalist. traveling adventure/bard.'},
    {id: "3", name: 'isa', bio: 'older than time entity. mysterious. snarky.'}
]

const getUsers = () => {
    return users 
}

const getUserById = (id) => {
    return users.find( u => u.id === id )
}

const createUser = (data) => {
    const payload = {
        id: String(users.length + 1),
        ...data
    }

    users.push(payload)
    return payload
}

const updateUser = (id, data) => {
    const index = users.findIndex(u => u.id === id)
    users[index] ={
        ...users[index],
        ...data
    }
    return users[index]
}

const deleteUser = (id) => {
    users = users.filter(u => u.id !=id)
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}