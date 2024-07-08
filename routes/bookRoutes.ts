import express from 'express';
const bookRouter = express.Router();
import {Books} from '../models/books';

// Get all books
bookRouter.get('/', async (req, res) => {
    try {
        // Fetch all books include books
        const books = await Books.findAll();
        if (books.length === 0) return res.status(404).json({ message: "No books Found" });
        res.json({books: books});
    } catch (error:any) {
        res.status(500).json({message: error.message});
    }
});
// Get one book
bookRouter.get('/:id', async (req, res) => {
    try {
        const book = await Books.findByPk(req.params.id);
        if (book === null) {
            return res.status(404).json({ message: "book Not Found" });
        }
        res.json(book);
    } catch (err:any) {
        res.status(500).json({message: err.message});
    }
});

// Create a new book
bookRouter.post('/', async (req, res) => {
    try {
        const book = await Books.create(req.body);
        res.json(book);
    } catch (err:any) {
        res.status(400).json({message: err.message});
    }
});

// Update an book
bookRouter.put('/:id', async (req, res) => {
    try {
        const [updated] = await Books.update(req.body, {where: {id: req.params.id}});
        if (updated) {
            const updatedbook = await Books.findByPk(req.params.id);
            res.json(updatedbook);
        } else {
            res.status(404).json({ message: "book Not Found" });
        }
    } catch (err:any) {
        res.status(400).json({message: err.message});
    }
});
// Delete an book
bookRouter.delete('/:id', async (req, res) => {
    try {
        const deleted = await Books.destroy({where: {id: req.params.id}});
        if (deleted) {
            res.json({ message: "book Deleted" });
        } else {
            res.status(404).json({ message: "book Not Found" });
        }
    } catch (err:any) {
        res.status(500).json({message: err.message});
    }
});

export default bookRouter;