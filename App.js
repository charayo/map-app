import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';

//Screens
import MapScreen from './src/screens/MapScreen';
import MapDetailScreen from './src/screens/MapDetailScreen';
import MenuScreen from './src/screens/MenuScreen';




//Navigation
const AppStack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppStack.Navigator>
          <AppStack.Screen name='Menu' component={MenuScreen} options={{headerShown: false}}/>
          <AppStack.Screen name='Map' component={MapScreen} />
          <AppStack.Screen name='MapDetail' component={MapDetailScreen} />
        </AppStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
