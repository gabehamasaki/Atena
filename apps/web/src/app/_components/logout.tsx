'use client'

import { DropdownMenuItem } from "@atena/ui/dropdown-menu"
import { useRouter } from "next/navigation"

export default function Logout() {
  const router = useRouter()
  
  const handleLogout = async () => {
    await fetch('/api/auth/logout')
    router.replace('/login')
  }
  return (
    <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
      Logout
    </DropdownMenuItem>
  )
}