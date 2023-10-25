"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

export default function Form() {
  const router = useRouter();
  const [username, setUsername] = useState<undefined | string>("");
  const [password, setPassword] = useState<undefined | string>("");
  const [confirmPassword, setConfirmPassword] = useState<undefined | string>(
    ""
  );
  const [error, setError] = useState<string[]>([]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError([]);

    if (password !== confirmPassword) {
      error.push("Password do not match.");
      return;
    }

    const res = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });
    if (res.ok) {
      window.location.href = "/feed";
    } else {
      alert("sign up failed");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 p-5 max-w-xs w-full bg-slate-800 rounded-lg"
    >
      <div className="text-white text-center">
        <h3 className="font-sem">Sign Up</h3>
      </div>
      <div className="my-3">
        <hr />
      </div>
      <div>
        <div className="flex flex-col gap-2">
          <label className="text-white">Username</label>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            id="username"
            placeholder="Username"
            required
            className="text-black p-3 border border-slate-700 rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-white">Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          id="password"
          placeholder="Password"
          required
          className="text-black p-3 border border-slate-700 rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-white">Confirm Password</label>
        <input
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          id="confirm password"
          placeholder="Confirm Password"
          required
          className="text-black p-3 border border-slate-700 rounded-lg"
        />
      </div>
      <button
        type="submit"
        className="text-white mt-4 bg-slate-900 p-3 rounded-lg"
      >
        Sign Up
      </button>
    </form>
  );
}
