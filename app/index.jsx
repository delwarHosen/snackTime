import { useRouter } from 'expo-router';
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import entryImage from "./../assets/images/landingImage.png";
import logo from "./../assets/images/logo.png";
import "./global.css";

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView className={`flex-1 bg-[#171717]`}>
      <ScrollView contentContainerStyle={{
        flexGrow: 1,
        // justifyContent: "center",
        alignItems: "center",
        marginTop: 150
      }}>
        <View>
          <View className="">
            <Image source={logo} />
          </View>
          <View className=" mx-auto mt-16">
            <TouchableOpacity
              onPress={() => router.push("/signup")}
              className="bg-[#EA7D00] my-2 py-3 px-32 text-white rounded-lg">
              <Text className="font-semibold text-center text-[20px] text-white">Sign Up</Text>
            </TouchableOpacity>
            {/* guest mood */}
            <TouchableOpacity
              onPress={() => router.push("/home")}
              className="border border-[#EA7D00] my-3 py-3  text-white rounded-lg">
              <Text className="font-semibold text-center text-[20px] text-[#EA7D00]">Guest User</Text>
            </TouchableOpacity>
          </View>
          <View>
            <View className="flex items-center">
              <View className="flex-row items-center my-4">
                <View className="border-b-2 border-[#EA7D00] w-24" />
                <Text className="mx-2 text-base font-semibold text-white">
                  or
                </Text>
                <View className="border-b-2 border-[#EA7D00] w-24" />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => router.push("/signin")}
              className="flex flex-row  mt-2 p-4 text-white rounded-lg ">
              <Text className="font-semibold text-center text-[18px] text-white">Already have an account?</Text>
              <Text className=" font-semibold text-center text-[20px] underline ml-2 text-[#EA7D00]">Sigin In</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ width: '100%', height: 300, marginTop: 32 }}>
          <Image source={entryImage}
            style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
          />
        </View>
        <StatusBar barStyle={"light-content"} backgroundColor={"#000000"} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home