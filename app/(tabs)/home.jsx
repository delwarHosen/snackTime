// import { BlurView } from 'expo-blur';
import { BlurView } from 'expo-blur';
import { FlatList, Image, ImageBackground, Platform, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import restaurants from '../../store/restaurant';
import banner from "./../../assets/images/banner.png";
import logo from "./../../assets/images/logo.png";

export default function Home() {

  const renderItem = ({ item }) => (
    <TouchableOpacity className="bg-gray-800 flex justify-center mx-3 my-3 rounded">
      <Image
        source={{ uri: item.image }}
        resizeMode="cover"
        style={{
          width: 300,
          height: 120,
          borderRadius: 10,
          backgroundColor: "lightgray",
          marginTop: 16,
          marginLeft: 16,
          marginRight: 16
        }}
      />

      <View className="px-5 mb-3">
        <Text className="text-white mb-2 mt-3 text-lg font-bold">{item.name}</Text>
        <Text className="text-white mb-2 text-base">{item.address}</Text>
        <Text className="text-white mb-2 text-base">Open{item.opening} - Close: {item.closing}</Text>
      </View>

    </TouchableOpacity>

  );



  return (
    <SafeAreaView style={{ backgroundColor: "#171717" }}>
      <View className="flex items-center">
        <View className="bg-[#5f5f5f] w-11/12 rounded-lg shadow-lg justify-between items-center flex flex-row p-2 m-6">

          <View className="flex flex-row">
            <Text className={`text-base h-10 pt-${Platform.OS === "ios" ? 8 : 6.5} align-middle text-white text-[16px]`}>
              {" "}
              Welcome to {" "}</Text>
            <Image source={logo} className="h-10 w-28 " resizeMode='contain' />
          </View>

        </View>
      </View>

      <FlatList
        data={["a"]}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 120,
        }}

        ListHeaderComponent={
          <ImageBackground
            resizeMode="cover"
            style={{ width: "100%", height: 200 }}
            source={banner}
            className="bg-black"
          >
            <BlurView
              intensity={Platform.OS === "android" ? 100 : 30}
              tint="dark"
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
                Snack Time with your loved ones
              </Text>
            </BlurView>
          </ImageBackground>
        }
        stickyHeaderIndices={[0]}
        renderItem={({ item }) => (
          <View style={{ height: "" }}
            stickyHeaderIndices={[0]}
          >

            <View>
              <Text className="text-3xl font-bold text-white ml-4 my-4">Special Discount %</Text>
            </View>

            <FlatList
              data={restaurants}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: "" }}
            />

            <View>
              <Text className="text-3xl font-bold text-[#EA7D00] ml-4 mt-4">Our Restaurent</Text>
            </View>

            <FlatList
              data={restaurants}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: "" }}
            />
          </View>
        )}
      />



    </SafeAreaView>
  )
}