import { Link } from "react-router-dom";
import HeaderMenu from "../UI/HeaderMenu";
import { HiOutlineMenu } from "react-icons/hi";
import { useToggle } from "../Contexts/ToggleContext";
import useUser from "../Features/Authentication/useUser";

export default function AppBar({ home }) {
  const { isLoading } = useUser();
  const { setIsToggleOpen } = useToggle();

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 bg-black/5 dark:bg-white/5 shadow-sm backdrop-blur-md ${isLoading ? "opacity-30 blur-sm" : ""}`}
    >
      <div className="container mx-auto flex items-center justify-between gap-x-2 p-4 px-4 xl:max-w-screen-lg">
        {/* Right: Logo */}
        <div className="text-blue-600">
          <Link to="/">
            <div className="text-2xl font-bold">
              <span className="rounded-[12px] bg-blue-200 px-1 text-gray-600">
                free
              </span>
              <span className="pt-1 text-gray-400 opacity-80">lancer</span>
            </div>
          </Link>

          {!home && (
            <button className="md:hidden" onClick={() => setIsToggleOpen(true)}>
              <HiOutlineMenu className="h-7 w-7 text-primary-900" />
            </button>
          )}
        </div>

        {/* Left: Icons */}
        <div className="flex items-center gap-6">
          <button className="text-gray-600 transition hover:text-blue-600"></button>
          <HeaderMenu />
        </div>
      </div>
    </nav>
  );
}
