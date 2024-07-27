// Extend process.env with known variables
declare namespace NodeJS {
    export interface ProcessEnv {
        NODE_ENV?: string;
    }
}
