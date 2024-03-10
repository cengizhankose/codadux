import React from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChallengesData } from "@/data";
import Image from "next/image";

function ChallengesPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex items-center">
        <h1 className="font-semibold text-lg md:text-2xl">Challenges</h1>
        {/* <Button className="ml-auto" size="sm">
          Add product
        </Button> */}
      </div>
      <div className="border shadow-sm rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">Image</TableHead>
              <TableHead className="max-w-[150px]">Name</TableHead>
              <TableHead className="hidden md:table-cell">Category</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Prize</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ChallengesData.map((challenge) => (
              <TableRow key={challenge.id} href={`/challenges/${challenge.id}`}>
                <TableCell>
                  <img
                    src={challenge.image}
                    alt="Superteam Turkey"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </TableCell>
                <TableCell>{challenge.name}</TableCell>
                <TableCell className="hidden md:table-cell">
                  <span className="bg-secondary p-1 rounded-sm font-semibold">
                    {challenge.category}
                  </span>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {new Date(challenge.date).toLocaleDateString()}
                </TableCell>
                <TableCell>{challenge.title}</TableCell>
                <TableCell>
                  <span className="bg-primary p-1 rounded-sm font-bold text-background">
                    {challenge.prize} SOL
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}

export default ChallengesPage;
