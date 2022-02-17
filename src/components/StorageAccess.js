import {View, Text, PermissionsAndroid} from 'react-native';
import React from 'react';
import RNFS from 'react-native-fs';
export default function StorageAccess() {
  PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
  ).then(granted => {
    if (!granted) {
      PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ]).then(result => {
        console.log(result);
      });
    }
    const path = RNFS.ExternalStorageDirectoryPath + '/Download/';
    RNFS.readDir(path).then(result => {
      result.map(file => {
        if(file.isFile && file.name.endsWith('.mp4'))
        console.log(file.path);
      });
    });
  });

  return (
    <View>
      <Text>StorageAccess</Text>
    </View>
  );
}
