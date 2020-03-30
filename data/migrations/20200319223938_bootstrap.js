exports.up = function (knex) {
  return knex.schema

    .createTable("recipes", tbl => {
      tbl.increments();

      tbl
        .string("recipe", 255)
        .notNullable()
        .unique();
    })

    .createTable("ingredients", tbl => {
      tbl.increments();

      tbl.string("ingredient", 255).notNullable().unique()

      tbl.float("amount").notNullable()
    })

    .createTable("steps", tbl => {
      tbl.increments()

      tbl
        .string("step")
        .notNullable()

      tbl
        .integer("step_number")
        .notNullable()

      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE"); // CASCADE, RESTRICT, DO NOTHING, SET NULL

    })

    .createTable("recipe_ingredients", tbl => {
      tbl.increments();

      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE"); // CASCADE, RESTRICT, DO NOTHING, SET NULL

      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE"); // CASCADE, RESTRICT, DO NOTHING, SET NULL
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
