"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye, Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Student {
  _id: string;
  name: string;
  fatherName?: string;
  phone?: string;
  guardianPhone?: string;
  picture?: string;
  completionYear: number;
  isActive: boolean;
}

interface StudentsTableProps {
  students: Student[];
}

const StudentsTable = ({ students }: StudentsTableProps) => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Student</TableHead>
            <TableHead>Father Name</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Guardian Phone</TableHead>
            <TableHead>Completion Year</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {students.length > 0 ? (
            students.map((student) => (
              <TableRow key={student._id}>
                {/* Student */}
                <TableCell>
                  <div className="flex items-center gap-3">
                    {student.picture ? (
                      <Image
                        src={student.picture}
                        alt={student.name}
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    ) : (
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-medium">
                        {student.name.charAt(0).toUpperCase()}
                      </div>
                    )}

                    <span className="font-medium">{student.name}</span>
                  </div>
                </TableCell>

                {/* Father Name */}
                <TableCell>{student.fatherName || "N/A"}</TableCell>

                {/* Phone */}
                <TableCell>{student.phone || "N/A"}</TableCell>

                {/* Guardian Phone */}
                <TableCell>{student.guardianPhone || "N/A"}</TableCell>

                {/* Completion Year */}
                <TableCell>{student.completionYear}</TableCell>

                {/* Status */}
                <TableCell>
                  <span
                    className={
                      student.isActive
                        ? "rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700"
                        : "rounded-full bg-red-100 px-2.5 py-1 text-xs font-medium text-red-700"
                    }
                  >
                    {student.isActive ? "Active" : "Inactive"}
                  </span>
                </TableCell>

                {/* Actions */}
                <TableCell>
                  <div className="flex justify-end gap-2">
                    {/* Details */}
                    <Button
                      asChild
                      variant="outline"
                      size="icon"
                      title="View Details"
                    >
                      <Link href={`/dashboard/students/${student._id}`}>
                        <Eye className="h-4 w-4" />
                      </Link>
                    </Button>

                    {/* Edit */}
                    <Button
                      asChild
                      variant="outline"
                      size="icon"
                      title="Edit Student"
                    >
                      <Link href={`/dashboard/students/${student._id}/edit`}>
                        <Pencil className="h-4 w-4" />
                      </Link>
                    </Button>

                    {/* Delete */}
                    <Button
                      variant="destructive"
                      size="icon"
                      title="Delete Student"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={7}
                className="h-24 text-center text-muted-foreground"
              >
                No students found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default StudentsTable;
