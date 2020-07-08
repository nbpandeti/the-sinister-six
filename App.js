import * as React from 'react';
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
        <Tab.Navigator barStyle="none">
            <Tab.Screen name="Splash" component={Splash} />
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="ARWorld1" component={ARWorld1} />
            <Tab.Screen name="ARWorld2" component={ARWorld2} />
            <Tab.Screen name="ARWorld3" component={ARWorld3} />
            <Tab.Screen name="Contact" component={Contact} />
            <Tab.Screen name="FAQ" component={FAQ} />
        </Tab.Navigator>
      </NavigationContainer>
    );
}