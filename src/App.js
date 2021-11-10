import React from "react";
import { Provider } from "react-redux";
import { DefaultTheme, Provider as PaperProvider, } from 'react-native-paper';

import { Navigation } from "./navigation/navigation";
import { store } from "./redux/store";

const App = () => {

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#17252a',
      accent: '#def2f1',
    },
  };


  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <Navigation />
      </PaperProvider>
    </Provider>
  );
};

export default App;
