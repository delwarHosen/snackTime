import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import "./global.css";

const Home = () => {
  const router = useRouter();
  return (
    <View className="flex-1 justify-center items-center m-4">
      <Text className="text-2xl font-extrabold ">Home snack time</Text>
      <TouchableOpacity onPress={() => router.push("/home")}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home