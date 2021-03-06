import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Search({ setCity }) {
  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: 20,
      }}
    >
      <GooglePlacesAutocomplete
        query={{ key: "AIzaSyCPas8R0PAMqU2A_IXIyU8-CePI2oKQLzQ" }}
        onPress={(data, details = null) => {
          setCity(data.description.split(",")[0]);
        }}
        placeholder="Search"
        styles={{
          textInputContainer: {
            flexDirection: "row",
            backgroundColor: "#eee",
            borderRadius: 50,
            alignItems: "center",
            marginRight: 10,
          },
          textInput: {
            fontWeight: "600",
            backgroundColor: "#eee",
            borderRadius: 20,
            marginTop: 5,
          },
        }}
        renderLeftButton={() => (
          <View
            style={{
              marginLeft: 10,
            }}
          >
            <Ionicons size={20} name="location" />
          </View>
        )}
        // renderRightButton={() => (
        //   <TouchableOpacity
        //     style={{
        //       flexDirection: "row",
        //       alignItems: "center",
        //       backgroundColor: "white",
        //       padding: 8,
        //       borderRadius: 16,
        //       marginHorizontal: 10,
        //     }}
        //   >
        //     <Ionicons size={15} name="time" />
        //     <Text>Search</Text>
        //   </TouchableOpacity>
        // )}
      />
    </View>
  );
}
