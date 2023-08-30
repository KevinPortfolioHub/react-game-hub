import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSubstitute from "./GameCardSubstitute";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        spacing={10}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer>
              <GameCardSubstitute key={skeleton}></GameCardSubstitute>
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer>
            <GameCard game={game}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
