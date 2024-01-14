import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import useGameStore from "../stores/gameStore";
import useData from "./useData";
import { CanceledError } from "axios";
import { useQuery } from "@tanstack/react-query";

interface GameDetail {
  id: number;
  slug: string;
  description: string;
  description_raw: string;
}

const useGame = (slug: string) => {
  const gameQuery = useGameStore((s) => s.gameQuery);
  const [data, setData] = useState<GameDetail>({} as GameDetail);

  return useQuery({
    queryKey: ["games", slug],
    queryFn: () => {
      return apiClient
        .get<GameDetail>(`/games/${slug}`)
        .then((response) => response.data);
    },
  });

  // useEffect(() => {
  //   const controller = new AbortController();

  //   apiClient
  //     .get<GameDetail>(`/games/${id}`, { signal: controller.signal })
  //     .then((response) => setData(response.data))
  //     .catch((error) => {
  //       console.log(error);
  //       if (error instanceof CanceledError) return;
  //     });

  //   return () => controller.abort();
  // }, [gameQuery]);

  // return { data };
};

export default useGame;
