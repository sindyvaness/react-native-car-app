import { createTheme, ThemeProvider } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/layouts/Header';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const theme = createTheme({
  lightColors: {
    primary: 'blue',
  },
  darkColors: {
    primary: 'blue',
  },
  components: {
    Button: {
      raised: true
    }
  }
});

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <Header></Header>
      </SafeAreaProvider>
      <StatusBar style="light" />
    </ThemeProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
