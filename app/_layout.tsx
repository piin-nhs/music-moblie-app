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