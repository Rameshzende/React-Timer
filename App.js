// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

import React, { Children } from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableOpacity, } from 'react-native';
import {Header,LearnMoreLinks,Colors,DebugInstructions,ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import moment from 'moment';

function RoundButton ({title, color, backgroundolor, onPress, disabled, activeOpacity}) {
  return (
    <TouchableOpacity
    
    disabled = {disabled}
    
    onPress = {onPress}  

    activeOpacity = {activeOpacity}

    
    style = { [ styles.button , {backgroundColor : backgroundolor} ]}>
      <View style = { styles.buttonBorder }>
          <Text  style={ [ styles.buttonTitle ,{ color }]}> { title } </Text>
      </View>
    
    </TouchableOpacity>
  )
}
const initialState = {
    count : 60,
    timer : null,
    buttonDisabled : false,
    ActiveOpacity : 0,
    color: 'white',
    backgroundColor: '#4775d1' 
} 
export default class App extends React.Component { 
  
  constructor(props) {
  super(props)
     this.state = initialState
}

startTimer = () => {
  let timer = setInterval(this.mangetimer, 1000);
      this.setState({timer: timer});
} 

mangetimer = () => {
  let states = this.state
  if(states.count === 0 ) {
        clearInterval(this.state.timer)
        this.setState(initialState)
  }else {
    this.setState({
      count: this.state.count - 1,
      buttonDisabled: true,
      ActiveOpacity: 1,
      color: 'black',
      backgroundColor :'#999999'
  })
  }
}

render() {
  
    return (
    <View style={styles.container}>
       <View>
            <Text style = {styles.timer}  >  {this.state.count} </Text>
      </View>
      <View style= {styles.buttonRow} > 
              
    <RoundButton 
    title = 'Start' 
    color = {this.state.color}    
    backgroundolor = {this.state.backgroundColor} 
    onPress = {this.startTimer}  
    disabled = {this.state.buttonDisabled} 
    activeOpacity = {this.state.ActiveOpacity}/>
        
      </View> 
      {/* <View style= {styles.buttonRow} >
             <TouchableOpacity activeOpacity = '0'>
                   <Text style = {styles.timer1} > My First App</Text>
             </TouchableOpacity> 
      </View> */}
    </View>
      )
  }
}

const styles = StyleSheet.create( {
    container : {
   flex: 1,
   backgroundColor: '#0D0D0D',
   alignItems: 'center',
   justifyContent: 'center',
   paddingHorizontal: 60,
  }, 
  timer: {
    color: '#FFFFFF',
    fontSize: 76,
  }, 
  timer1 : {
    color: '#FFFFFF',
    fontSize: 30,
  },
  button : {
    width: 80,
    height: 80,
    borderRadius: 40, 
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  buttonTitle: {
    fontSize: 18,
  },
  buttonBorder : {
    width: 76,
    height: 76,
    borderRadius: 38, 
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
  },
  buttonRow : {
    marginTop: 80,
  }
})


// import React, { Children } from 'react';
// import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableOpacity, Button, BackHandler, ImageBackground, } from 'react-native';
// import {Header,LearnMoreLinks,Colors,DebugInstructions,ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
// import moment from 'moment';

// export default class App extends React.Component {
 
// constructor (props) {
//     super(props) 
//     this.state = {
//       count: 60,
//       buttonDisble : false
//     }
//   }

//   // onTimer = () => {
//   //   const Timer = setInterval(this.managerTimer, 1)
//   //   this.setState({ Timer
//   //   })
//   // }

//   // managerTimer = () => {
     
//   //   if(this.state.count == 0 ) {
//   //     clearInterval(this.Timer)
//   //   } else {
//   //     this.setState({
//   //       count: this.state.count -1 
//   //     })
//   //   }
//   // }

//   // onReset = () => {
//   //  clearInterval(this.Timer)
//   //   if(this.state.count == 0 ) {
//   //     clearInterval(this.Timer)
//   //     this.setState({
//   //       count: 60 
//   //     })
//   //   } else {
//   //     this.setState({
//   //       count: count 
//   //     })
//   //   }
//   // }
 
// render() {
//     return (
//       <View style = {styles.container} > 
//            <Text style = {styles.ButtonCss}> {this.state.count} </Text>
//              <TouchableOpacity disabled = 'true' >
//                  <Text style = {styles.TextCss}> Start </Text>
//              </TouchableOpacity>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 60,
//   },
//   ButtonCss: {
//     fontSize: 50,
//   },
//   TextCss: {
//     fontSize: 30,
//     width: 170,
//     marginTop: 30,
//     height: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#32CD32',
//     textAlign: 'center'
//   }
// })