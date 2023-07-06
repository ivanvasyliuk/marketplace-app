import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { observer } from 'mobx-react';
import ChatScreen from '../screens/Chat/ChatScreen';
import AppTabNavigator from './AppTabNavigator';
import AuthNavigator from './AuthNavigator';
import CreatePostNavigator from './CreatePostNavigator';
import FiltersNavigator from './FiltersNavigator';
import ChatLeftHeader from './components/ChatLeftHeader/ChatLeftHeader';
import screens from './screens';
import theme from '../styles/theme';

const RootStack = createStackNavigator();

function RootNavigator() {
  return (
    <NavigationContainer theme={theme}>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <RootStack.Group>
          <RootStack.Screen
            name={screens.MainApp}
            component={AppTabNavigator}
          />
          <RootStack.Screen
            name={screens.CreatePostModal}
            component={CreatePostNavigator}
          />
          <RootStack.Screen
            name={screens.FiltersModal}
            component={FiltersNavigator}
          />
          <RootStack.Screen
            options={({ route }) => ({
              headerShown: true,
              presentation: 'card',
              headerTitleAlign: 'center',
              headerTitle: () => (
                <Text style={{ fontSize: 16 }}></Text>
              ),
              headerLeft: () => (
                <ChatLeftHeader chat={route.params.chat} />
              ),
            })}
            name={screens.Chat}
            component={ChatScreen}
          />
        </RootStack.Group>
        <RootStack.Group>
          <RootStack.Screen
            name={screens.Auth}
            component={AuthNavigator}
          />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default observer(RootNavigator);
