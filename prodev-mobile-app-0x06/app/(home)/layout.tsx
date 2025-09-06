import {
	AntDesign,
	EvilIcons,
	Feather,
	FontAwesome,
	Ionicons,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";
import "../../styles/global.css";

const TheHomeRootLayout = () => {
	return (
		<Tabs
			screenOptions={{ tabBarActiveTintColor: "#34967c", headerShown: false }}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ color }) => (
						<AntDesign name="home" size={24} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="search"
				options={{
					title: "Search",
					headerShown: false,
					tabBarIcon: ({ color }) => (
						<Feather name="search" size={24} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="saved"
				options={{
					title: "Saved",
					headerShown: false,
					tabBarIcon: ({ color }) => (
						<EvilIcons name="heart" size={24} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="inbox"
				options={{
					title: "Inbox",
					headerShown: false,
					tabBarIcon: ({ color }) => (
						<Ionicons name="chatbubbles-outline" size={24} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					title: "Profile",
					tabBarIcon: ({ color }) => (
						<FontAwesome name="user-o" size={24} color={`black`} />
					),
				}}
			/>
		</Tabs>
	);
};

export default TheHomeRootLayout;
