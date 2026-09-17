"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteTeacher } from "@/services/teacher/TeacherService";

import { Plus } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type Teacher = {
  _id: string;
  name: string;
  email: string;
};

export default function AllTeachers({ teachers }: { teachers: Teacher[] }) {
  const router = useRouter();
  const handleDelete = async (id: string) => {
    const confirmDelete = confirm("Are you sure?");
    if (!confirmDelete) return;

    const res = await deleteTeacher(id);

    if (res.success) {
      toast.success("Teacher deleted");
      router.refresh();
    } else {
      toast.error("Delete failed");
    }
  };
  return (
    <div className="space-y-6 p-4">
      {/* 🔹 Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">All Teachers</h1>
          <p className="text-sm text-muted-foreground">
            Manage all teachers here
          </p>
        </div>

        <Link href="/dashboard/create-teacher">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Teacher
          </Button>
        </Link>
      </div>

      {/* 🔹 Search */}
      <div className="flex items-center justify-between">
        <Input placeholder="Search teachers..." className="max-w-sm" />
      </div>

      {/* 🔹 Table */}
      <div className="rounded-xl border bg-background">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {teachers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3} className="text-center py-6">
                  No teachers found
                </TableCell>
              </TableRow>
            ) : (
              teachers?.map((teacher) => (
                <TableRow key={teacher._id}>
                  <TableCell>{teacher.name}</TableCell>
                  <TableCell>{teacher.email}</TableCell>
                  <TableCell className="text-right space-x-2">
                    <Link href={`/dashboard/edit-teacher/${teacher._id}`}>
                      <Button size="sm" variant="outline">
                        Edit
                      </Button>
                    </Link>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDelete(teacher._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
