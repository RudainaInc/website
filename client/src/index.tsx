import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

import { store } from './StateManager/store';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
