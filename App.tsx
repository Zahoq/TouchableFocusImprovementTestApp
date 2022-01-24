/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {VFC} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const row = [0, 1, 2, 3, 4, 5, 6];
type RowProps = {
  prefix: number;
};
const Row: VFC<RowProps> = props => {
  return (
    <View style={styles.row}>
      {row.map(key => (
        <TouchableOpacity
          key={`${props.prefix}-${key}`}
          style={styles.touchable}
        />
      ))}
    </View>
  );
};
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      {row.map(key => (
        <Row prefix={key} />
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  touchable: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    margin: 10,
  },
  row: {
    flexDirection: 'row',
  },
});

export default App;
