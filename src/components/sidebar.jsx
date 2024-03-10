"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import {
  BellIcon,
  HomeIcon,
  MessageSquareDot,
  Calendar,
  SwordsIcon,
  GraduationCap,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();
  const currentPage = pathname.split("/").filter(Boolean)[0];
  const isActiveLink = (href) => {
    const linkPath = href.split("/").filter(Boolean)[0];
    return currentPage === linkPath;
  };

  return (
    <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[60px] items-center border-b px-6">
          <Link className="flex items-center gap-2 font-semibold" href="/">
            <Image alt="Logo" height="40" src="/logo-full.svg" width="120" />
          </Link>
          <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
            <BellIcon className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            <Link
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-gray-900 ${
                isActiveLink("/")
                  ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
                  : "text-gray-500 dark:text-gray-400"
              }`}
              href="/"
            >
              <HomeIcon className="h-4 w-4" />
              Home
            </Link>
            <Link
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-gray-900 ${
                isActiveLink("/challenges")
                  ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
                  : "text-gray-500 dark:text-gray-400"
              }`}
              href="/challenges"
            >
              <SwordsIcon className="h-4 w-4" />
              Challenges
              {/* <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                6
              </Badge> */}
            </Link>
            <Link
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-gray-900 ${
                isActiveLink("/events")
                  ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
                  : "text-gray-500 dark:text-gray-400"
              }`}
              href="/events"
            >
              <Calendar className="h-4 w-4" />
              Events
            </Link>
            <Link
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-gray-900 ${
                isActiveLink("/learn")
                  ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
                  : "text-gray-500 dark:text-gray-400"
              }`}
              href="/learn"
            >
              <GraduationCap className="h-4 w-4" />
              Learn
            </Link>
            <Link
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-gray-900 ${
                isActiveLink("/discuss")
                  ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
                  : "text-gray-500 dark:text-gray-400"
              }`}
              href="/discuss"
            >
              <MessageSquareDot className="h-4 w-4" />
              Discuss
            </Link>
          </nav>
        </div>
        <div className="mt-auto p-4">
          <Card>
            <CardHeader className="pb-4">
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our support team
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" size="sm">
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
