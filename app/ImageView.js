// MapView.js
import React from 'react';
import {
    requireNativeComponent,
    NativeModules,
    View,
    StatusBar,
    UIManager,
    Dimensions,
    StyleSheet
} from 'react-native';

//console.log(UIManager);
//console.log(NativeModules);

//var imageViewConstants = UIManager.imageView;
var imageViewConstants = NativeModules.imgViewManager;

class ImageView extends React.Component {
    render() {
        return (
            <View style = {styles.container}>
              <StatusBar hidden={true}/>
              <RCTImage {...this.props} style={styles.constants}/>
            </View>
    );
  }
}

ImageView.propTypes = {

};

var styles = StyleSheet.create({
  container: {
    flex: 1,
  //  height: 100,
//    width: 100
  //  justifyContent: 'flex-start',
  //  alignItems: 'flex-start',
  //  backgroundColor: '#F5FCFF',

},
  constants: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
    //height: imageViewConstants.ComponentHeight,
    //width: imageViewConstants.ComponentWidth
  }
});

var RCTImage = requireNativeComponent('imgView', ImageView);

module.exports = ImageView;
