import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from './home/index'
import { Results } from './results/index'

import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export function Routes() {
    return(
        <Tab.Navigator>
            <Tab.Screen
                name='home'
                component={Home}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if(focused){
                            return <Ionicons size={size} color={color} name='home' />
                        }
                        return <Ionicons size={size} color={color} name='home-outline' />
                    }
                }}
            />

            <Tab.Screen
                name='results'
                component={Results}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if(focused){
                            return <Ionicons size={size} color={color} name='bookmark' />
                        }
                        return <Ionicons size={size} color={color} name='bookmark-outline' />
                    }
                }}
            />
        </Tab.Navigator>
    )
}