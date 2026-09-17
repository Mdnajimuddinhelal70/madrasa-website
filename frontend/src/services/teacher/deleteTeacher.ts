"use server";

export const deleteTeacher = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/teacher/${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  return res.json();
};
