import React from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useUpazilas = (selectedAddress2) => {
  const axiosPublic = useAxiosPublic();

  const { data: upazilas = [] } = useQuery({
    queryKey: ["upazilas", selectedAddress2],
    queryFn: async () => {
      if (!selectedAddress2) {
        return [];
      }
      const res = await axiosPublic.get(`/upazilas/${selectedAddress2}`);
      return res.data;
    },
    enabled: !!selectedAddress2,
  });

  return [upazilas];
};

export default useUpazilas;
