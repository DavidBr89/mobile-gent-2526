import { createContext, PropsWithChildren, useState } from "react";

interface FavoritesContextType {
  favorites: Parking[];
  addFavorites: (item: Parking) => void;
}

export const FavoritesContext = createContext<FavoritesContextType | null>(
  null
);

const FavoritesProvider = (props: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<Parking[]>([]);

  const addFavorites = (item: Parking) => {
    if (favorites.some((f) => f.id === item.id)) {
      const newFavorites = favorites.filter((f) => f.id !== item.id);
      setFavorites(newFavorites);
    } else {
      setFavorites([...favorites, item]);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorites }}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
