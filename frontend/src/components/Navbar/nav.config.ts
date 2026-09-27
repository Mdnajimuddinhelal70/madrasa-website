import {
  BookOpen,
  CircleUserRound,
  House,
  Info,
  Mail,
  Users,
} from "lucide-react";

export const navItems = [
  {
    label: "Home",
    href: "/",
    icon: House,
  },
  {
    label: "About",
    href: "/about",
    icon: Info,
  },
  {
    label: "Teachers",
    href: "/teachers",
    icon: Users,
  },
  {
    label: "Education",
    href: "/education",
    icon: BookOpen,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: Mail,
  },
];

export const loginItem = {
  label: "Login",
  href: "/login",
  icon: CircleUserRound,
};
