import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { styles } from "@/styles/_join";
import { FACEBOOKLOGO, GOOGLELOGO, HEROLOGOGREEN } from "@/constants";
import { useRouter } from "expo-router";

export default function Index() {
	const router = useRouter();

	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.container}>
				<View style={styles.iconsection}>
					<Ionicons
						name="arrow-back"
						size={25}
						onPress={() => router.navigate("/")}
					/>
					<Image source={HEROLOGOGREEN} />
				</View>
				<Text style={styles.titleText}>Sign in to your</Text>
				<Text style={styles.titleText}>Account</Text>
				<Text style={styles.subText}>
					Enter your email and password to sign in.
				</Text>
				<View style={styles.formGroup}>
					<View>
						<Text style={styles.formLabel}>Email</Text>
						<TextInput
							keyboardType="email-address"
							style={styles.formControl}
						/>
					</View>
					<View style={{ marginTop: 20 }}>
						<Text style={styles.formLabel}>Password</Text>
						<View style={styles.formPasswordControl}>
							<TextInput style={styles.passwordControl} />
							<FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
						</View>
					</View>
					<Text style={styles.forgotPasswordText}>Forgot password?</Text>
				</View>
				<TouchableOpacity style={styles.primaryButton}>
					<Text style={styles.buttonText}>Sign in</Text>
				</TouchableOpacity>
				<View style={styles.dividerGroup}>
					<View style={styles.divider}></View>
					<Text style={styles.dividerText}>OR</Text>
					<View style={styles.divider}></View>
				</View>
				<View style={styles.secondaryButtonGroup}>
					<TouchableOpacity style={styles.secondaryButton}>
						<View
							style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
						>
							<Image source={GOOGLELOGO} />
							<Text style={styles.signupTitleText}>Continue with Google</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={styles.secondaryButton}>
						<View
							style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
						>
							<Image source={FACEBOOKLOGO} />
							<Text style={styles.signupTitleText}>Continue with Facebook</Text>
						</View>
					</TouchableOpacity>
				</View>
				<View style={styles.signupgroup}>
					<Text style={styles.signupTitleText}>
						Don&apos;t have an account?
					</Text>
					<Text style={styles.signupSubTitleText}>Join now</Text>
				</View>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}
