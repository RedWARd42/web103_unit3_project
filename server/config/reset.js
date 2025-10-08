// server/config/reset.js
import { pool } from './database.js'

const createTables = async () => {
  try {
    await pool.query(`
      DROP TABLE IF EXISTS events;
      DROP TABLE IF EXISTS locations;

      CREATE TABLE locations (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        address TEXT NOT NULL,
        city TEXT NOT NULL,
        state TEXT NOT NULL,
        zip TEXT NOT NULL,
        image TEXT
      );

      CREATE TABLE events (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        date DATE NOT NULL,
        time TEXT NOT NULL,
        image TEXT,
        location_id INTEGER REFERENCES locations(id)
      );
    `)
    console.log('✅ Tables created successfully.')
  } catch (err) {
    console.error('Error creating tables:', err)
  }
}

const seedData = async () => {
  try {
    await pool.query(`
      INSERT INTO locations (name, address, city, state, zip, image)
      VALUES
        ('Echo Lounge', '123 Elm St', 'Dallas', 'TX', '75201', 'https://via.placeholder.com/200'),
        ('House of Blues', '2200 N Lamar St', 'Dallas', 'TX', '75202', 'https://via.placeholder.com/200'),
        ('Dos Equis Pavilion', '3839 S Fitzhugh Ave', 'Dallas', 'TX', '75210', 'https://via.placeholder.com/200'),
        ('American Airlines Center', '2500 Victory Ave', 'Dallas', 'TX', '75219', 'https://via.placeholder.com/200');

      INSERT INTO events (title, date, time, image, location_id)
      VALUES
        ('Indie Rock Night', '2025-10-18', '19:00', 'https://via.placeholder.com/300', 1),
        ('Jazz Evening', '2025-11-03', '20:00', 'https://via.placeholder.com/300', 2),
        ('Pop Festival', '2025-12-09', '18:00', 'https://via.placeholder.com/300', 3),
        ('EDM Party', '2025-12-25', '22:00', 'https://via.placeholder.com/300', 4);
    `)
    console.log('🎉 Sample data inserted successfully.')
    process.exit()
  } catch (err) {
    console.error('Error inserting sample data:', err)
  }
}

const main = async () => {
  await createTables()
  await seedData()
}

main()