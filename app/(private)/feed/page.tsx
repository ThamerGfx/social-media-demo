"use client";
import FeedContainer from "./feed-container";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Feed() {
  return (
    <main>
      <h1>Feed</h1>
      <FeedContainer />
    </main>
  );
}
