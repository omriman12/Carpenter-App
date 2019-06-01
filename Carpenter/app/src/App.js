import React, { Component } from 'react';
import AppRouter from './AppRouter';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import configureStore from './store/configureStore.dev';
import {Provider} from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppLayout from './Layouts/AppLayout';

// const store = configureStore();

class App extends Component {
  
  render() {
    return (
  	  <Provider> 
        <React.Fragment>
            <CssBaseline />
            <Header/>
            <AppLayout>
              <AppRouter/>
            </AppLayout>
            {/* <Footer/> */}
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;