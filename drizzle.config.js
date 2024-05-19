
// export default {
//     schema: "./utils/schema.jsx",
//     driver: 'pg',
//     dbCredentials: {
//       connectionString: 'postgresql://accounts:ypvN2ke3PGFE@ep-weathered-heart-a58wmzem.us-east-2.aws.neon.tech/Expenses-Tracker?sslmode=require',
//     }
//   };

  /** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.jsx",
  out: "./drizzle",
  dialect: 'pg',
  dbCredentials: {
    connectionString: 'postgresql://Daily-Expense-Tracker_owner:vKW2VQ9jTUDI@ep-blue-hat-a5qj5e4f.us-east-2.aws.neon.tech/Daily-Expense-Tracker?sslmode=require',
  }
};