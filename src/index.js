import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './appShell/App';
import registerServiceWorker from './registerServiceWorker';


const target = document.querySelector('#root')

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
                <App />
        </ConnectedRouter>
    </Provider>,
    target
)
registerServiceWorker();