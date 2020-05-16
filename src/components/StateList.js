// import React from 'react';
// import {
//   SafeAreaView,
//   TouchableOpacity,
//   FlatList,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];

// function Item({ id, title, selected, onSelect }) {
//   return (
//     <TouchableOpacity
//       onPress={() => onSelect(id)}
//       style={[
//         styles.item,
//         { backgroundColor: selected ? '#6e3b6e' : '#C0C0C0' },
//       ]}
//     >
//  {/* <View style={styles.count}> */}
//               <View style={styles.rowData}>
//               <Text style={styles.titleConfirmed}>Karnataka</Text>
//               </View>
//               <View style={styles.rowData}>
//               <Text style={styles.titleActive}>1273</Text>
//               </View>
//               <View style={styles.rowData}>
//               <Text style={styles.titleRecovered}>4566</Text>
//               </View>
//               <View style={styles.rowData}>
//               <Text style={styles.titleDeceased}>253</Text>
//               </View>

//             {/* </View> */}
//       {/* <Text style={styles.title}>{title}</Text>
//       <Text style={styles.title}>{title}</Text>
//       <Text style={styles.title}>{title}</Text> */}

//     </TouchableOpacity>
//   );
// }

// export default function StateList() {
//   const [selected, setSelected] = React.useState(new Map());

//   const onSelect = React.useCallback(
//     id => {
//       const newSelected = new Map(selected);
//       newSelected.set(id, !selected.get(id));

//       setSelected(newSelected);
//     },
//     [selected],
//   );

//   return (
//     <ScrollView style={styles.container} >
//       <View>
//     <FlatList
// data={DATA}
// renderItem={({ item }) => (
//   <Item
//     id={item.id}
//     title={item.title}
//     selected={!!selected.get(item.id)}
//     onSelect={onSelect}
//   />

// )}
// keyExtractor={item => item.id}
// extraData={selected}
// />
// </View>
// </ScrollView> 

// // {/* <View style={styles.count}>
// //               <View style={styles.box}>
// //               <Text style={styles.listTitle}>State</Text>
// //               </View>
// //               <View style={styles.box}>
// //               <Text style={styles.listTitle}>Active</Text>
// //               </View>
// //               <View style={styles.box}>
// //               <Text style={styles.listTitle}>Recovered</Text>
// //               </View>
// //               <View style={styles.box}>
// //               <Text style={styles.listTitle}>Deceased</Text>
// //               </View>

// //             </View>   */}
    

    
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     paddingTop: 120,
//     // flexDirection:'row',

//   },
//   item: {
//     backgroundColor: '#C0C0C0',
//     padding: 5,
//     marginVertical: 8,
//     marginHorizontal: 16,
//     flex:1,
//     flexDirection:'row',
//     alignItems: 'stretch',

//   },
//   title: {
//     fontSize: 20,
//   },
//   rowData:{
//     // backgroundColor:'red',
//     width:90,
//     // height:50,
//     padding:10
//       },
//       count: {
//         marginTop: 270,
//         // paddingHorizontal: 32,
//         // backgroundColor: 'red',
//         flex:1,
//         flexDirection:'row',
//         justifyContent: 'space-between',
//         // position: 'absolute',
  
//       },
//       box:{
//     backgroundColor:'red',
//     width:100,
//     // height:0
//       },
//       listTitle:{
//         textAlign:'center',
//     }

// });


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

