import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {MaterialIcons} from '@expo/vector-icons'



import VideoPlayer from './src/screens/VideoPlayer'
import Home from './src/screens/Home';
import Search from './src/screens/Search'
import Explore from './src/screens/Explore'
import Suscribe from './src/screens/Suscribe'
import Constant from 'expo-constants'
import {reducer} from './src/reducers/reducer'

import {Provider} from 'react-redux'
import {createStore} from 'redux'

export const headerStyle = {
  backgroundColor: 'white',
  shadowColor: 'transparent',
  elevation: 0,
}

export const headerOptionsWithoutBack = {
  title: '',
  headerLeft: null,
  headerStyle,
}

const store = createStore(reducer)
const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()

const RootHome =()=>{
  return(
    <Tabs.Navigator headerMode="none"
    screenOptions={({ route }) => ({
      tabBarIcon: ({color}) => {
        let iconName;

        if (route.name === 'home') {
          iconName = 'home';
        } else if (route.name === 'explore') {
          iconName = 'explore';
        } else if (route.name === 'suscribe') {
          iconName ='subscriptions'
        }

        // You can return any component that you like here!
        return <MaterialIcons name={iconName} size={32} color={color} />;
      },
      tabBarActiveTintColor: 'red',
      tabBarInactiveTintColor: 'gray',
    })}
     >
      <Tabs.Screen name="home" component={Home} options={headerOptionsWithoutBack}/>
      <Tabs.Screen name="explore" component={Explore} options={headerOptionsWithoutBack}/>
      <Tabs.Screen name="suscribe" component={Suscribe} options={headerOptionsWithoutBack}/>

    </Tabs.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>
   <NavigationContainer>
     <Stack.Navigator headerMode="none">
       <Stack.Screen name="rootHome" component={RootHome} />
       <Stack.Screen name="search" component={Search}/>
       <Stack.Screen name="videoplayer" component={VideoPlayer}/>
     </Stack.Navigator>
   </NavigationContainer>
   </Provider>
  );

}


