"use client";

import { useRouter } from "next/router";

export default function redirectMe() {
  console.log("first");
  //   const router = useRouter();
  //   router.push("/home");
  window.location.href = "/home";
  // return redirect("/home");
}
