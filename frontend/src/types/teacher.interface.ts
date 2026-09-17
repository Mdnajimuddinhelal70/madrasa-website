export type CreateManagerFormValues = {
  name: string;
  phone: string;
  picture: File[];
  description: string;
  startYear?: number;
  endYear?: number;
};

export type CreateTeacherFormValues = {
  name: string;
  fatherName: string;
  motherName: string;
  village: string;
  postOffice: string;
  thana: string;
  district: string;
  phone: string;
  email: string;
  education: string[];
  previousPositions: string[];
  currentPosition: string;
  biography: string;
  picture: File[];
  startYear?: number;
  endYear?: number;
};
