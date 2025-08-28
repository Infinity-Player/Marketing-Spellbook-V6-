import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/assets", label: "Assets" },
    { href: "/insights", label: "Insights" },
    { href: "/brief", label: "Brief" },
  ];

  return (
    <nav className="flex space-x-6">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`text-sm font-medium ${
            pathname === item.href
              ? "text-purple-600 dark:text-purple-400"
              : "text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
