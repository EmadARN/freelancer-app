import { Link } from "react-router-dom";

function Sidebar({ children }) {
  return (
    <div className="p-2 text-blue-600">
      <Link to="/">
        <div className="text-2xl font-bold">
          <span className="rounded-[12px] bg-blue-200 px-1 text-gray-500">
            free
          </span>
          <span className="pt-1 text-gray-400 opacity-80">lancer</span>
        </div>
      </Link>

      <ul className="flex flex-col gap-y-4 pt-4">{children}</ul>
    </div>
  );
}
export default Sidebar;
