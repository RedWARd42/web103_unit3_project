import { pool } from '../config/database.js';

export const getEvents = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM events');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getEventsByLocation = async (req, res) => {
  const { id } = req.params
  try {
    const result = await pool.query(
      'SELECT * FROM events WHERE location_id = $1',
      [id]
    )
    res.json(result.rows)
  } catch (error) {
    console.error('Error fetching events by location:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
};
