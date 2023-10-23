import { Client } from "pg";
import { loadEnvConfig } from "@next/env";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

async function loadFakeData(numUsers: number = 10) {
  console.log(`executing load fake data. generating ${numUsers} users.`);

  const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "strings_app",
    password: "Thaaamer",
    port: 5432,
  });

  await client.connect();

  const res = await client.query("select 1");
  console.log(res);
  await client.end();
}

loadFakeData();
