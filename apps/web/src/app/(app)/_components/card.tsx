import { Card as CardRoot, CardContent, CardHeader, CardTitle } from "@atena/ui/card";
import type { LucideIcon } from "lucide-react";

interface CardProps {
  title: string;
  value: number;
  percentage: string;
  Icon: LucideIcon;
  isMoney?: boolean;
}

export default function Card({ title, value, Icon, percentage, isMoney }: CardProps) {
  return (
    <CardRoot>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{isMoney ? value.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
        }) : value}</div>
        <p className="text-xs text-green-500">
          +{percentage}%
        </p>
      </CardContent>
    </CardRoot>
  )
}