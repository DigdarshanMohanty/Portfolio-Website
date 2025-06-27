import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navItems = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Projects", path: "/projects" },
  ];
  <span className="mx-5 text-white-500">•</span>

  return (
    <div className="flex justify-center items-center mx-auto py-4 dark:bg-[#0D0D0D]">
    <div className="flex justify-center items-center px-8 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.5)] sticky top-0 z-200 rounded-2xl w-fit border-amber-50 border-1">
      <ul className="flex gap-6 text-sm items-center">
        {navItems.map(({ name, path }) => (
          <li key={name}>
               <Link
                to={path}
                className={`inline-block px-2 py-1 relative font-medium transition duration-200
                  ${location.pathname === path && path !== "/home" ? "text-yellow-300 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-yellow-300" :
                  "text-gray-300 hover:text-yellow-300 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-yellow-300 hover:after:w-full after:transition-all after:duration-300"}`}
              >
                {name}
              </Link>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}
