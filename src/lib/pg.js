
import { Pool } from "pg";
import { DATABASE_URL } from "@/env";

// 创建单例连接池
let pool;
if (!global.pgPool) {
  global.pgPool = new Pool({
    connectionString: DATABASE_URL,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
  });
}
pool = global.pgPool;

async function pg_query(query, params = []) {
  const client = await pool.connect();
  
  try {
    const result = await client.query(query, params);
    return result;
  } catch(e) {
    console.error('SQL error：', {
      error: e.message,
      stack: e.stack,
      query: query,
      params: params
    });
    throw e;
  } finally {
    client.release(); // 重要：释放连接回连接池
  }
}

// 在 Cloudflare Pages 环境中优雅关闭连接池
// if (typeof addEventListener !== 'undefined') {
//   addEventListener('unload', async () => {
//     if (pool) await pool.end();
//   });
// }

export default pg_query;
