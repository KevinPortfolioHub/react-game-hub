import { Heading } from "@chakra-ui/react";
import useGameStore from "../stores/gameStore";

// type Props = {
//   gameQuery: GameQuery;
// };

// const GameHeading = ({ gameQuery }: Props) => {
//   const heading = `${gameQuery.platform?.name || ""} ${
//     gameQuery.genre?.name || ""
//   } Games`;

//   return (
//     <Heading as="h1" marginY={5} fontSize="5xl">
//       {heading}
//     </Heading>
//   );
// };

const GameHeading = () => {
  const gameQuery = useGameStore((s) => s.gameQuery);

  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
