import React from 'react';
import {
    View,
    Text,
    Linking,
    Image,
    StyleSheet,
    TouchableOpacity,
    FlatList
  } from 'react-native';import OverallCount from '../components/OverallCount'
import { ScrollView } from 'react-native-gesture-handler';
import StateList from '../components/StateList'
import Icon from 'react-native-vector-icons/Ionicons'
import {Card,CardItem} from 'native-base';
import Carousel from 'react-native-snap-carousel';
import axios from 'axios'
class HomeScreen extends React.Component {
  componentDidMount() {

  axios.get('https://api.rootnet.in/covid19-in/stats/latest')
  .then(function (response) {
    // handle success
    console.warn('res',response.data.data.regional);
    this.setState({resp:response.data.data}) 
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

  }
    static navigationOptions = {
        title: 'Home',
      };
      constructor(props) {
        super(props);
        this.state = {
          resp:{},
          activeIndex: 0,
          carouselItems: [
            {
              title: 'About CORONA',
              URL: 'https://www.who.int/health-topics/coronavirus#tab=tab_3',
              imageLink: require('../assets/virus.jpeg'),
            },
            {
              title: 'Smart Mask',
              imageLink: require('../assets/mask.jpeg'),
              URL: "https://docs.zerynth.com/latest/official/board.zerynth.nodemcu_esp32/docs/index.html"
            },
            {
              title: 'Safety Measures ',
              imageLink: require('../assets/safety.jpeg'),
              URL:
                'https://www.redcross.org/about-us/news-and-events/news/2020/coronavirus-safety-and-readiness-tips-for-you.html',
            },
          ],
        };
      }
      renderItemSData({item, index}) {
        return (
          <TouchableOpacity
            onPress={() => Linking.openURL(item.URL)}
            style={styles.viewStyling}>
            <Card>
              {/* <CardItem header bordered style={{justifyContent: "center",alignItems: "center"}}>
                <Text style={{fontSize: 30}}>{item.title}</Text>
              </CardItem> */}
              <CardItem >
                <Image style={styles.tinyLogo} source={item.imageLink} />
              </CardItem>
            </Card>
          </TouchableOpacity>
        );
      }
    
    render(){
        return(

    <View style={{flex:1 ,flexDirection:'column'}}>
    <Carousel
          layout={'default'}
          ref={ref => (this.carousel = ref)}
          data={this.state.carouselItems}
          sliderWidth={380}
          itemWidth={400}
          renderItem={this.renderItemSData}
          onSnapToItem={index => this.setState({activeIndex: index})}
        /> 
                     <OverallCount/>
                     <View style={styles.count}>
              <View style={styles.box}>
              <Text style={styles.title}>State</Text>
              </View>
              <View style={styles.box}>
              <Text style={styles.title}>Active</Text>
              </View>
              <View style={styles.box}>
              <Text style={styles.title}>Recovered</Text>
              </View>
              <View style={styles.box}>
              <Text style={styles.title}>Deceased</Text>
              </View>

            </View>                 
                   <StateList  data={this.state.resp}/>

    </View>
    
        )
    }
};
export default HomeScreen;
const styles = StyleSheet.create({
    tinyLogo: {
      // width: 100,
      width: null,
      height: 200,
      // marginLeft: 50,
      flex: 1
    },
    viewStyling: {
      backgroundColor:"#FFFFFF",
    //   borderRadius: 5,
    //   marginTop: 20,
    //   marginLeft:25,
      padding: 10,
    },
    count: {
        paddingTop: 300,
        // paddingHorizontal: 32,
      //   backgroundColor: Colors.lighter,
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between',
        position: 'absolute',
  
      },
      box:{
        // backgroundColor:'red',
        // width:100,
        paddingLeft:40
        // height:100
          },
          title:{
              textAlign:'left'
          }
  });