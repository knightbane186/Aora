import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import 'nativewind'; // Ensure this import for Tailwind utility classes

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-green-500">
      <Text className="text-3xl">Hello fromb but why</Text>
      <Link className="text-blue-500" href="/profile">Go to the profile</Link>
    </View>
  );
}













// import React from 'react';
// import { View, Text } from 'react-native';
// import { Link } from 'expo-router';
// import 'nativewind'; // Ensure this import for Tailwind utility classes

// export default function Index() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#32CD32' }}>
//       <Text style={{ fontSize: 24, color: '#000' }}>Hello fromb but why</Text>
//       <Link href="/profile">Go to the profile</Link>
//     </View>
//   );
// }













// import React from 'react';
// import { View, Text } from 'react-native';
// import { Link } from 'expo-router';
// import 'nativewind'; // Ensure this import for Tailwind utility classes

// export default function Index() {
//   return (
//     <View className="flex-1 justify-center items-center bg-green-500">
//       <Text className='text-3xl'>Hello fromb but why</Text>
//       <Link href="/profile">Go to the profile</Link>
//     </View>
//   );
// }