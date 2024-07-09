//find author by a book
import { Authors } from "../models/authors";
import { Books } from '../models/books';

export async function bookAuthor (data:any ) {
    const book:any= await Books.findOne({where:{title:data}})
    if (book){
        const author = await Authors.findOne({where:{id:book.authorId}})
        if(author){
            console.table(author.toJSON());}
            return author;
    }
    else{
        console.log("Book doesnt exist.")
    }
}
