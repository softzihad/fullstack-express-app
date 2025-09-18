import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'node:path'

async function createTable() {
    
    // connect to the database
    const db = await open({
        filename: path.join('database.db'),
        driver: sqlite3.Database
    })
}

createTable()