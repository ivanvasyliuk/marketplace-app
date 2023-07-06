import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { observer } from 'mobx-react';
import ProfileNavigator from './ProfileNavigator';
import BrowseNavigator from './BrowseNavigator';
import SavedNavigator from './SavedNavigator';
import InboxNavigator from './InboxNavigator';
import CreatePostNavigator from './CreatePostNavigator';
import TabBar from './components/MyTabBar';
import screens from './screens';

const Tab = createBottomTabNavigator();

function AppTabNavigator() {
  return (
    <>
      <Tab.Navigator
        tabBar={(props) => {
          return <TabBar props={props} />;
        }}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name={screens.BrowseTab}
          component={BrowseNavigator}
          options={{
            tabBarLabel: 'Browse',
          }}
        />
        <Tab.Screen
          name={screens.SavedTab}
          component={SavedNavigator}
          options={{
            tabBarLabel: 'Saved',
          }}
        />
        <Tab.Screen
          name={screens.CreatePostTab}
          component={CreatePostNavigator}
          options={{
            headerTitle: (props) => <Text>New Post</Text>,
            tabBarButton: (props) => true,
            tabBarLabel: () => null,
          }}
        />

        <Tab.Screen
          name={screens.InboxTab}
          component={InboxNavigator}
          options={{
            tabBarLabel: 'Inbox',
          }}
        />
        <Tab.Screen
          name={screens.ProfileTab}
          component={ProfileNavigator}
          options={{
            tabBarLabel: 'Profile',
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default observer(AppTabNavigator);
