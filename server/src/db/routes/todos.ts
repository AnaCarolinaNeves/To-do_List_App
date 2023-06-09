import express, { Router } from 'express';
import { Todo } from '../models/Todo';

const router = express.Router();

router.get("/", async (req, res) => {
    const todos = await Todo.query().select().orderBy("created_at");

    res.send({ todos });
})

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const todo = await Todo.query().findById(id).first();

    res.send({ todo });
})

router.post("/", async (req, res) => {
    const todo = req.body.todo;

    const newTodo = await Todo.query().insert({ title: todo.title }).returning("*");

    res.send({ Todo: newTodo });
})

router.patch("/:id", async (req, res) => {
    const id = req.params.id;
    const todo = req.body.todo;
    const updatedTodo = await Todo.query()
        .update({ title: todo.title, done: todo.done })
        .where({ id })
        .returning("*").first();

    res.send({todo: updatedTodo});
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    await Todo.query().deleteById(id);
    res.send("Todo sucessfuly deleted");
})

export default router;