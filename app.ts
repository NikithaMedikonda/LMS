import express from 'express';
import sequelize from "./database"
import {insertAuthorsData,insertBooksData,insertMembersData,insertLoansData,insertReservationData} from "./insertion/insertData"
import {createAuthor, getAllAuthors, getAuthor, updateAuthor, deleteAuthor} from "./crud/authorCrud"
import {createBook, getAllBooks, getBook, updateBook, deleteBook} from "./crud/bookCrud"
import {createLoan, getAllLoans, getLoan, updateLoan, deleteLoan} from "./crud/loanCrud"
import {createMember, getAllMembers, getMember, updateMember, deleteMember} from "./crud/memberCrud"
import {createReservation, getAllReservations, getReservations, updateReservation, deleteReservation} from "./crud/reservationCrud"
import {getAssociation} from './models/associations'

const app= express()
import routes from './routes/allRoutes'
app.use('/',routes);

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
        getAssociation();

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
        // await createAuthor('Khaled Hosseini', 1965, 'Afghan-American');
        // await getAuthor(1);
        await getAllAuthors();
        // await updateAuthor(1,{name: 'Paul', birth_year:2000});
        // await deleteAuthor(2);

        //bookCRUD
        // await createBook({title: 'The Alchemist'});
        // await getBook(1);
        await getAllBooks();
        // await updateBook(1,{title: 'The thousand splendid nights',
        //     authorId: 5,
        //     genre: 'novel',
        //     isbn: '1234567890123',
        //     publication_year: 2000});
        // await deleteBook(2);

        //memberCRUD
        // await createMember({name: 'Rockstars',
        //     address: 'AP',
        //     phone_number: '1234567890',
        //     email: 'rockstar@example.com'});
        // await getMember(1);
        await getAllMembers();
        // await updateMember(1,{ name: 'Rockstar'});
        // await deleteMember(2);

        //loanCRUD
        // await createLoan({book_id: 5,
        //     member_id: 4,
        //     loan_date: new Date(), 
        //     due_date: new Date(new Date().setDate(new Date().getDate() + 14))});
        // await getLoan(1);
        await getAllLoans();
        // await updateLoan(1,{member_id: 5});
        // await deleteLoan(2);

        //reservationCRUD
        // await createReservation({book_id: 5,
        //     member_id: 4,
        //     reservation_date: new Date() });
        // await getReservations(1);
        await getAllReservations();
        // await updateReservation(1,{ member_id: 5});
        // await deleteReservation(2);        
    }
    catch(error){
        console.log("Error Creating or Syncing",error)
    }
}

main();

const port =3000;
app.listen(port, () => {
    console.log(`server is running on port http://localhost:${port}`)
})