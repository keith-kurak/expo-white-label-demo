import { StyleSheet, Image } from "react-native";
import { Text, View, Button } from "../components/Themed";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Strings from "../constants/Strings";
import Colors from "../constants/Colors";

export default function SignInScreen() {
  const router = useRouter();

  const { top, bottom } = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        { paddingTop: top + 40, backgroundColor: Colors.brand },
      ]}
    >
      <Text style={styles.title}>{Strings.appFullName}</Text>
      <Image
        resizeMode="contain"
        style={{ width: "100%", flex: 1 }}
        source={require("../current-brand/runtime-assets/welcome.jpeg")}
      />
      <Button
        style={{ marginHorizontal: 20, marginBottom: bottom, marginTop: 20 }}
        onPress={() => router.replace("/home/(tabs)/")}
        title="Login"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 20,
    textAlign: "center",
    color: Colors.dark.text,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
