import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

function Item({ id, title, selected, onSelect }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={[
        styles.item,
        { backgroundColor: selected ? '#6e3b6e' : '#f9c2ff' },
      ]}
    >
 {/* <View style={styles.count}> */}
              <View style={styles.rowData}>
              <Text style={styles.titleConfirmed}>Karnataka</Text>
              </View>
              <View style={styles.rowData}>
              <Text style={styles.titleActive}>1273</Text>
              </View>
              <View style={styles.rowData}>
              <Text style={styles.titleRecovered}>4566</Text>
              </View>
              <View style={styles.rowData}>
              <Text style={styles.titleDeceased}>253</Text>
              </View>

            {/* </View> */}
      {/* <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{title}</Text> */}

    </TouchableOpacity>
  );
}

export default function StateList() {
  const [selected, setSelected] = React.useState(new Map());

  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected],
  );

  return (
      <>
<View style={styles.count}>
              <View style={styles.box}>
              <Text style={styles.listTitle}>Confirmed</Text>
              {/* <Text style={styles.countConfirmed}>81,997</Text> */}
              </View>
              <View style={styles.box}>
              <Text style={styles.listTitle}>Active</Text>
              {/* <Text style={styles.countActive}>51,374</Text> */}
              </View>
              <View style={styles.box}>
              <Text style={styles.listTitle}>Recovered</Text>
              {/* <Text style={styles.countRecovered}>27,969</Text> */}
              </View>
              <View style={styles.box}>
              <Text style={styles.listTitle}>Deceased</Text>
              {/* <Text style={styles.countDeceased}>2,649</Text> */}
              </View>

            </View>  
            <ScrollView style={styles.container}>
            <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            title={item.title}
            selected={!!selected.get(item.id)}
            onSelect={onSelect}
          />
    //     <>
    //     <Text>{item.title}</Text>
    //     <FlatList
    //     data={DATA}
    //     renderItem={({ item }) => (
    //       <Item
    //         id={item.id}
    //         title={item.title}
    //         selected={!!selected.get(item.id)}
    //         onSelect={onSelect}
    //       />
    //     )}
    //     keyExtractor={item => item.id}
    //     extraData={selected}
    //   />
    //   </>
        )}
        keyExtractor={item => item.id}
        extraData={selected}
      />
     </ScrollView>    

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 60,
    // flexDirection:'row',

  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    flex:1,
    flexDirection:'row',
    alignItems: 'stretch',

  },
  title: {
    fontSize: 20,
  },
  rowData:{
    // backgroundColor:'red',
    width:90,
    // height:50,
    padding:10
      },
      count: {
        marginTop: 270,
        // paddingHorizontal: 32,
        // backgroundColor: 'red',
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between',
        // position: 'absolute',
  
      },
      box:{
    backgroundColor:'red',
    width:100,
    // height:0
      },
      listTitle:{
        textAlign:'center',
    }

});