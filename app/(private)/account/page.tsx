"use client";

import React from "react";
import AvatarForm from "./avatar-form";
import SignOutButton from "./signout-button";

export default function Page() {
  return (
    <div>
      <h2>Account</h2>
      <AvatarForm />
      <SignOutButton />
    </div>
  );
}
