const { response } = require("express");
const { request } = require("express");
const express = require("express");
const repository = require("./repository.js");
const utils = require("./utils");
const cors = require("cors");


const server = express(); //Server
const PORT = 3000;
server.use(express.json()); //Middleware
server.use(cors()); //Middleware

//EndPoints

//API -- Find all users

server.get("/api/users", (request, response, next) => {

    const users = repository.find();
    response.send(users);
});

//API -- Find user by ID

server.get("/api/users/:id", (request, response, next) => {

    const { id } = request.params;

    const user = repository.findOne(+id);

    if (!user) {
        return response.status(404).send();
    }
    response.send(user);
});

//API -- Creat new user

server.post("/api/users", (request, response, next) => {

        const { body } = request;
        const result = utils.validateBody(["email", "skills"], body);


        if (result.length !== 0) {
            response.status(400).send({ errors: result });
        }

        repository.create(body);

        response.status(201).send();
    }

);

//API -- Update user

server.patch("/api/users/:id", (request, response, next) => {

        const { body } = request;
        const { id } = request.params;

        const user = repository.findOne(+1);

        if (!id) {
            return response.status(404).send();
        }


        repository.update(+id, body);

        response.status(204).send();
    }

);

//API -- Delete user

server.delete("/api/users/:id", (request, response, next) => {

        const { id } = request.params;

        const user = repository.findOne(+id);

        if (!user) {
            return response.status(404).send();
        }


        repository.remove(+id);

        response.status(204).send();
    }

);


server.listen(PORT, () => {

    console.log(`Server running on PORT ${PORT} !!!`);
});


//Functions