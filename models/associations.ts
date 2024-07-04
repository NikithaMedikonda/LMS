import {Authors} from './authors';
import {Books} from './books';
import {Loans} from './loans';
import {Members} from './members';
import {Reservations} from './reservations';

Authors.hasMany(Books, { foreignKey: 'id' });
Books.belongsTo(Authors, { foreignKey: 'id' });

Members.hasMany(Loans, { foreignKey: 'id' });
Loans.belongsTo(Members, { foreignKey: 'id' });

Books.hasMany(Loans, { foreignKey: 'id' });
Loans.belongsTo(Books, { foreignKey: 'id' });

Members.hasMany(Reservations, { foreignKey: 'id' });
Reservations.belongsTo(Members, { foreignKey: 'id' });

Books.hasMany(Reservations, { foreignKey: 'id' });
Reservations.belongsTo(Books, { foreignKey: 'id' });

export {
    Authors,
    Books,
    Loans,
    Members,
    Reservations
};