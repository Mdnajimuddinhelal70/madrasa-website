import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface Student {
  _id: string;
  name: string;
  fatherName?: string;
  motherName?: string;
  village?: string;
  postOffice?: string;
  thana?: string;
  district?: string;
  phone?: string;
  guardianPhone?: string;
  picture?: string;
  completionYear: number;
  biography?: string;
  isActive: boolean;
}

interface StudentDetailsProps {
  student: Student;
}

const StudentDetails = ({ student }: StudentDetailsProps) => {
  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card>
        <CardContent className="flex flex-col items-center gap-4 p-6 sm:flex-row">
          {student.picture ? (
            <Image
              src={student.picture}
              alt={student.name}
              width={120}
              height={120}
              className="h-28 w-28 rounded-full object-cover"
            />
          ) : (
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-muted text-3xl font-semibold">
              {student.name.charAt(0).toUpperCase()}
            </div>
          )}

          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold">{student.name}</h1>

            <p className="mt-1 text-muted-foreground">
              Completion Year: {student.completionYear}
            </p>

            <span
              className={
                student.isActive
                  ? "mt-3 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700"
                  : "mt-3 inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700"
              }
            >
              {student.isActive ? "Active" : "Inactive"}
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Personal Information */}
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>

        <CardContent className="grid gap-4 sm:grid-cols-2">
          <InfoItem label="Name" value={student.name} />
          <InfoItem label="Father Name" value={student.fatherName} />
          <InfoItem label="Mother Name" value={student.motherName} />
          <InfoItem label="Phone" value={student.phone} />
          <InfoItem label="Guardian Phone" value={student.guardianPhone} />
          <InfoItem
            label="Completion Year"
            value={String(student.completionYear)}
          />
        </CardContent>
      </Card>

      {/* Address */}
      <Card>
        <CardHeader>
          <CardTitle>Address</CardTitle>
        </CardHeader>

        <CardContent className="grid gap-4 sm:grid-cols-2">
          <InfoItem label="Village" value={student.village} />
          <InfoItem label="Post Office" value={student.postOffice} />
          <InfoItem label="Thana" value={student.thana} />
          <InfoItem label="District" value={student.district} />
        </CardContent>
      </Card>

      {/* Biography */}
      {student.biography && (
        <Card>
          <CardHeader>
            <CardTitle>Biography</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="leading-7 text-muted-foreground">
              {student.biography}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

interface InfoItemProps {
  label: string;
  value?: string;
}

const InfoItem = ({ label, value }: InfoItemProps) => {
  return (
    <div className="rounded-lg border p-4">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="mt-1 font-medium">{value || "N/A"}</p>
    </div>
  );
};

export default StudentDetails;
