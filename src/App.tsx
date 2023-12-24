import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

import { HomeScreen } from './screens';
import { store } from './stores';

const App = () => {
  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <Provider store={store}>
          <HomeScreen />
        </Provider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default App;
