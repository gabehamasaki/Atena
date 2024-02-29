import { signIn } from "@atena/auth";
import { Button } from "@atena/ui/button";
import { ThemeToggle } from "@atena/ui/theme";
import type { Metadata } from "next";
import Image from "next/image";
import { AtenaLogo } from "~/app/_components/atenaIcon";
import Starfield from "~/app/_components/starfield";

export const metadata: Metadata = {
  title: "Login",
};

export default async function Login() {
  return (
    <>
      <Starfield
          starCount={2500}
          speedFactor={0.02}
      />
      <main className="container flex flex-col items-center justify-center h-screen py-16 gap-8">
        <AtenaLogo />
        <ThemeToggle />
        <form>
          <Button
            className="flex items-center gap-4 text-primary"
            variant="ghost"
            size="lg"
            formAction={async () => {
              "use server";
              await signIn("google", {
                redirectTo: "/",
              });
            }}
          >
            <Image src="/google.svg" alt="Google logo" width={32} height={32}/>
              Sign in with Google
          </Button>
        </form>
      </main>
      </>
  )
}
