import React from 'react';
import Counter from './src/components/Counter';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';
import List from './src/components/List';


const App = () => {
  return(
<Provider store={Store}>

   <Counter/>
   <List/>
 
   </Provider>
   
  )
};
export default App;
