import { useLocation } from "react-router-dom";
import useGame from "../../hooks/useGame";
import { Spinner } from "@chakra-ui/react";

const GameDetailPage = () => {
  // throw new Error("An error!");
  const { state } = useLocation();
  const { slug } = state;
  const { isLoading, error, data, isFetching } = useGame(slug);
  // console.log(data?.description_raw);

  if (error) throw error;

  return isFetching ? <Spinner></Spinner> : data?.description_raw;
};

export default GameDetailPage;
