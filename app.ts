import sequelize from "./database"
import {insertAuthorsData,insertBooksData,insertMembersData,insertLoansData,insertReservationData} from "./insertion/insertData"

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
        const authors=await Authors.findAll();
        console.table(authors.map((author)=>author.toJSON()));

        await insertBooksData();
        console.log("Books Insertion is Succesful");
        const books=await Books.findAll();
        console.table(books.map((book)=>book.toJSON()));

        await insertMembersData();
        console.log("Members Insertion is Succesful");
        const members=await Members.findAll();
        console.table(members.map((member:any)=>member.toJSON()));
        
        await insertLoansData();
        console.log("Loans Insertion is Succesful");
        const loans=await Loans.findAll();
        console.table(loans.map((loan:any)=>loan.toJSON()));

        await insertReservationData();
        console.log("Reservation Insertion is Succesful");
        const reservations=await Reservations.findAll();
        console.table(reservations.map((reservation:any)=>reservation.toJSON()));

    }
    catch(error){
        console.log("Error Creating or Syncing",error)
    }
}

main();