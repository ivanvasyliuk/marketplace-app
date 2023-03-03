import React from "react";
import { BottomTabBar } from "@react-navigation/bottom-tabs";
import NavigationService from "../../services/NavigationService";
import screens from "../screens";

function TabBarBottomCustom({ ...props }) {
  function customJumpToIndex(route) {
    if (route.route.key === "TabCreateItem") {
      NavigationService.navigate({
        routeName: screens.CreatePostModal,
      });
    } else {
      props.jumpTo(route.route.key);
    }
  }
  return <BottomTabBar {...props} onTabPrees={customJumpToIndex} />;
}
export default TabBarBottomCustom;
