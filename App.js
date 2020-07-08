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
                tabBarIcon: ({ focused}) => {
                  let icons;
      
                  if (route.name === 'Home') {
                    icons = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                    return <Image source={require('./components/images/back.png')}
                  style={{
                      height: 30,
                      width: 30
                  }}/>;
                  } else if (route.name === 'ARWorld1') {
                    icons = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                    return <Image source={require('./components/images/mars.png')}
                    style={{
                      height: 32,
                      width: 32
                  }}/>;
                  } else if (route.name === 'ARWorld2') {
                    icons = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                    return <Image source={require('./components/images/saturn.png')}
                    style={{
                      height: 70,
                      width: 70
                  }}/>;
                  } else if (route.name === 'ARWorld3') {
                    icons = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                    return <Image source={require('./components/images/moon.png')}
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
              }}
        >
            <Tab.Screen name="Splash" component={Splash} />
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="ARWorld1" component={ARWorld1} />
            <Tab.Screen name="ARWorld2" component={ARWorld2} />
            <Tab.Screen name="ARWorld3" component={ARWorld3} />
           {/*  <Tab.Screen name="Contact" component={Contact} />
            <Tab.Screen name="FAQ" component={FAQ} /> */}
        </Tab.Navigator>
      </NavigationContainer>
    );
}
