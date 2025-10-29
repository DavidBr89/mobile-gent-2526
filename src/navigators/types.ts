import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { StackScreenProps } from "@react-navigation/stack";

export type RootStackParamsList = {
    parkingList: undefined;
    parkingDetail: { data: Parking};
    parkingInfo: undefined;
}

export type ParkingsTabParamsList = {
    home: undefined;
    map: undefined;
    settings: undefined;
}

export type RootStackNavProps<T extends keyof RootStackParamsList> = StackScreenProps<RootStackParamsList, T>
export type ParkingsTabNavProps<T extends keyof ParkingsTabParamsList> = BottomTabScreenProps<ParkingsTabParamsList, T>

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamsList, ParkingsTabParamsList {}
    }
}