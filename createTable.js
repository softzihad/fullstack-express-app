import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'node:path'

async function createTable() {
    
    // connect to the database
    const db = await open({
        filename: path.join('database.db'),
        driver: sqlite3.Database
    })

    // create the products table if it doesn't exist
    await db.exec(`
    CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,  
        artist TEXT NOT NULL, 
        price REAL NOT NULL,
        image TEXT NOT NULL, 
        year INTEGER,
        genre TEXT,
        stock INTEGER
        )
    `)

    // close the database
    await db.close()
    console.log('Table created')

}

createTable()