exports.up = function (knex) {
  return knex.schema.createTable("orders", function (table) {
    table.increments("id");
    table.string("hour").notNullable();
    table.string("duration").notNullable();

    table.string("address_id").notNullable();
    table.string("client_id").notNullable();
    table.string("professional_id").notNullable();

    table.foreign("address_id").references("id").inTable("address");
    table.foreign("client_id").references("id").inTable("client_id");
    table
      .foreign("professional_id")
      .references("id")
      .inTable("professional_id");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("orders");
};
