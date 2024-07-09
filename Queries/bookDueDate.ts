import { Members } from "../models/members";
import { Loans } from "../models/loans";
import { Books } from "../models/books";

export async function bookDueDate (id:any) {
    const member:any = await Members.findOne({where:{id:id}})
    if (member) {
        const loans:any = await Loans.findOne({where:{member_id:member.id}})
        if (loans) {
            const book:any = await Books.findOne({where:{id:loans.book_id}})
            const op={
                title: book.title,
                due_date:""+loans.due_date
            }
            console.table(op)
            return op;
        }
    else {
        console.log("member does not exist")
        }
    } 
}
