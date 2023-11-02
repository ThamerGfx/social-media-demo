import Image from "next/image";
import React from "react";
import useSWR from "swr";

export default function AvatarForm() {
  const { data, error, isLoading } = useSWR("/api/users/profile");

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const user = data.data;

  return (
    <form>
      {user.avatar && (
        <Image
          src={user.avatar}
          width={200}
          height={200}
          alt={user.avatar}
          className="rounded-full m-auto my-5"
        />
      )}
      {!user.avatar && (
        <div
          className="bg-slate-600 rounded-full m-auto my-5"
          style={{ width: 200, height: 200 }}
        ></div>
      )}
      <input type="file" />
    </form>
  );
}
