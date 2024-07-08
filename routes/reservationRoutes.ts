import express from 'express';
const reservationRouter = express.Router();
import {Reservations} from '../models/reservations';

// Get all reservations
reservationRouter.get('/', async (req, res) => {
    try {
        // Fetch all reservations include books
        const reservations = await Reservations.findAll();
        if (reservations.length === 0) return res.status(404).json({ message: "No reservations Found" });
        res.json({reservations: reservations});
    } catch (error:any) {
        res.status(500).json({message: error.message});
    }
});
// Get one reservation
reservationRouter.get('/:id', async (req, res) => {
    try {
        const reservation = await Reservations.findByPk(req.params.id);
        if (reservation === null) {
            return res.status(404).json({ message: "reservation Not Found" });
        }
        res.json(reservation);
    } catch (err:any) {
        res.status(500).json({message: err.message});
    }
});

// Create a new reservation
reservationRouter.post('/', async (req, res) => {
    try {
        const reservation = await Reservations.create(req.body);
        res.json(reservation);
    } catch (err:any) {
        res.status(400).json({message: err.message});
    }
});

// Update an reservation
reservationRouter.put('/:id', async (req, res) => {
    try {
        const [updated] = await Reservations.update(req.body, {where: {id: req.params.id}});
        if (updated) {
            const updatedreservation = await Reservations.findByPk(req.params.id);
            res.json(updatedreservation);
        } else {
            res.status(404).json({ message: "reservation Not Found" });
        }
    } catch (err:any) {
        res.status(400).json({message: err.message});
    }
});
// Delete an reservation
reservationRouter.delete('/:id', async (req, res) => {
    try {
        const deleted = await Reservations.destroy({where: {id: req.params.id}});
        if (deleted) {
            res.json({ message: "reservation Deleted" });
        } else {
            res.status(404).json({ message: "reservation Not Found" });
        }
    } catch (err:any) {
        res.status(500).json({message: err.message});
    }
});

export default reservationRouter;