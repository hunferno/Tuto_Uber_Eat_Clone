import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

export default function ViewCart() {
  const items = useSelector((state) => state.cartReducer.selectedItems.items);
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  console.log(totalUSD);

  return (
    <>
      {total ? (
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            bottom: "5%",
            zIndex: 999,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                alignItems: "center",
                backgroundColor: "black",
                padding: 15,
                flexDirection: "row",
                justifyContent: "flex-end",
                width: 300,
                borderRadius: 30,
                position: "relative",
              }}
            >
              <Text style={{ color: "white", fontSize: 20, marginRight: 30 }}>
                VIEWCART
              </Text>
              <Text style={{ color: "white", fontSize: 20, marginRight: 20 }}>
                {total}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
