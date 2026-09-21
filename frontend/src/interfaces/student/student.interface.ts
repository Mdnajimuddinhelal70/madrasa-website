export interface IStudent {
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
  isActive?: boolean;
}

export interface IApiResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
}
