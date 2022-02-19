import React from 'react';
import {StyleSheet} from 'react-native';
import GoogleCast, {
  CastButton,
  useRemoteMediaClient,
} from 'react-native-google-cast';
import {useSelector} from 'react-redux';

export default function Cast({style}) {
  // This will automatically rerender when client is connected to a device
  // (after pressing the button that's rendered below)
  const client = useRemoteMediaClient();
  const {trackUrl, trackId, thumb, trackTitle, trackSubtitle, items} =
    useSelector(state => state.track);
  if (client && trackUrl.length > 0) {
    // Send the media to your Cast device as soon as we connect to a device
    // (though you'll probably want to call this later once user clicks on a video or something)
    client
      .loadMedia({
        queueData: {
          items: items,
        },
        // mediaInfo: {
        //   contentUrl: trackUrl,
        //   metadata: {
        //     images: [{url: thumb}],
        //     title: trackTitle,
        //     subtitle: trackSubtitle,
        //   },
        // },
      })
      .catch(error => {
        console.log(error);
      });
    GoogleCast.showExpandedControls();
  }

  // This will render native Cast button.
  // When a user presses it, a Cast dialog will prompt them to select a Cast device to connect to.
  return <CastButton style={[styles.container, style]} />;
}
const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
  },
});
