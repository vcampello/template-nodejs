import assert from 'node:assert';
import { describe, test } from 'node:test';
import { Database } from '~/deps';

describe(Database.name, () => {
    test(Database.prototype.getById.name, () => {
        const db = new Database();
        const user = db.getById('1');

        assert.equal(user?.id, '1');
        assert.equal(user?.name, 'user1');
    });
});
