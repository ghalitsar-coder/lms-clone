import { Compass, Layout, LucideProps } from "lucide-react";
import { ForwardRefExoticComponent } from "react";

export type GuesRoutesProps = {
  icon: ForwardRefExoticComponent<LucideProps>;
  label: string;
  href: string;
};

export const guestRoutes: GuesRoutesProps[] = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/search",
  },
];
