
import {Authors} from '../models/authors';
import {Books} from '../models/books';
import {Loans} from '../models/loans';
import {Members} from '../models/members';
import {Reservations} from '../models/reservations';

let authors: any;
let books : any;
let members : any;
let loans: any;
let reservations : any;

const insertAuthorsData = async () => {
    try {
       authors = await Authors.bulkCreate([
        { name: 'Paulo Coelho', birth_year: 1947, nationality: 'Brazilian' },
        { name: 'Paula Hawkins', birth_year: 1972, nationality: 'British' },
        { name: 'Arundhati Roy', birth_year: 1961, nationality: 'Indian' },
        { name: 'Chetan Bhagat', birth_year: 1974, nationality: 'Indian' }
      ]);
    } catch (error) {
        console.error('Error inserting Authors data:', error);
      }
}

const insertBooksData= async () =>{
    try{
         books = await Books.bulkCreate([
        { title: 'The Alchemisti', authorId: 1, genre: 'Novel', isbn: '9789388118297', publication_year: 1988 },
        { title: 'The Girl on the Train', authorId: 2, genre: 'Thriller', isbn: '9780747532743', publication_year: 2015 },
        { title: 'The God of Small Things', authorId: 3, genre: 'Fiction', isbn: '9780679457312', publication_year: 1997 },
        { title: 'Half Girlfriend', authorId: 4, genre: 'Fiction', isbn: '9788129104595', publication_year: 2014 }
      ]);
    } catch (error) {
        console.error('Error inserting Books data:', error);
    }
}

const insertMembersData = async() => {
    try{
         members = await Members.bulkCreate([
            { name: 'Nikitha', address: 'hyd', phone_number: '1234567890', email: 'nikitha@example.com' },
            { name: 'Chinni', address: 'blr', phone_number: '0987654321', email: 'chinni@example.com' },
            { name: 'Usha', address: 'warangal', phone_number: '1234987650', email: 'usha@example.com' },
            { name: 'mamatha', address: 'karimnagar', phone_number: '09567854321', email: 'mamatha@example.com' }
        ]);
    }catch (error) {
        console.error('Error inserting data:', error);
    }
}
  
const insertLoansData=async()=>{
    try{
        loans = await Loans.bulkCreate([
            { book_id: 1, member_id: 1, loan_date: new Date(), due_date: new Date(new Date().setDate(new Date().getDate() + 14)) },
            { book_id: 3, member_id: 2, loan_date: new Date(), due_date: new Date(new Date().setDate(new Date().getDate() + 14)) },
            { book_id: 2, member_id: 3, loan_date: new Date(), due_date: new Date(new Date().setDate(new Date().getDate() + 14)) },
            { book_id: 4, member_id: 4, loan_date: new Date(), due_date: new Date(new Date().setDate(new Date().getDate() + 14)) }
          ]);
    }
    catch(error){
        console.error('Error inserting data:', error);
    }
}
      
const insertReservationData=async()=>{
    try{
        reservations = await Reservations.bulkCreate([
            { book_id: 3, member_id: 2, reservation_date: new Date() },
            { book_id: 4, member_id: 1, reservation_date: new Date() },
            { book_id: 2, member_id: 4, reservation_date: new Date() },
            { book_id: 1, member_id: 3, reservation_date: new Date() }
          ]);
    }catch(error){
        console.error('Error inserting data:', error);
    }
}
     
export {insertAuthorsData,insertBooksData,insertMembersData,insertLoansData,insertReservationData}