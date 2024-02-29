import { signOut } from "@atena/auth";
import { NextResponse } from "next/server";

export async function GET() {
  await signOut()

  return NextResponse.redirect('/login');
}