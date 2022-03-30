import * as React from "react";

//Import Navigation Container
import { NavigationContainer } from "@react-navigation/native"

// Import Stack Navigation
import { createStackNavigator } from "@react-navigation/stack"

// Import Theme Native Base
import { useTheme } from "native-base"

// Import Screen
import FormNativeBase from "./src/screens/formNativeBase";
import Hello from "./src/screens/hello";
import IncDec from "./src/screens/incDec";

// Create Stack Navigation
const Stack = createStackNavigator()

export default function Container() {
  // Init Theme
  const theme = useTheme()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Hello}
          options={{
            title: "This is Hello Screen"
          }}
        />
        <Stack.Screen
          name="IncDec"
          component={IncDec}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
