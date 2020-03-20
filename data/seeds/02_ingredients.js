
exports.seed = function (knex) {
  return knex('ingredients').insert([
    { id: 1, ingredient: 'appel', amount: 4 },
    { id: 2, ingredient: 'melk', amount: 2 },
    { id: 3, ingredient: 'bloem', amount: 50 }
  ]);
};
