/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useCallback, VFC} from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const row = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
type RowProps = {
  prefix: number;
};

let blurTimeStamp: number = 0;
const Row: VFC<RowProps> = props => {
  const onFocus = useCallback(() => {
    console.log(`test: onFocus: diff: ${Date.now() - blurTimeStamp}`);
  }, []);
  const onBlur = useCallback(() => {
    console.log('test: onBlur');
    blurTimeStamp = Date.now();
  }, []);
  return (
    <View style={styles.row}>
      {row.map(key => (
        <TouchableOpacity
          key={`${props.prefix}-${key}`}
          style={styles.touchable}
          onFocus={onFocus}
          onBlur={onBlur}
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
    <ScrollView style={backgroundStyle}>
      {row.map(key => (
        <Row key={key} prefix={key} />
      ))}
    </ScrollView>
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
