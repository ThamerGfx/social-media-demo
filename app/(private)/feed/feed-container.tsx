import React, { useState } from "react";
import FeedList from "./feed-list";

export default function FeedContainer() {
  const [count, setCount] = useState(1);

  const pages = [];
  for (let i = 0; i < count; i++) {
    pages.push(<FeedList index={i} key={i} />);
  }

  return (
    <div>
      {pages}
      <div className="flex justify-center">
        <button
          className="bg-slate-900 p-2 rounded-lg self-center w-full"
          onClick={() => setCount(count + 1)}
        >
          Load more
        </button>
      </div>
    </div>
  );
}
