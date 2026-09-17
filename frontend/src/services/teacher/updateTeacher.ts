"use server";

import { cookies } from "next/headers";

/* eslint-disable @typescript-eslint/no-explicit-any */

export const updateTeacher = async (id: string, data: any) => {
  const accessToken = (await cookies()).get("accessToken")?.value;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/teacher/${id}`, {
    method: "PATCH",
    headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
    body: JSON.stringify(data),
  });

  return res.json();
};

// export const getSingleTeacher = async (id: string) => {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/teacher/single/${id}`,
//     {
//       method: "GET",
//       credentials: "include",
//     },
//   );
//   console.log("Get single Teacher ID", res);

//   return res.json();
// };
