import { Grid, Show, GridItem, Flex, Box } from "@chakra-ui/react";
import GameGrid from "../GameGrid";
import GameHeading from "../GameHeading";
import GenreList from "../GenreList";
import PlatformSelector from "../PlatformSelector";
import SortSelector from "../SortSelector";

const HomePage = () => {
  return (
    <Grid
      // templateAreas={{
      //   base: `"nav" "main"`,
      //   lg: `"nav nav" "aside main"`,
      // }}
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      {/* <GridItem area="nav"> */}
      {/* <NavBar
        onSearch={(searchText: string) => {
          setGameQuery({ ...gameQuery, searchText: searchText });
          setSearchText(searchText);
        }}
      ></NavBar> */}
      {/* <NavBar></NavBar>
    </GridItem> */}
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
  );
};

export default HomePage;
