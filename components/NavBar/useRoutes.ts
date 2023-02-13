import { useRouter } from "next/router";
import Broadcast from "../../assets/icons/Broadcast";
import Dashboard from "../../assets/icons/Dashboard";
import File from "../../assets/icons/File";
import Home from "../../assets/icons/Home";
import Settings from "../../assets/icons/Settings";
import Warning from "../../assets/icons/Warning";

export const useRoutes = () => {
  const route = useRouter();
  const path = route.pathname;

  const routes: {
    name: string;
    routename: string;
    nestedRoute?: { name: string; routename: string; isActive: boolean }[];
    icons: () => JSX.Element;
    isActive: boolean;
  }[] = [
    { name: "Home", routename: "/docs", icons: Home, isActive: path === "/" },
    {
      name: "Overview",
      routename: "overview",
      icons: File,
      isActive: path === "/overview",
    },
    {
      name: "Getting Started",
      routename: "getting-started",
      icons: Dashboard,
      isActive: path === "/getting-started",
    },
    {
      name: " Generators",
      routename: "/generator",
      nestedRoute: [
        {
          name: "Component",
          routename: "/generator/component",
          isActive: false,
        },
        { name: "Screen", routename: "/generator/screen", isActive: false },
        { name: "Store", routename: "/generator/store", isActive: false },
      ],
      icons: Settings,
      isActive: path.includes("generator"),
    },
    {
      name: " Testing",
      routename: "/testing",
      icons: Warning,
      isActive: path.includes("testing"),
      nestedRoute: [
        { name: "e2e", routename: "/testing/e2e", isActive: false },
        {
          name: "Unit Testing",
          routename: "/testing/unit-testing",
          isActive: false,
        },
      ],
    },
    {
      name: " CI/CD",
      routename: "ci-cd",
      icons: Broadcast,
      isActive: path === "/ci-cd",
    },
  ];
  return { routes };
};
