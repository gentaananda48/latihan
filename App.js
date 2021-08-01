// //Import Session
// import React, {Component} from 'react';
// import {
//   Text,
//   View,
//   Image,
//   TextInput,
//   StyleSheet,
//   ScrollView,
// } from 'react-native';
// import gambar from './src/asset/image/1.jpg';

// //component yang nantinya akan di export
// const App = () => {
//   return <Konten />;
// };

// // Component content
// const Konten = () => {
//   return (
//     <ScrollView>
//       <View style={{marginLeft: 10}}>
//         <View
//           style={{
//             width: 63,
//             height: 63,
//             borderRadius: 63,
//             backgroundColor: '#006699',
//             margin: 10,
//             marginTop: 20,
//           }}
//         />
//         <Text>Hallo Guyss!!!</Text>
//         <Home />
//         <Gambar />

//         <TextInput style={style.input} placeholder="Input text here" />
//         <Box />
//         <OnSide />
//         <View
//           style={{
//             padding: 12,
//             marginTop: 15,
//             backgroundColor: '#F2F2F2',
//             width: 212,
//           }}>
//           <Image
//             source={gambar}
//             style={{width: 188, height: 107, borderRadius}}
//           />
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// // Component text yang akan dimasukan ke component App
// const Home = () => {
//   return <Text>ini React pertama aing!!</Text>;
// };

// // Component Gambar yang akan di masukan ke Component App
// const Gambar = () => {
//   return (
//     <Image
//       source={{uri: 'https://placeimg.com/640/640/tech'}}
//       style={{width: 50, height: 50, borderRadius: 50, marginTop: 15}}
//     />
//   );
// };

// // Membuat component dari class
// class Box extends Component {
//   render() {
//     return <Text style={{marginTop: 15}}>Component dari Class</Text>;
//   }
// }

// // Membuat Class gambar
// class OnSide extends Component {
//   render() {
//     return (
//       <View>
//         <Image
//           source={{uri: 'https://placeimg.com/640/640/nature'}}
//           style={{width: 50, height: 50, borderRadius: 15, marginTop: 15}}
//         />
//         <Text style={{color: 'grey', fontSize: 15}}>
//           Ini adalah gambar dari component class
//         </Text>
//       </View>
//     );
//   }
// }

// // Style untuk StyleSheet
// const style = StyleSheet.create({
//   input: {
//     backgroundColor: '#ffffff',
//     borderWidth: 1,
//     borderRadius: 10,
//     borderColor: 'grey',
//     marginTop: 15,
//     //textAlign: 'center',
//     width: '60%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     alignContent: 'center',
//   },
// });

// //Export session
// export default App;

// import React from 'react';
// import {StatusBar} from 'react-native';

// const App = () => {
//   return (
//     <>
//       <StatusBar barStyle="light-content" />
//       {/* Todo: Navigation */}
//     </>
//   );
// };

// export default App;

import React from 'react';
import {View, Text, Image, StyleSheet, TextInput, Button} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        backgroundColor: '#391C62',
        height: '100%',
        width: '100%',
      }}>
      <View style={{margin: 15}}>
        <View>
          <View style={style.logo1}></View>

          <View style={style.logo2}></View>

          <View style={style.logo3}></View>
        </View>

        <View
          style={{
            justifyContent: 'flex-start',
            position: 'absolute',
            marginTop: 148,
          }}>
          <Text style={style.header1}>
            A new way to manage<Text style={style.header2}> your work!</Text>
          </Text>
        </View>

        <View>
          <Image
            source={require('./src/asset/image/main.png')}
            style={{width: 363, marginTop: 330, marginBottom: 25}}
          />
        </View>
        <View>
          <Text style={style.text1}>Plan. Organize. Track</Text>
          <Text style={style.text1}>Get your invite</Text>
        </View>
        <View>
          <TextInput
            style={style.input1}
            placeholder="Manage your email address">
            <View></View>
          </TextInput>
        </View>
      </View>
    </View>
  );
};

// Style for StyleSheet

const style = StyleSheet.create({
  logo1: {
    backgroundColor: '#FF6D3D',
    position: 'absolute',
    width: 13,
    height: 37,
    marginTop: 43,
    marginLeft: 15,
    borderRadius: 50,
    transform: [{rotate: '90deg'}],
  },
  logo2: {
    backgroundColor: '#9A66BA',
    position: 'absolute',
    width: 13,
    height: 26,
    marginTop: 65,
    marginLeft: 15,
    borderRadius: 50,
    transform: [{rotate: '90deg'}],
  },
  logo3: {
    backgroundColor: '#1ED3E0',
    position: 'absolute',
    width: 13,
    height: 37,
    marginTop: 77,
    marginLeft: 15,
    borderRadius: 50,
    transform: [{rotate: '90deg'}],
  },
  header1: {
    fontSize: 48,
    fontFamily: 'Roboto',
    lineHeight: 56,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  header2: {
    fontSize: 48,
    fontFamily: 'Roboto',
    lineHeight: 56,
    fontWeight: 'bold',
    color: '#ff6d3d',
  },
  text1: {
    fontSize: 20,
    fontFamily: 'Roboto',
    lineHeight: 23,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  input1: {
    borderRadius: 50,
    marginTop: 29,
    borderWidth: 1,
    borderColor: '#ffffff',
    height: 50,
    paddingLeft: 25,
    paddingRight: 25,
  },
  button1: {
    width: 25,
    borderRadius: 25,
    color: '#FFFFFF',
  },
});

export default App;
