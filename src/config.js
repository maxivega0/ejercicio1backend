import "dotenv/config"; // hace que funcione el archivo process

export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/ejercicio1_db";
console.log(MONGODB_URI);