const DATA =[
  {
    "loc": "Andaman and Nicobar Islands",
    "confirmedCasesIndian": 33,
    "discharged": 33,
    "deaths": 0,
    "confirmedCasesForeign": 0,
    "totalConfirmed": 33
  },
  {
    "loc": "Andhra Pradesh",
    "confirmedCasesIndian": 2307,
    "discharged": 1252,
    "deaths": 48,
    "confirmedCasesForeign": 0,
    "totalConfirmed": 2307
  },
  {
    "loc": "Arunachal Pradesh",
    "confirmedCasesIndian": 1,
    "discharged": 1,
    "deaths": 0,
    "confirmedCasesForeign": 0,
    "totalConfirmed": 1
  },
  {
    "loc": "Assam",
    "confirmedCasesIndian": 90,
    "discharged": 41,
    "deaths": 2,
    "confirmedCasesForeign": 0,
    "totalConfirmed": 90
  },
  {
    "loc": "Bihar",
    "confirmedCasesIndian": 1018,
    "discharged": 438,
    "deaths": 7,
    "confirmedCasesForeign": 0,
    "totalConfirmed": 1018
  },
  {
    "loc": "Chandigarh",
    "confirmedCasesIndian": 191,
    "discharged": 37,
    "deaths": 3,
    "confirmedCasesForeign": 0,
    "totalConfirmed": 191
  },
  {
    "loc": "Chhattisgarh",
    "confirmedCasesIndian": 66,
    "discharged": 56,
    "deaths": 0,
    "confirmedCasesForeign": 0,
    "totalConfirmed": 66
  },
  {
    "loc": "Dadar Nagar Haveli",
    "confirmedCasesIndian": 1,
    "discharged": 0,
    "deaths": 0,
    "confirmedCasesForeign": 0,
    "totalConfirmed": 1
  },
  {
    "loc": "Delhi",
    "confirmedCasesIndian": 8894,
    "discharged": 3518,
    "deaths": 123,
    "confirmedCasesForeign": 1,
    "totalConfirmed": 8895
  },
  {
    "loc": "Goa",
    "confirmedCasesIndian": 14,
    "discharged": 7,
    "deaths": 0,
    "confirmedCasesForeign": 1,
    "totalConfirmed": 15
  },
  {
    "loc": "Gujarat",
    "confirmedCasesIndian": 9930,
    "discharged": 4035,
    "deaths": 606,
    "confirmedCasesForeign": 1,
    "totalConfirmed": 9931
  },
  {
    "loc": "Haryana",
    "confirmedCasesIndian": 804,
    "discharged": 439,
    "deaths": 11,
    "confirmedCasesForeign": 14,
    "totalConfirmed": 818
  },]

function Item({ id, loc,confirmed,discharged,deaths, selected, onSelect }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={[
        styles.item,
        { backgroundColor: selected ? '#6e3b6e' : '#C0C0C0' },
      ]}
    >
 {/* <View style={styles.count}> */}
              <View style={styles.rowData}>
              <Text style={styles.titleConfirmed}>{loc}</Text>
              </View>
              <View style={styles.rowData}>
              <Text style={styles.titleActive}>{confirmed}</Text>
              </View>
              <View style={styles.rowData}>
              <Text style={styles.titleRecovered}>{discharged}</Text>
              </View>
              <View style={styles.rowData}>
              <Text style={styles.titleDeceased}>{deaths}</Text>
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
<SafeAreaView style={styles.container}>
  {/* <View style={styles.count}>
            <View style={styles.box}>
                 <Text style={styles.titleConfirmed}>Confirmed</Text>
                 </View>
                 <View style={styles.box}>
                 <Text style={styles.titleActive}>Active</Text>
                 </View>
                 <View style={styles.box}>
                 <Text style={styles.titleRecovered}>Recovered</Text>
                 </View>
                 <View style={styles.box}>
                 <Text style={styles.titleDeceased}>Deceased</Text>
                 </View>
   
               </View> */}
            <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            loc={item.loc}
            confirmed={item.totalConfirmed}
            discharged={item.discharged}
            deaths={item.deaths}
            selected={!!selected.get(item.id)}
            onSelect={onSelect}
          />

        )}
        keyExtractor={item => item.id}
        extraData={selected}
      />
</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3.5,
    // marginTop: 50,
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
    // backgroundColor:'red',
    width:150,
    // height:0
      },
      listTitle:{
        textAlign:'center',
    }

});