import { Reservations } from '../models/reservations';

const createReservation = async (reservation:any) => {
    try {
      const newReservation = await Reservations.create({reservation});
      console.log('reservation created',newReservation);
    }catch(error) {
      console.error('error while creating reservation', error);
    }
};

const getReservations = async (id: number) => {
    try {
      const reservation = await Reservations.findByPk(id);
      if (reservation)
         {console.table(reservation.toJSON());}
      else {
          console.log('reservations not found')
      }
    } catch (error){
        console.error('error finding reservations', error);
    }
};
const getAllReservations = async () => {
    try {
        const reservations=await Reservations.findAll();
        console.table(reservations.map((reservations:any)=>reservations.toJSON()));
    } catch(error) {
        console.error('Error reading Reservations:', error); 
    } 
};

const updateReservation = async(id: number,updatedData: object) =>{
    try{
        const reservation=await Reservations.findByPk(id);
        if(reservation){
            await reservation.update(updatedData);
        }
        else{
            console.log("reservation not Found");
        }
    }
    catch(error){
        console.log("Error fetching reservation:",error);
    }
}

const deleteReservation = async (id:number) => {
    try{
        const reservation = await Reservations.findByPk(id);
        if (reservation) {
            await reservation.destroy();
            console.log('reservation deleted');
        }else {
            console.log('reservation not found');
        }
    } catch (error) {
      console.error('Error deleting reservation:', error);
    }
}

export {createReservation, getAllReservations, getReservations, updateReservation, deleteReservation}