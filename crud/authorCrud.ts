import { Authors } from '../models/authors';

const  createAuthor = async (name: string, birth_year: number, nationality: string) => {
    try {
      const newAuthor = await Authors.create({ name, birth_year, nationality });
      console.log('author created',newAuthor);
    }catch(error) {
      console.error('error while creating author', error);
    }
  };
// createAuthor('Khaled Hosseini', 1965, 'Afghan-American');
  
const getAuthor = async (id: number) => {
    try {
      const author = await Authors.findByPk(id);
      if (author)
         {console.table(author.toJSON());}
      else {
          console.log('author not found')
      }
    } catch (error){
        console.error('error finding author', error);
    }
};
const getAllAuthors = async () => {
    try {
        const authors=await Authors.findAll();
        console.table(authors.map((author:any)=>author.toJSON()));
    } catch(error) {
        console.error('Error reading authors:', error); 
    } 
};
//getAuthor(1);
//getAllAuthors();

// const updatedData ={
//     name: 'Hareesh', 
//     birth_year:2000,
//     nationality:'India'
// };
const updateAuthor = async(authorId: number,updatedAuthor: object) =>{
    try{
        const author=await Authors.findByPk(authorId);
        if(author){
            await author.update(updatedAuthor);
            console.log("Author updated",author)
        }
        else{
            console.log("Author not Found");
        }
    }
    catch(error){
        console.log("Error fetching author:",error);
    }
}

// updateAuthor(1,updatedData);

const deleteAuthor = async (id:number) => {
    try{
        const author = await Authors.findByPk(id);
        if (author) {
            await author.destroy();
            console.log('Author deleted');
        }else {
            console.log('Author not found');
        }
    } catch (error) {
      console.error('Error deleting author:', error);
    }
}
export {createAuthor, getAllAuthors, getAuthor, updateAuthor, deleteAuthor}