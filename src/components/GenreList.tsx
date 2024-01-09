import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameStore from "../stores/gameStore";

// interface Props {
//   onSelectGenre: (genre: Genre) => void;
//   selectedGenre: Genre | null;
// }

// const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
//   const { data, error, isLoading } = useGenres();

//   if (error) return null;

//   if (isLoading) return <Spinner></Spinner>;

//   return (
//     <>
//       <Heading fontSize="2xl" marginBottom={3}>
//         Genres
//       </Heading>
//       <List>
//         {data.map((genre) => (
//           <ListItem paddingY="5px" key={genre.id}>
//             <HStack>
//               <Image
//                 boxSize="32px"
//                 borderRadius={8}
//                 objectFit="cover"
//                 src={getCroppedImageUrl(genre.image_background)}
//               ></Image>{" "}
//               <Button
//                 textAlign="left"
//                 whiteSpace="normal"
//                 fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
//                 onClick={(event) => {
//                   onSelectGenre(genre);
//                 }}
//                 variant="link"
//                 fontSize="lg"
//               >
//                 {genre.name}
//               </Button>
//             </HStack>
//           </ListItem>
//         ))}
//       </List>
//     </>
//   );
// };

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const selectedGenre = useGameStore((s) => s.gameQuery.genre);
  const setSelectedGenre = useGameStore((s) => s.setGenre);

  if (error) return null;

  if (isLoading) return <Spinner></Spinner>;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem paddingY="5px" key={genre.id}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>{" "}
              <Button
                textAlign="left"
                whiteSpace="normal"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={(event) => {
                  setSelectedGenre(genre);
                }}
                variant="link"
                fontSize="lg"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
