import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import useGameStore from "../stores/gameStore";

// interface Props {
//   onSelectPlatform: (platfrom: Platform) => void;
//   selectedPlatform: Platform | null;
// }

// const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
//   const { data, error, isLoading } = usePlatforms();

//   if (error) return null;

//   return (
//     <Menu>
//       <MenuButton as={Button} rightIcon={<BsChevronDown />}>
//         {selectedPlatform?.name || "Platforms"}
//       </MenuButton>
//       <MenuList>
//         {data.map((platform) => (
//           <MenuItem
//             onClick={(event) => {
//               onSelectPlatform(platform);
//             }}
//             key={platform.id}
//           >
//             {platform.name}
//           </MenuItem>
//         ))}
//       </MenuList>
//     </Menu>
//   );
// };

const PlatformSelector = () => {
  const { data, error, isLoading } = usePlatforms();
  const selectedPlatform = useGameStore((s) => s.gameQuery.platform);
  const setSelectedPlatform = useGameStore((s) => s.setPlatform);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            onClick={(event) => {
              setSelectedPlatform(platform);
            }}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
