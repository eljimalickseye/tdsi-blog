import React, { useState } from "react";
import { FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const DATA = [
  {
    id: "1",
    title: "Securité",
  },
  {
    id: "2",
    title: "Dev",
  },
  {
    id: "3",
    title: "Systeme",
  },
  {
    id: "4",
    title: "Réseau",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor, border, borderColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor, border, borderColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "black" : "white";
    const color = item.id === selectedId ? 'white' : 'black';
    const borderWidth = item.id === selectedId ? 0 : 0.5;
    const borderColor = item.id === selectedId ? "grey" : "grey";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
        border={{borderWidth}}
        borderColor={{borderColor}}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "blue",
    // width: wp("100%") - 15,
    // height: hp("100%")-775,
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },
  item: {
    borderRadius: 30,
    width: wp("22%"),
    justifyContent: "center",
    alignItems: "center"
    // padding: 20,
    // marginVertical: 8,
    // marginHorizontal: 16,
  },
  title: {
    fontSize: 13,
    fontWeight: "bold",
  },
});

export default App;