import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useDistricts = (selectedAddress) => {
  const axiosPublic = useAxiosPublic();

  const { data: districts = [] } = useQuery({
    queryKey: ["districts", selectedAddress],
    queryFn: async () => {
      if (!selectedAddress) {
        return [];
      }

      const res = await axiosPublic.get(`/districts/${selectedAddress}`);
      return res.data;
    },
    enabled: !!selectedAddress,
  });

  return [districts];
};

export default useDistricts;
