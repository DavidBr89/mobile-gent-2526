import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { StackScreenProps } from "@react-navigation/stack";

export type AuthStackParamsList = {
  login: undefined;
  register: undefined;
};

export type RootStackParamsList = {
  parkingList: undefined;
  parkingDetail: { data: Parking };
  parkingInfo: undefined;
  addParking: undefined;
};

export type ParkingsTabParamsList = {
  home: undefined;
  map: undefined;
  favorites: undefined;
  settings: undefined;
};

export type ParkingsDrawerParamsList = {
  profile: undefined;
  camera: undefined;
  about: undefined;
  products: undefined;
};

export type AuthStackNavProps<T extends keyof AuthStackParamsList> =
  StackScreenProps<AuthStackParamsList, T>;

export type RootStackNavProps<T extends keyof RootStackParamsList> =
  StackScreenProps<RootStackParamsList, T>;
export type ParkingsTabNavProps<T extends keyof ParkingsTabParamsList> =
  BottomTabScreenProps<ParkingsTabParamsList, T>;
export type ParkingsDrawerNavProps<T extends keyof ParkingsDrawerParamsList> =
  DrawerScreenProps<ParkingsDrawerParamsList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends AuthStackParamsList,
        RootStackParamsList,
        ParkingsTabParamsList,
        ParkingsDrawerParamsList {}
  }
}
