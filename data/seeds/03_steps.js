
exports.seed = function (knex) {
  return knex('steps').insert([
    { id: 1, step: 'add apples', step_number: 1, recipe_id: 1 },
    { id: 2, step: 'add more apples', step_number: 2, recipe_id: 1 },
    { id: 3, step: 'compare apples to apples', step_number: 3, recipe_id: 1 },
    { id: 4, step: 'add apples', step_number: 1, recipe_id: 2 },
    { id: 5, step: 'add more apples', step_number: 2, recipe_id: 2 },
    { id: 6, step: 'compare apples to apples', step_number: 3, recipe_id: 2 },
    { id: 7, step: 'add apples', step_number: 1, recipe_id: 3 },
    { id: 8, step: 'add more apples', step_number: 2, recipe_id: 3 },
    { id: 9, step: 'compare apples to apples', step_number: 3, recipe_id: 3 }
  ])
};
