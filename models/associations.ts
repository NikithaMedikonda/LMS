import {Authors} from './authors';
import {Books} from './books';
import {Loans} from './loans';
import {Members} from './members';
import {Reservations} from './reservations';

async function getAssociation() {
    
Authors.hasMany(Books, { foreignKey: 'authorId' });
Books.belongsTo(Authors, { foreignKey: 'authorId' });

Members.hasMany(Loans, { foreignKey: 'member_id' });
Loans.belongsTo(Members, { foreignKey: 'member_id' });

Books.hasMany(Loans, { foreignKey: 'book_id' });
Loans.belongsTo(Books, { foreignKey: 'book_id' });

Members.hasMany(Reservations, { foreignKey: 'member_id' });
Reservations.belongsTo(Members, { foreignKey: 'member_id' });

Books.hasMany(Reservations, { foreignKey: 'book_id' });
Reservations.belongsTo(Books, { foreignKey: 'book_id' });
}


export {getAssociation};