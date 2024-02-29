"use client"
import { useTheme } from "@atena/ui/theme"
import Image from "next/image"

export function AtenaBrand() {
  const { theme } = useTheme()
  return (
    <Image src={
      theme === 'dark' ? '/brand-dark.svg' : '/brand-light.svg'
    } alt="Atena" width={28} height={28}/>
  )
}

export function AtenaLogo() {
  const { theme } = useTheme()
  return (
    <Image src={theme === 'dark' ? '/atena-dark.svg' : '/atena-light.svg'} alt="Atena" width={512} height={328}/>
  )
}