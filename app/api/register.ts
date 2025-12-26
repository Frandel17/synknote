"use server"

import { api } from "@/src/lib/axios";
import { signIn } from "next-auth/react";

interface Auth {
    username:string,
    email:string,
    password:string
}

export const register = async (data: Auth) => {
  try {
    const res = await api.post("/signup", data);
    console.log({res})
    return { ok: true, data: res.data };
  } catch (error: any) {
    return {
      ok: false,
      message: error.response?.data?.message || "Unexpected error",
      status: error.response?.status,
    };
  }
};
