import { signIn } from "@atena/auth";
import { Button } from "@atena/ui/button";
import Image from "next/image";

export async function AuthShowcase() {
    return (
      <form>
        <Button
          className="flex items-center gap-4"
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
    );
}
