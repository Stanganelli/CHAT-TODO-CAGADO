import Main from './components/Main';
import Chat from './components/Chat';
//eric eva e adão kanye é o goat
import { createStackNavigator } from 'react-navigation'
const navigator = createStackNavigator({
  Main: { screen: Main },
  Chat: { screen: Chat },
});
export default navigator
