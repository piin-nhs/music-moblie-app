<<<<<<< HEAD
import { Link } from "expo-router"; // 1. Import Link
=======
import { Link } from "expo-router";
>>>>>>> 5317a4f9973ec3a6921eddea47bc386c40ea1a1b
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>

<<<<<<< HEAD
      {/* 2. Sử dụng Link để điều hướng */}
      <Link href="/home/HomeScreen" style={{ marginTop: 20, color: 'blue', fontSize: 18 }}>
        Đi tới trang Home
      </Link>
       <Link href="/search/SearchScreen" style={{ marginTop: 20, color: 'blue', fontSize: 18 }}>
        Đi tới trang Search
      </Link>
=======
      {/* <Link
        href="/home/Home"
        style={{ marginTop: 20, color: "blue", fontSize: 18 }}
      >
        Đi tới trang Home
      </Link>
      <Link
        href="/search/SearchScreen"
        style={{ marginTop: 20, color: "blue", fontSize: 18 }}
      >
        Đi tới trang Search
      </Link> */}
      <Link href="/(onboarding)">heheh</Link>
>>>>>>> 5317a4f9973ec3a6921eddea47bc386c40ea1a1b
    </View>
  );
}