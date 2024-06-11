import { Database } from '~/deps/database.js';

const db = new Database();
console.log('User:', db.getById('1'));
