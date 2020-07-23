exports.up = function (knex) {
  return knex.schema.createTable("address", function (table) {
    table.increments("id");
    table.string("street").notNullable();
    table.string("number").notNullable();
    table.string("address_complement").nullable();
    table.string("cep").notNullable();
    table.string("city").notNullable();
    table.string("uf", 2).notNullable();
    table.string("country").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("address");
};
