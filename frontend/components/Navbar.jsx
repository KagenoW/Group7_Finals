//Navigation Bar

import { Link, useLocation } from "react-router-dom";
import {
  House,
  LockKeyhole,
  GraduationCap,
  KeyRound,
  Zap,
  Clock3,
  UserRound,
} from "lucide-react";
//Heartel Nile Gaylan and Timothy Heinrich Jamito
function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: House },
    { name: "Activity 1", path: "/activity1", icon: LockKeyhole },
    { name: "Activity 2", path: "/activity2", icon: GraduationCap },
    { name: "Activity 3", path: "/activity3", icon: KeyRound },
    { name: "Activity 4", path: "/activity4", icon: Zap },
    { name: "Activity 5", path: "/activity5", icon: Clock3 },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#f4f7fc]/95 px-3 py-3 backdrop-blur-md md:px-6">
      <div className="flex min-h-[72px] w-full items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 shadow-md md:px-8">

        {/* LOGO */}
        <Link
          to="/"
          className="flex shrink-0 items-center gap-3"
        >
          <img
            src="/StudentPortalLogo.png"
            alt="StudentPortal Logo"
            className="h-12 w-12 object-contain"
          />

          <div className="hidden leading-tight sm:block">
            <h1 className="text-lg font-extrabold tracking-tight text-[#003b7a]">
              Student<span className="text-[#f5c400]">Portal</span>
            </h1>

            <p className="text-[10px] font-medium text-slate-400">
              Student Portal
            </p>
          </div>
        </Link>

        {/* NAVIGATION */}
        <div className="hidden flex-1 items-center justify-center gap-1 px-6 lg:flex">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold
                  transition-all duration-200
                  ${
                    isActive
                      ? "bg-[#e7eef8] text-[#003b7a] shadow-sm"
                      : "text-slate-600 hover:bg-[#f4f7fc] hover:text-[#003b7a]"
                  }
                `}
              >
                <Icon size={17} strokeWidth={2.2} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>

        {/* PROFILE BUTTON */}
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2 rounded-full bg-[#003b7a] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#002b5c] hover:shadow-md"
        >
          <UserRound size={17} strokeWidth={2.2} />
          <span className="hidden sm:inline">Student</span>
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;