import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutApi } from "../../Services/authService";
import { useNavigate, useLocation } from "react-router-dom";

export default function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const location = useLocation();

  const { isPending, mutate: logout } = useMutation({
    mutationFn: logoutApi,

    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ["user"] });

      if (location.pathname === "/") {
        window.location.reload();
      } else {
        navigate("/", { replace: true });
      }
    },
  });

  return { isPending, logout };
}
