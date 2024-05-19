import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'
const sql = neon('postgresql://Daily-Expense-Tracker_owner:vKW2VQ9jTUDI@ep-blue-hat-a5qj5e4f.us-east-2.aws.neon.tech/Daily-Expense-Tracker?sslmode=require');
export const db = drizzle(sql,{schema});


// import { neon } from '@neondatabase/serverless';
// import { drizzle } from 'drizzle-orm/neon-http';
// const sql = neon(process.env.DRIZZLE_DATABASE_URL!);
// const db = drizzle(sql);