import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: isRole, isLoading: isRoleLoading } = useQuery({
        queryKey: ['isRole'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/role?email=${user?.email}`)
            return res.data.result.role;
        }
    })

    return [isRole, isRoleLoading]
}

export default useRole;