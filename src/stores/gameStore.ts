import { create } from "zustand";
import { Platform } from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";

interface GameQuery {
  genre?: Genre | null;
  platform?: Platform | null;
  sortOrder?: string;
  searchText?: string;
}

interface GameStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenre: (genre: Genre) => void;
  setPlatform: (platform: Platform) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameStore = create<GameStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) => {
    set((store) => ({ gameQuery: { searchText } }));
  },
  setGenre: (genre) => {
    set((store) => ({ gameQuery: { ...store.gameQuery, genre } }));
  },
  setPlatform: (platform) => {
    set((store) => ({ gameQuery: { ...store.gameQuery, platform } }));
  },
  setSortOrder: (sortOrder) => {
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } }));
  },
}));

export default useGameStore;
