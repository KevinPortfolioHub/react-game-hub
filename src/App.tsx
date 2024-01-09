import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import useGameStore from "./stores/gameStore";

function App() {
  // const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const gameQuery = useGameStore((s) => s.gameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          {/* <NavBar
            onSearch={(searchText: string) => {
              setGameQuery({ ...gameQuery, searchText: searchText });
              setSearchText(searchText);
            }}
          ></NavBar> */}
          <NavBar></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            {/* <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => {
                setGameQuery({ ...gameQuery, genre: genre });
              }}
            ></GenreList> */}
            <GenreList></GenreList>
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={2}>
            {/* <GameHeading gameQuery={gameQuery}></GameHeading> */}
            <GameHeading></GameHeading>
            <Flex marginBottom={5}>
              <Box marginRight={5}>
                {/* <PlatformSelector
                  selectedPlatform={gameQuery.platform}
                  onSelectPlatform={(platform) => {
                    setGameQuery({ ...gameQuery, platform: platform });
                  }}
                ></PlatformSelector> */}
                <PlatformSelector></PlatformSelector>
              </Box>
              {/* <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) => {
                  setGameQuery({ ...gameQuery, sortOrder: sortOrder });
                }}
              ></SortSelector> */}
              <SortSelector></SortSelector>
            </Flex>
          </Box>
          {/* <GameGrid gameQuery={gameQuery} /> */}
          <GameGrid></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
