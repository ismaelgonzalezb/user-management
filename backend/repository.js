const fs = require("fs");

const path = "./data/db.json";



function find() {

    const data = fs.readFileSync(path, { encoding: "utf-8" });

    if (!data) {
        return [];
    }

    const users = JSON.parse(data);

    return users;
}

function findOne(id) {

    const users = find();
    const user = users.find((user) => {
        return user.id === id;
    });

    return user;
}

// console.log(findOne(123));

function create(user) {
    const users = find();

    const id = Math.floor(Math.random() * 1000000) + 1;
    users.push({ id, ...user });

    fs.writeFileSync(path, JSON.stringify(users, { encoding: "utf-8" }));
}

function update(id, data) {
    const users = find();

    const index = users.findIndex((user) => user.id === id);

    users[index] = {...users[index], ...data };

    fs.writeFileSync(path, JSON.stringify(users, { encoding: "utf-8" }));

}

function remove(id) {
    const data = find();

    const users = data.filter((user) => user.id !== id);

    fs.writeFileSync(path, JSON.stringify(users, { encoding: "utf-8" }));

}

remove(530706);
// create({

//     "id": 530706,
//     "username": "ismaelfgb",
//     "firstname": "Ismael",
//     "lastname": "Gonzalez",
//     "age": "26",
//     "email": "ismaelfgb@gmail.com",
//     "skills": [
//         "node",
//         "react"
//     ]
// });

module.exports = {

    // create,
    // update,
    // remove,
    find,
    findOne,
    create,
    update,
    remove
}