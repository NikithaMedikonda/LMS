import express from 'express';
const memberRouter = express.Router();
import {Members} from '../models/members';

// Get all members
memberRouter.get('/', async (req, res) => {
    try {
        // Fetch all members 
        const members = await Members.findAll();
        if (members.length === 0) return res.status(404).json({ message: "No members Found" });
        res.json({members: members});
    } catch (error:any) {
        res.status(500).json({message: error.message});
    }
});
// Get one member
memberRouter.get('/:id', async (req, res) => {
    try {
        const member = await Members.findByPk(req.params.id);
        if (member === null) {
            return res.status(404).json({ message: "member Not Found" });
        }
        res.json(member);
    } catch (err:any) {
        res.status(500).json({message: err.message});
    }
});

// Create a new member
memberRouter.post('/', async (req, res) => {
    try {
        const member = await Members.create(req.body);
        res.json(member);
    } catch (err:any) {
        res.status(400).json({message: err.message});
    }
});

// Update an member
memberRouter.put('/:id', async (req, res) => {
    try {
        const [updated] = await Members.update(req.body, {where: {id: req.params.id}});
        if (updated) {
            const updatedmember = await Members.findByPk(req.params.id);
            res.json(updatedmember);
        } else {
            res.status(404).json({ message: "member Not Found" });
        }
    } catch (err:any) {
        res.status(400).json({message: err.message});
    }
});
// Delete an member
memberRouter.delete('/:id', async (req, res) => {
    try {
        const deleted = await Members.destroy({where: {id: req.params.id}});
        if (deleted) {
            res.json({ message: "member Deleted" });
        } else {
            res.status(404).json({ message: "member Not Found" });
        }
    } catch (err:any) {
        res.status(500).json({message: err.message});
    }
});

export default memberRouter;