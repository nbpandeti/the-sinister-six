import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Splash from './components/Splash.js';
import Home from './components/Home.js';
import ARWorld1 from './components/ARWorld1.js';
import ARWorld2 from './components/ARWorld2.js';
import ARWorld3 from './components/ARWorld3.js';
import Contact from './components/Contact.js';
import FAQ from './components/FAQ.js';

const Tab = createBottomTabNavigator();
  
export default function App()
{
    return (
      <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarVisible: true,
                tabBarIcon: ({ focused}) => {
                  if (route.name === 'Home') {
                    return <Image testID="HomeTabButton" source={require('./components/images/back.png')}
                  style={{
                      height: 30,
                      width: 30
                  }}/>;
                  } else if (route.name === 'Terrestrial Planets') {
                    return <Image testID="ARWorld1TabButton" source={require('./components/images/mars.png')}
                    style={{
                      height: 32,
                      width: 32
                  }}/>;
                  } else if (route.name === 'Gas Giants') {
                    return <Image testID="ARWorld2TabButton" source={require('./components/images/saturn.png')}
                    style={{
                      height: 70,
                      width: 70
                  }}/>;
                  } else if (route.name === 'Asteroid Belt') {
                    return <Image testID="ARWorld3TabButton" source={require('./components/images/moon.png')}
                    style={{
                      height: 30,
                      width: 30
                  }}/>;
                  }
                 return null;
                },
              })}
              tabBarOptions={{
                style: {
                    backgroundColor: '#303030'
                  },
                activeTintColor: 'grey',
                inactiveTintColor: 'white',
                showLabel: 'false'
              }}
        >
            <Tab.Screen  /*options={{tabBarVisible:false}} */ name="Splash" testID="HomeTabButtonLink" component={Splash} />
            <Tab.Screen  /*options={{tabBarVisible:false}} */ name="Home" testID="HomeTabButtonLink" component={Home} />
            <Tab.Screen name="Terrestrial Planets" testID="ARWorld1TabButtonLink" component={ARWorld1} />
            <Tab.Screen name="Gas Giants" testID="ARWorld2TabButtonLink" component={ARWorld2} />
            <Tab.Screen name="Asteroid Belt" testID="ARWorld3TabButtonLink" component={ARWorld3} />
           {/*  <Tab.Screen name="Contact" component={Contact} />
            <Tab.Screen name="FAQ" component={FAQ} /> */}
        </Tab.Navigator>
      </NavigationContainer>
      

    );
}