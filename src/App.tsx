import { Provider } from 'react-redux';

import { HomeScreen } from './screens';
import { store } from './stores';

const App = () => {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
};

export default App;
