//find all books by a specific author
import { Authors } from "../models/authors";
import { Books } from '../models/books';

export async function authorBooks (data:any ) {
    const author:any= await Authors.findOne({where:{name:data}})
    if(author){
        const books = await Books.findAll({where:{authorId:author.id}})
        console.table(books.map((book:any)=>book.toJSON()));
        return books;
    }
    else {
        console.log('Author not found')
    }
}
