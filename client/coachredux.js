import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import 'babel-polyfill';

import App from './components/App';
import NoteForm from './components/NoteForm';
import Note from './components/Note';

import css from './styles/style.styl';

import store, { history } from './store';

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={NoteForm} />
        <Route path="/view/:noteId" component={Note}></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
