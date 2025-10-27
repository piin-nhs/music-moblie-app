<<<<<<< HEAD
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    // Dùng screenOptions để áp dụng cho tất cả các màn hình bên trong
    <Stack screenOptions={{ headerShown: false }}>
      
      {/* Các màn hình của bạn sẽ được tự động lồng vào đây */}
      {/* <Stack.Screen name="index" /> */}
      {/* <Stack.Screen name="Home" /> */}
      
    </Stack>
  );
}
=======
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false }}>
        {/* File app/index.tsx (file test của bạn) */}
        <Stack.Screen name="index" />

        {/* Đại diện cho TOÀN BỘ nhóm app/(onboarding) */}
        <Stack.Screen name="(onboarding)" />

        {/* Đại diện cho TOÀN BỘ nhóm app/(auths) */}
        <Stack.Screen name="(auths)" />

        {/* Bạn sẽ thêm 'home' ở đây NẾU bạn di chuyển app/home.tsx ra ngoài */}
        {/* <Stack.Screen name="home" /> */}
      </Stack>
    </>
  );
}
>>>>>>> 5317a4f9973ec3a6921eddea47bc386c40ea1a1b
