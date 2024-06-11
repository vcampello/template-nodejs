export type User = {
    id: string;
    name: string;
};

export class Database {
    getById(id: string): User | undefined {
        return {
            id,
            name: 'user1',
        };
    }
}
