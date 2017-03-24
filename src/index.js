import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <AppContainer>
      <App />
    </AppContainer>
  </Provider>,
  document.getElementById('root'),
);

if (module.hot) {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <App />
      </AppContainer>
    </Provider>,
    document.getElementById('root'),
    module.hot.accept('./App'),
  );
}
