import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/HomeScreen/index';
import HistoryScreen from './Screens/HistoryScreen';
import AnaliticScreen from './Screens/AnaliticsScreen';
import {MoodProvider} from './Provider/MoodDate';
import HomeIcon from '../assets/HomeIcon';
import HistoryIcon from '../assets/HistoryIcon';
import AnaliticsIcon from '../assets/AnaliticIcon';
import theme from '../theme';
import SplashScreen from 'react-native-splash-screen';

const Tablet = createBottomTabNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <MoodProvider>
        <Tablet.Navigator
          screenOptions={({route}: any) => ({
            tabBarActiveTintColor: '#1D84B5',
            tabBarInactiveTintColor: '#8E9AAF',
            tabBarShowLabel: false,
            headerTitleStyle: {
              fontFamily: theme.fontFamilyBold,
            },
            tabBarIcon: ({color, size}: any) =>
              route.name === 'Home' ? (
                <HomeIcon color={color} size={size} />
              ) : route.name === 'History' ? (
                <HistoryIcon color={color} size={size} />
              ) : (
                <AnaliticsIcon color={color} size={size} />
              ),
          })}>
          <Tablet.Screen
            name={'Home'}
            component={HomeScreen}
            options={{title: "Today's mood"}}
          />
          <Tablet.Screen
            name={'History'}
            component={HistoryScreen}
            options={{title: "Yesterday's mood"}}
          />
          <Tablet.Screen name={'Analitics'} component={AnaliticScreen} />
        </Tablet.Navigator>
      </MoodProvider>
    </NavigationContainer>
  );
};

export default App;
