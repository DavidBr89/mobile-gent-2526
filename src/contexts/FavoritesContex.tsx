import { createContext, PropsWithChildren, useState } from "react";

interface FavoritesContextType {
  favorites: Parking[];
}

const FavoritesContext = createContext<FavoritesContextType | null>(null);

const FavoritesProvider = (props: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<Parking[]>([]);

  return (
    <FavoritesContext.Provider value={{ favorites }}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
