import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {createStore} from 'redux';
import rootReducer from './reducers';

import App from './components/App';
import Stack from './components/Stack';
import {setStack} from './actions';

const store = createStore(rootReducer);
console.log('create store');

console.log('dispatch action');
store.subscribe(() => console.log('store', store.getState()));
store.dispatch(setStack({id: 0, title: 'example', cards: []}))
store.dispatch(setStack({id: 1, title: 'example 3', cards: []}))
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/stack' component={Stack} />
        </Switch>
    </BrowserRouter>, 
    document.getElementById('root')
);