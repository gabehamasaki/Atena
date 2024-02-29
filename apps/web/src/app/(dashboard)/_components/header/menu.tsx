"use client"
import { cn } from "@atena/ui";
import { usePathname } from "next/navigation";

interface MenuProps {
  items: {
    href: string;
    label: string
  }[]
}

export default function Menu({ items }: MenuProps) {
  const pathname = usePathname()
  return (
    <div className="flex items-center gap-1 text-gray-400 h-full">
    {items.map((item, index) => (
      <a key={index} href={item.href} className={cn("flex h-full px-4 items-center text-sm", {
        "text-primary border-b border-primary ": pathname === item.href
      })}>
        {item.label}
        </a>
    ))}
  </div>
  )
}