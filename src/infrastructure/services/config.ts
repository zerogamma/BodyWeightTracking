const table = process.env.MAIN_TABLE as string;

export const tableName = process.env.AMPLIFY_STORAGE_TABLES ? JSON.parse(process.env.AMPLIFY_STORAGE_TABLES)['BodyInfo'] : table;
