"use client";
import { useRouter } from "next/navigation";
import React from "react";

const newUser = () => {
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.push("/")} className="btn">
        Create User
      </button>
    </div>
  );
};

export default newUser;
