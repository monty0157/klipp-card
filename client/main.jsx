import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { AppContainer as HotLoaderAppContainer } from 'react-hot-loader';

import 'react-hot-loader/patch';
import React from 'react';
import { browserHistory } from 'react-router';
import AppRoutes from '../imports/startup/client/routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from '../imports/startup/client/muiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

Meteor.startup(() => {
  const renderApp = (CurrentAppRoutes) => {
    render(
      <MuiThemeProvider muiTheme={muiTheme}>
        <HotLoaderAppContainer>
          <CurrentAppRoutes browserHistory={browserHistory} />
        </HotLoaderAppContainer>
      </MuiThemeProvider>,
      document.getElementById('app')
    )
  };
    renderApp(AppRoutes);
})
