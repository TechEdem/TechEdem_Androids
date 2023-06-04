import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import IntroPage from '../screens/Intro'
import Home from '../screens/Home'


const screens = {
    IntroPage: {
        screen: IntroPage,
        navigationOptions: ({navigation}) =>({
            header: null,
          }),
    },
    Home: {
        screen: Home,
        navigationOptions: ({navigation}) =>({
            header: null,
          }),
    }
}

const Stack = createStackNavigator(screens);

export default createAppContainer(Stack)