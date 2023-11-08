"use client";

import React from "react";
import useSWR from "swr";
import Form from "./form";

export default function EditPost({ params }: { params: { id: string } }) {
  const { data, error, isLoading } = useSWR("/api/posts/" + params.id);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <h2>Edit Post</h2>
      <div className="flex flexcol gap-10">
        <Form post={data.data} />
        {/* <DeleteBtn /> */}
      </div>
    </div>
  );
}
