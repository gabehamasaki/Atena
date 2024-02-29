'use client'

import { Loader2 } from 'lucide-react'
import { signIn } from 'next-auth/react'
import { useState } from 'react'

import { Button } from '@atena/ui/button'
import Google from '../../../../public/google.svg'
import Image from 'next/image'

export function SignInButton() {
  const [loading, setLoading] = useState(false)

  async function handleSignIn() {
    setLoading(true)

    await signIn('google', {
      callbackUrl: '/',
    })
  }

  return (
    <Button
      variant="ghost"
      type="button"
      className=""
      onClick={handleSignIn}
      disabled={loading}
    >
      {loading ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Image alt='google' src={Google} width={16} height={16} className="mr-2 h-4 w-4" />
      )}
      Sign in with Google
    </Button>
  )
}