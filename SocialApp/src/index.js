import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {ReactReduxFirebaseProvider} from 'react-redux-firebase'
import store, {rrfProps} from './Store'
import {fetchPosts} from './Actions/PostActions'
import {fetchUsers} from './Actions/AuthActions'
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

store.dispatch(fetchPosts())
store.dispatch(fetchUsers())


ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <App /> 
        </ReactReduxFirebaseProvider>
      </Provider>                
      </React.StrictMode>,
  
    document.getElementById('root')
  );



export default store


reportWebVitals();
