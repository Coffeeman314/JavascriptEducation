import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Сompanies from './components/Сompanies';
import OverridesCss from './material/themeProvider';

const App = () => (
  <div className="App">
    <Provider store={store}>
      <OverridesCss>
        <Сompanies />
      </OverridesCss>
    </Provider>
  </div>
);

export default App;
