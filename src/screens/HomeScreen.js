import React from 'react';
import {
  View,
  Text,
  Linking,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Card,CardItem} from 'native-base';
import Carousel from 'react-native-snap-carousel';

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
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 5,
    padding: 20,
  },
});

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);
    this.state = {
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
          <CardItem header bordered style={{justifyContent: "center",alignItems: "center"}}>
            <Text style={{fontSize: 30}}>{item.title}</Text>
          </CardItem>
          <CardItem cardBody>
            <Image style={styles.tinyLogo} source={item.imageLink} />
          </CardItem>
        </Card>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View>
        <Text>Home Screen</Text>
        <Carousel
          layout={'default'}
          ref={ref => (this.carousel = ref)}
          data={this.state.carouselItems}
          sliderWidth={380}
          itemWidth={400}
          renderItem={this.renderItemSData}
          onSnapToItem={index => this.setState({activeIndex: index})}
        />
      </View>
    );
  }
}
export default HomeScreen;
