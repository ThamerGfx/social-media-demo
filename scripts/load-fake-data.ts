import { Client } from "pg";
import { loadEnvConfig } from "@next/env";

// const projectDir = process.cwd();
// loadEnvConfig(projectDir);

async function loadFakeData(numUsers: number = 10) {
  console.log(`generating ${numUsers} users`);

  const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "strings_app",
    password: "postgres",
    port: 5432,
  });

  //   const res = await client.query("salect 1");
  console.log("aaaa: ", await client.query("salect 1"));
}

loadFakeData();
