import sequelize from "./database"
import {insertAuthorsData,insertBooksData,insertMembersData,insertLoansData,insertReservationData} from "./insertion/insertData"
import  {createAuthor, getAllAuthors, getAuthor, updateAuthor, deleteAuthor} from "./crud/authorCrud"
import  {createBook, getAllBooks, getBook, updateBook, deleteBook} from "./crud/bookCrud"
import  {createLoan, getAllLoans, getLoan, updateLoan, deleteLoan} from "./crud/loanCrud"
import  {createMember, getAllMembers, getMember, updateMember, deleteMember} from "./crud/memberCrud"
import  {createReservation, getAllReservations, getReservations, updateReservation, deleteReservation} from "./crud/reservationCrud"

import { Authors } from "./models/authors"
import { Books } from "./models/books"
import { Loans } from './models/loans'
import { Members } from "./models/members"
import { Reservations } from "./models/reservations"

const main = async() => {
    await sequelize.authenticate().then(()=>{
        console.log("Connection established succesfully")
    }).catch((err)=>{
        console.log("Err",err)
    })
       
    try{
        await sequelize.sync({force:true});
        console.log("Sync Succesfully");

        await insertAuthorsData();
        console.log("Authors Insertion is Succesful");
    
        await insertBooksData();
        console.log("Books Insertion is Succesful");
        
        await insertMembersData();
        console.log("Members Insertion is Succesful");
        
        await insertLoansData();
        console.log("Loans Insertion is Succesful");
        
        await insertReservationData();
        console.log("Reservation Insertion is Succesful");
        
        //authorCRUD
        // const updatedAuthor ={
        //     name: 'Paul', 
        //     birth_year:2000,
        // };
        // await createAuthor('Khaled Hosseini', 1965, 'Afghan-American');
        await getAuthor(1);
        await getAllAuthors();
        // await updateAuthor(1,updatedAuthor);
        // await deleteAuthor(2);

        // //bookCRUD
        // const book = {
        //     title: 'The thousand splendid nights',
        //     authorId: 5,
        //     genre: 'novel',
        //     isbn: '1234567890123',
        //     publication_year: 2000
        // }
        // const updatedBook ={
        //     title: 'The Alchemist', 
        // };
        // await createBook(book);
        await getBook(1);
        await getAllBooks();
        // await updateBook(1,updatedBook);
        // await deleteBook(2);

        // //memberCRUD
        // const member = {
        //     name: 'Rockstars',
        //     address: 'AP',
        //     phone_number: '1234567890',
        //     email: 'rockstar@example.com'
        // }
        // const updatedMember ={
        //     name: 'Rockstar', 
        // };
        // await createMember(member);
        await getMember(1);
        await getAllMembers();
        // await updateMember(1,updatedMember);
        // await deleteMember(2);

        // //loanCRUD
        // const loan = {
        //     book_id: 5,
        //     member_id: 4,
        //     loan_date: new Date(), 
        //     due_date: new Date(new Date().setDate(new Date().getDate() + 14)),
        // }
        // const updatedLoan ={
        //     member_id: 5, 
        // };
        // await createLoan(loan);
        await getLoan(1);
        await getAllLoans();
        // await updateLoan(1,updatedLoan);
        // await deleteLoan(2);

        // //reservationCRUD
        // //loanCRUD
        // const reservation = {
        //     book_id: 5,
        //     member_id: 4,
        //     reservation_date: new Date() 
        // }
        // const updatedReservation ={
        //     member_id: 5, 
        // };
        // await createReservation(reservation);
        await getReservations(1);
        await getAllReservations();
        // await updateReservation(1,updatedReservation);
        // await deleteReservation(2);
        
    }
    catch(error){
        console.log("Error Creating or Syncing",error)
    }
}

main();