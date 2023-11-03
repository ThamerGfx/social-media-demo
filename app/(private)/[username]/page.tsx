"use client";

import React from "react";
import UserPageHeader from "./user-page-header";

export default function UserPage({ params }: { params: { username: string } }) {
  return (
    <div>
      <UserPageHeader username={params.username} />
      <div>posts container {params.username}</div>
    </div>
  );
}
