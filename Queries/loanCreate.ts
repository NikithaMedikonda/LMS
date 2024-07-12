import sequelize from "../database";
import { Loans } from "../models/loans";
import { Members } from "../models/members";
import { Books } from "../models/books";


export async function loanCreate(data:any) {
    const t = await sequelize.transaction();
    try {
        const member = await Members.findOne({where:{id:data.member_id}, transaction: t});
        if(!member){
            console.log('Member not found')
            await t.rollback();
            return('Member not found')
        }
        const book = await Books.findOne({where:{id: data.book_id }, transaction: t});
        if(!book){
            await t.rollback();
            return('Book not found')
        }
    
        const loanDate = new Date();
        const dueDate = new Date(new Date().setDate(new Date().getDate() + 14))
        const loan = await Loans.create({ book_id: data.book_id,member_id: data.member_id,loan_date: loanDate,due_date: dueDate}, { transaction: t });
        await t.commit();
        console.log('Transaction committed successfully');
        return (loan);
    } catch (error:any) {
        console.error('Error in transaction:', error);
        await t.rollback();
        throw error;
    }
}

