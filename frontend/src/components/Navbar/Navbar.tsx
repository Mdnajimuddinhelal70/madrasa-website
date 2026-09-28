import { cookies } from "next/headers";

import NavbarClient from "./NavbarClient";

export default async function Navbar() {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  const isLoggedIn = !!accessToken;

  return <NavbarClient isLoggedIn={isLoggedIn} />;
}
