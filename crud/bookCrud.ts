import { Books } from '../models/books';

const createBook = async (book:any) => {
    try {
      const newBook = await Books.create({book});
      console.log('Book created',newBook);
    }catch(error) {
      console.error('error while creating Book', error);
    }
};

const getBook = async (id: number) => {
    try {
      const book = await Books.findByPk(id);
      if (book)
         {console.table(book.toJSON());}
      else {
          console.log('Book not found')
      }
    } catch (error){
        console.error('error finding Book', error);
    }
};
const getAllBooks = async () => {
    try {
        const books=await Books.findAll();
        console.table(books.map((book:any)=>book.toJSON()));
    } catch(error) {
        console.error('Error reading books:', error); 
    } 
};

const updateBook = async(id: number,updatedBook: object) =>{
    try{
        const book=await Books.findByPk(id);
        if(book){
            await book.update(updatedBook);
        }
        else{
            console.log("book not Found");
        }
    }
    catch(error){
        console.log("Error fetching book:",error);
    }
}

const deleteBook = async (id:number) => {
    try{
        const book = await Books.findByPk(id);
        if (book) {
            await book.destroy();
            console.log('book deleted');
        }else {
            console.log('book not found');
        }
    } catch (error) {
      console.error('Error deleting book:', error);
    }
}
export {createBook, getAllBooks, getBook, updateBook, deleteBook}