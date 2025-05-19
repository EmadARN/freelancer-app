import UserAvatar from "../Features/Authentication/UserAvatar";
import useUser from "../Features/Authentication/useUser";
import HeaderMenu from "./HeaderMenu";

function Header() {
  const { isLoading } = useUser();

  return (
    <div className="border-b border-secondary-300 bg-secondary-0 px-3 py-2 md:col-start-2 md:px-8">
      <div
        className={`container flex items-center justify-between gap-x-2 px-0 xl:max-w-screen-lg ${isLoading ? "opacity-30 blur-sm" : ""}`}
      >
        <div className="flex items-center gap-x-2 md:gap-x-4">
          <UserAvatar />
        </div>

        <HeaderMenu />
      </div>
    </div>
  );
}
export default Header;
