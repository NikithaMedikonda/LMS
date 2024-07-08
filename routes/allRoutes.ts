import express from 'express';
import authorRouter from "./authorRoutes";
import bookRouter from "./bookRoutes";
import loanRouter from "./loanRoutes";
import memberRouter from "./memberRoutes";
import reservationRouter from "./reservationRoutes";

const routes = express.Router()

routes.use('/authors',authorRouter)
routes.use('/books',bookRouter)
routes.use('/loans',loanRouter)
routes.use('/members',memberRouter)
routes.use('/reservations',reservationRouter)

export default routes;
