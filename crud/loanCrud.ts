import { Loans } from '../models/loans';

//create
const createLoan = async (loan:any) => {
    try {
      const newLoan = await Loans.create({loan});
      console.log('Loan created',newLoan);
    }catch(error) {
      console.error('error while creating Loan', error);
    }
};
  
//read
const getLoan = async (id: number) => {
    try {
      const loan = await Loans.findByPk(id);
      if (loan)
         {console.table(loan.toJSON());}
      else {
          console.log('loan not found')
      }
    } catch (error){
        console.error('error finding loan', error);
    }
};
const getAllLoans = async () => {
    try {
        const loans=await Loans.findAll();
        console.table(loans.map((loan:any)=>loan.toJSON()));
    } catch(error) {
        console.error('Error reading loans:', error); 
    } 
};


//update
const updateLoan = async(id: number,updatedLoan: object) =>{
    try{
        const loan=await Loans.findByPk(id);
        if(loan){
            await loan.update(updatedLoan);
        }
        else{
            console.log("loan not Found");
        }
    }
    catch(error){
        console.log("Error fetching loan:",error);
    }
}


//delete
const deleteLoan = async (id:number) => {
    try{
        const loan = await Loans.findByPk(id);
        if (loan) {
            await loan.destroy();
            console.log('loan deleted');
        }else {
            console.log('loan not found');
        }
    } catch (error) {
      console.error('Error deleting loan:', error);
    }
}

export {createLoan, getAllLoans, getLoan, updateLoan, deleteLoan}