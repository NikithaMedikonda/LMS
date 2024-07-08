import express from 'express';
const authorRouter = express.Router();
import {Authors} from '../models/authors';

// Get all authors
authorRouter.get('/', async (req, res) => {
    try {
        // Fetch all authors include books
        const authors = await Authors.findAll();
        if (authors.length === 0) return res.status(404).json({ message: "No Authors Found" });
        res.json({Authors: authors});
    } catch (error:any) {
        res.status(500).json({message: error.message});
    }
});
// Get one author
authorRouter.get('/:id', async (req, res) => {
    try {
        const author = await Authors.findByPk(req.params.id);
        if (author === null) {
            return res.status(404).json({ message: "Author Not Found" });
        }
        res.json(author);
    } catch (err:any) {
        res.status(500).json({message: err.message});
    }
});

// Create a new author
authorRouter.post('/', async (req, res) => {
    try {
        const author = await Authors.create(req.body);
        res.json(author);
    } catch (err:any) {
        res.status(400).json({message: err.message});
    }
});

// Update an author
authorRouter.put('/:id', async (req, res) => {
    try {
        const [updated] = await Authors.update(req.body, {where: {id: req.params.id}});
        if (updated) {
            const updatedAuthor = await Authors.findByPk(req.params.id);
            res.json(updatedAuthor);
        } else {
            res.status(404).json({ message: "Author Not Found" });
        }
    } catch (err:any) {
        res.status(400).json({message: err.message});
    }
});
// Delete an author
authorRouter.delete('/:id', async (req, res) => {
    try {
        const deleted = await Authors.destroy({where: {id: req.params.id}});
        if (deleted) {
            res.json({ message: "Author Deleted" });
        } else {
            res.status(404).json({ message: "Author Not Found" });
        }
    } catch (err:any) {
        res.status(500).json({message: err.message});
    }
});

export default authorRouter;