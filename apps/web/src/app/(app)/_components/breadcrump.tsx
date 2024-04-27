'use client'
import {
  Breadcrumb as BreadcrumbComponent,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@atena/ui/breadcrumb"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Breadcrumb() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter((path) => path !== "");

  const generateBreadcrumb = () => {
    const breadcrumbs = [] as JSX.Element[];
    paths.forEach((path, index) => {
      if (index == paths.length - 1) {
        breadcrumbs.push(
          <BreadcrumbItem key={index}>
            <BreadcrumbPage key={index}>{path[0]?.toUpperCase() + path.slice(1)}</BreadcrumbPage>
          </BreadcrumbItem >
        );
      } else {
        breadcrumbs.push(
          <BreadcrumbItem key={index}>
            <BreadcrumbLink asChild>
              <Link href={`/${paths.slice(0, index + 1).join("/")}`}>
                {path[0]?.toUpperCase() + path.slice(1)}
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      }
      if (index < paths.length - 1) {
        breadcrumbs.push(<BreadcrumbSeparator key={`separator-${index}`} />);
      }
    });
    return breadcrumbs;
  }

  if (paths.length === 0) {
    return (
      <div className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6" >
        <BreadcrumbComponent className="hidden md:flex">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbPage>Dashboard</BreadcrumbPage>
              </BreadcrumbItem >
            </BreadcrumbItem>
          </BreadcrumbList>
        </BreadcrumbComponent>
      </div >
    )
  }

  return (
    <div className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <BreadcrumbComponent className="hidden md:flex">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {generateBreadcrumb().map((bc) => bc)}
        </BreadcrumbList>
      </BreadcrumbComponent>
    </div>
  )
}