import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}

/**
 * Contains all the name of the screens in current project
 */
export type RootStackParamList = {
    LogIn: undefined;
    SignUp: undefined;
    Home: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
    RootStackParamList,
    Screen
>;