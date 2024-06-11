import assert from 'node:assert';
import { describe, test } from 'node:test';
import { Database } from '~/deps/database.js';

describe(Database.name, () => {
    test('does something', () => {
        const db = new Database();
        assert.equal(db.getById('2')?.name, 'user1');
    });
});
