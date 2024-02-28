import { signIn } from "@atena/auth";
import { Button } from "@atena/ui/button";
import Image from "next/image";

export default async function Login() {
  return (
    <main className="container flex flex-col items-center justify-center h-screen py-16 gap-8">
      <Image src="/atena-white.svg" alt="Atena" width={512} height={328}/>
      <form>
        <Button
          className="flex items-center gap-4"
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
  )
}
