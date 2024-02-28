import { auth, signOut } from "@atena/auth"
import { Button } from "@atena/ui/button"
import { Avatar, AvatarImage } from '@atena/ui/avatar'

export default async function HomePage() {
  const session = await auth()
  return (
    <main className="container h-screen py-16">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="w-10 h-10">
            <AvatarImage src={session?.user.image ?? ''} alt={session?.user.name ?? ''}/>
          </Avatar>      
          <p className="text-xl">{session?.user.name}!</p>
        </div>
        <form>
          <Button
              className="flex items-center gap-4"
              size="lg"
              formAction={async () => {
                "use server";
                await signOut({
                  redirectTo: "/login",
                });
              }}
            >
              Sign out
            </Button>
        </form>
      </div>
    </main>
  )
}
