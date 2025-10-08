import { pool } from '../config/database.js';

export const getLocations = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM locations');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching locations:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getLocationById = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM locations ORDER BY id ASC', [req.params.id]);
    res.json(result.rows);
    } catch (error) {
    console.error('Error fetching location by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
