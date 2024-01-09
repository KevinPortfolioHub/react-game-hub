import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSubstitute from "./GameCardSubstitute";
import GameCardContainer from "./GameCardContainer";
import useGameStore from "../stores/gameStore";

// interface Props {
//   gameQuery: GameQuery;
// }

// const GameGrid = ({ gameQuery }: Props) => {
//   const { data, error, isLoading } = useGames(gameQuery);
//   const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

//   if (error) return <Text>{error}</Text>;

//   return (
//     <SimpleGrid
//       columns={{
//         sm: 1,
//         md: 2,
//         lg: 3,
//         xl: 4,
//       }}
//       spacing={6}
//       padding="10px"
//     >
//       {isLoading &&
//         skeletons.map((skeleton) => (
//           <GameCardContainer key={skeleton}>
//             <GameCardSubstitute></GameCardSubstitute>
//           </GameCardContainer>
//         ))}
//       {data.map((game) => (
//         <GameCardContainer key={game.id}>
//           <GameCard game={game}></GameCard>
//         </GameCardContainer>
//       ))}
//     </SimpleGrid>
//   );
// };

const GameGrid = () => {
  const gameQuery = useGameStore((s) => s.gameQuery);

  const { data, error, isLoading } = useGames();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4,
      }}
      spacing={6}
      padding="10px"
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSubstitute></GameCardSubstitute>
          </GameCardContainer>
        ))}
      {data.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game}></GameCard>
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
