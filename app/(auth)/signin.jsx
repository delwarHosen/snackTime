import { useRouter } from 'expo-router';
import { Formik } from 'formik';
import { Image, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import validationSchema from '../../utils/authSchema';
import entryImage from "./../../assets/images/landingImage.png";
import logo from "./../../assets/images/logo.png";

export default function SignIn() {
    const router = useRouter();

    const handleSignIn = () => {
        console.log("Hello")
    }

    return (
        <SafeAreaView className={`flex-1 bg-[#171717]`}>
            <ScrollView contentContainerStyle={{
                flexGrow: 1,
                alignItems: "center",
                marginTop: 150
            }}>
                <View>
                    <View className="">
                        <Image source={logo} />
                        <Text className="text-white text-center mt-2">
                            Les's get you start
                        </Text>
                    </View>
                </View>
                {/* Form */}
                <View className="w-5/6 mt-16">
                    <Formik initialValues={{ email: "", password: "" }}
                        validationSchema={validationSchema}
                        onSubmit={handleSignIn}>
                        {(
                            { values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting, }) => (
                            <>
                                <View className="w-full">
                                    <Text className="text-[#EA7D00] mb-2">Email</Text>
                                    <TextInput
                                        className="h-10 border border-white rounded px-2 text-white"
                                        keyboardType='email-address' onChangeText={handleChange("email")} value={values.email} onBlur={handleBlur("email")} />
                                </View>
                                {errors.email && touched.email && <Text className="text-red-500 mb-2 text-xs">{errors.email}</Text>}

                                {/* Password */}
                                <View className="w-full mt-2">
                                    <Text className="text-[#EA7D00] mb-2">Password</Text>
                                    <TextInput
                                        className="h-10 border border-white rounded px-2 text-white"
                                        secureTextEntry onChangeText={handleChange("password")} value={values.password} onBlur={handleBlur("password")} />
                                </View>
                                {errors.password && touched.password && <Text className="text-red-500 mb-2 text-xs">{errors.password}</Text>}
                                <TouchableOpacity
                                    onPress={handleSubmit}
                                    className="bg-[#EA7D00] my-2 p-2 text-white rounded mt-6">
                                    <Text className="font-semibold text-center text-[20px] text-white">Sign In</Text>
                                </TouchableOpacity>
                            </>
                        )}
                    </Formik>
                    <View className="mx-auto mt-6">
                        <TouchableOpacity
                            onPress={() => router.push("/signup")}
                            className="flex flex-row mt-5 text-white rounded-lg">
                            <Text className="font-semibold text-center text-[18px] text-white">New User?</Text>
                            <Text className=" font-semibold text-center text-[20px] underline ml-2 text-[#EA7D00]">Sigin Up</Text>
                        </TouchableOpacity>
                    </View>


                    <View>
                        <View className="flex items-center mt-3">
                            <View className="flex-row items-center my-4">
                                <View className="border-b-2 border-[#EA7D00] w-24" />
                                <Text className="mx-2 text-base font-semibold text-white">
                                    or
                                </Text>
                                <View className="border-b-2 border-[#EA7D00] w-24" />
                            </View>
                        </View>
                        <View className="mx-auto mt-5">
                            <TouchableOpacity
                                onPress={() => router.push("/home")}
                                className="flex flex-row text-white rounded-lg ">
                                <Text className="font-semibold  text-[18px] text-white">Be A </Text>
                                <Text className=" font-semibold text-[20px] underline ml-2 text-[#EA7D00]">Guest User</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                </View>

                <View style={{ width: '100%', height: 220, }}>
                    <Image source={entryImage}
                        style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                    />
                </View>
                <View className="w-full">

                </View>
                <StatusBar barStyle={"light-content"} backgroundColor={"#000000"} />
            </ScrollView>
        </SafeAreaView>
    )
}