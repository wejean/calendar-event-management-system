import { Knex } from 'knex';
import { DatabaseSchema } from '../database.schema';
import { DatabaseTable } from '../database.tables';

export async function up(knex: Knex): Promise<void> {
  knex.schema
    .hasTable(DatabaseTable.events)
    .then((tableExists: boolean) => {
      if (!tableExists) {
        return knex.schema.createTable(
          DatabaseTable.events,
          (tableBuilder: Knex.CreateTableBuilder) => {
            tableBuilder.string('id').unique().notNullable().primary();
            tableBuilder.string('name').notNullable();
            tableBuilder.string('description').notNullable();
            tableBuilder.string('date').notNullable();
            tableBuilder.string('time').notNullable();
            tableBuilder.string('invitees');
            tableBuilder.timestamps(true, true);
          },
        );
      }
    })
    .catch((e) => console.error('MIGRATION_ERROR', e));
  // );
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .withSchema(DatabaseSchema.eventService)
    .dropTableIfExists(DatabaseTable.events);
}
