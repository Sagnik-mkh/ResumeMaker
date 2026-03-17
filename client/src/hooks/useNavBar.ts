import GetNavDetails from "@/services/GetNavDetails";
import { useQuery } from "@tanstack/react-query";

export function useNavBar() {
	return useQuery({
		queryKey: ["navBar"],
		queryFn: GetNavDetails,
		staleTime: 10 * 60 * 1000,
	});
}
