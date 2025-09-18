import { getDBConnection } from '../db/db.js';

export async function getProducts(req, res) {

  try {

    // Get a database connection
    const db = await getDBConnection()

    // Query to get all products from the products table
    let query = 'SELECT * FROM products'
    const products = await db.all(query)
    res.json(products)

  } catch (err) {

    res.status(500).json({error: 'Failed to fetch products', details: err.message})

  }

}

export async function getGenres(req, res) {
    console.log("Fetching genres...");
    res.send("List of genres");
}
    
