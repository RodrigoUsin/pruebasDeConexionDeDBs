import pool from "./getPool.js";

async function initDB() {
  try {
    const [rows] = await pool.query("SELECT 1 + 1 AS result");
    console.log("Conexión exitosa. Resultado:", rows[0].result);
  } catch (err) {
    console.error("Error conectando a la base de datos:", err);
  }
}

export default initDB;
