"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    const mobile = /iPhone|iPad|iPod|Android/i.test(userAgent);

    if (!mobile) {
      router.push("/desktop");
    } else {
      router.push("/");
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 px-4">
      <h1 className=" text-center font-bold text-base text-gray-900">
        Mobile View
      </h1>
    </main>
  );
}
