import knex from 'knex';

export async function up(Knex: knex): Promise<void> {
  return Knex.schema.createTable('users', (tbl) => {
    tbl.string('uid', 36).notNullable();

    tbl.string('name', 255).notNullable();
    tbl.string('email', 255).notNullable().unique();
    tbl.string('password', 36).notNullable();

    tbl.string('gender', 2);
    tbl.string('age', 3);
    tbl.string('cep', 15);
    tbl.string('address', 255);
    tbl.string('city', 255);
    tbl.string('state', 255);
    tbl.string('neighborhood', 255);
    tbl.string('marital_status', 255);

    tbl.timestamps(true, true);
  });
}
export async function down(Knex: knex): Promise<void> {
  return Knex.schema.dropTableIfExists('users');
}
