import React from 'react';
import Counter from './src/Counter';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';

const App = () => {
  return(
<Provider store={Store}>
   <Counter/>
   </Provider>
  )
};
export default App;
