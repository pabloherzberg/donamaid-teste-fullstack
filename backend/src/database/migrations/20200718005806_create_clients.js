exports.up = function (knex) {
  return knex.schema.createTable("clients", function (table) {
    table.increments("id");
    table.string("cpf").notNullable();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("address_id").notNullable();

    table.foreign("address_id").references("id").inTable("address");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("clients");
};
