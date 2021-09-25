
exports.seed = function(knex) {
      return knex('cities').insert([
        {id: 1, name: 'Gore', population: '12,900', drinking: '100', food: '15', cats: '2/10,000 people', crime: 'B', img: 'gore.jpg'},
        {id: 2, name: 'Auckland', population: '1.6m', drinking: '70', food: '85', cats: '1,000/10,000 people', crime: 'F', img: 'auckland.jpg'},
        {id: 3, name: 'Wellington', population: '415,000', drinking: '75', food: '90', cats: '700/10,000 people', crime: 'E', img: 'wellington.jpg'},
        {id: 4, name: 'Christchurch', population: '383,200', drinking: '85', food: '55', cats: '9,000/10,000 people', crime: 'D', img: 'christchurch.jpg'},
        {id: 5, name: 'Dunedin', population: '114,347', drinking: '100', food: '30', cats: '0/10,000 people', crime: 'E', img: 'dunedin.jpg'},
        {id: 6, name: 'Masterton', population: '27,500', drinking: '95', food: '20', cats: '10,000/10,000 people', crime: 'F', img: 'masterton.jpg'},
        {id: 7, name: 'Palmerston North', population: '81,500', drinking: '90', food: '20', cats: '5,000/10,000 people', crime: 'C', img: 'palmerston-north.jpg'},
        {id: 8, name: 'Whangarei', population: '54,400', drinking: '80', food: '1', cats: '7,500/10,000 people', crime: 'D', img: 'whangarei.jpg'}
      ]);
};
