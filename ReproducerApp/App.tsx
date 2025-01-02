/* eslint-disable react/react-in-jsx-scope */
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import Video from 'react-native-video';

const App = () => {
  // If either renderLoader or poster props are provided the onLoad is never called.
  // Otherwise video loads without issues.
  return (
    <View style={styles.container}>
      <Video
        style={styles.video}
        resizeMode="contain"
        source={{
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        }}
        onLoad={() => console.log('Video is loaded')}
        renderLoader={<ActivityIndicator />}
        // poster={{
        //   source: {
        //     uri: 'https://loremflickr.com/1280/720',
        //   },
        // }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    width: 400,
    height: 400,
  },
});

export default App;
