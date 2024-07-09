import express from 'express';
const loanRouter = express.Router();
import {Loans} from '../models/loans';
import { bookDueDate } from '../Queries/bookDueDate';

// Get all loans
loanRouter.get('/', async (req, res) => {
    try {
        // Fetch all loans include books
        const loans = await Loans.findAll();
        if (loans.length === 0) return res.status(404).json({ message: "No loans Found" });
        res.json({loans: loans});
    } catch (error:any) {
        res.status(500).json({message: error.message});
    }
});
// Get one loan
loanRouter.get('/:id', async (req, res) => {
    try {
        const loan = await Loans.findByPk(req.params.id);
        if (loan === null) {
            return res.status(404).json({ message: "loan Not Found" });
        }
        res.json(loan);
    } catch (err:any) {
        res.status(500).json({message: err.message});
    }
});

// Create a new loan
loanRouter.post('/', async (req, res) => {
    try {
        const loan = await Loans.create(req.body);
        res.json(loan);
    } catch (err:any) {
        res.status(400).json({message: err.message});
    }
});

// Update an loan
loanRouter.put('/:id', async (req, res) => {
    try {
        const [updated] = await Loans.update(req.body, {where: {id: req.params.id}});
        if (updated) {
            const updatedloan = await Loans.findByPk(req.params.id);
            res.json(updatedloan);
        } else {
            res.status(404).json({ message: "loan Not Found" });
        }
    } catch (err:any) {
        res.status(400).json({message: err.message});
    }
});
// Delete an loan
loanRouter.delete('/:id', async (req, res) => {
    try {
        const deleted = await Loans.destroy({where: {id: req.params.id}});
        if (deleted) {
            res.json({ message: "loan Deleted" });
        } else {
            res.status(404).json({ message: "loan Not Found" });
        }
    } catch (err:any) {
        res.status(500).json({message: err.message});
    }
});

loanRouter.get('/loanDueDate/:id', async (req,res) => {
    const data= await bookDueDate(req.params.id);
    res.send(data);
    //res.json(data);
})

export default loanRouter;