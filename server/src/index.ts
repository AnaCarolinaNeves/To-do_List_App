import express from 'express';
import cors from 'cors';
import { json, urlencoded } from 'body-parser'
import knex from './db/knex';
import {Model} from 'objection';

Model.knex(knex);

const app = express();

const port = 3001;

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Server ready at http://localhost:${port}`);
});

app.get('/', (_, res) => {
    res.send("Hello World");
})

export default app;