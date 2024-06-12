import { Database } from '~/deps';

const db = new Database();
console.log('User:', db.getById('1'));
