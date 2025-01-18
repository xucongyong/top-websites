
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

export const runtime = "edge";


async function pg_query(query, params = []) {
  var connectionString = `postgresql://tencentdb_id914xe2:1121hotsren@124.222.251.122:53412/tencentdb_id914xe2`;

  console.log(connectionString);

  const pool = new Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });
  // var sql_str = `SELECT * from domains limit $1`
  // var params = [2];
  const result = await prisma.$queryRawUnsafe(query,...params);

  // const resultx = await prisma.$queryRaw(sql`${sql_str}`,
  //   ...params
  // );// Convert BigInt values to strings
const serializedResult = result.map(row => {
  return Object.fromEntries(
    Object.entries(row).map(([key, value]) => [key, typeof value === 'bigint' ? value.toString() : value])
  );
});
  return serializedResult
}

export default pg_query;
