
exports.seed = function (knex) {
  return knex('recipes').insert([
    { id: 1, recipe: 'vlaai' },
    { id: 2, recipe: 'taart' },
    { id: 3, recipe: 'koekje' }
  ]);
};
