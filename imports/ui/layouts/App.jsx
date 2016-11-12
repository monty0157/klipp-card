import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { autobind } from 'core-decorators';
import classNames from 'classnames';

import NavBar from '../../elements/NavBar';
import IconBar from '../../elements/IconBar';
import ShoppingIcon from 'material-ui/svg-icons/action/shopping-basket';
import RaisedButton from 'material-ui/RaisedButton';
import ClearIcon from 'material-ui/svg-icons/content/clear';

class App extends Component {
  constructor() {
    super()

    this.state = {
      menuIsOpen: false,
    }
  };

  @autobind
  handleMenuToggle() {
    this.setState({menuIsOpen: !this.state.menuIsOpen})
  }


  render() {
    return(
      <div className="outerContainer">

      {this.props.children}
        <NavBar className="navBar">
          <a>
            <RaisedButton
              icon={<ShoppingIcon />}
              className="button"
              primary
              onClick={this.handleMenuToggle}
            />
          </a>
        </NavBar>

        <IconBar className={classNames({
          'iconBar': true,
          'menuIsOpen': this.state.menuIsOpen,
        })}>
          <div className="iconMenu">
            <RaisedButton
              icon={<ClearIcon />}
              className="button button--icon"
              primary
              onClick={this.handleMenuToggle}
            />
          </div>
        </IconBar>
      </div>
    )
  }
}

const AppContainer = createContainer(() => {
  return {}
}, App);

export default AppContainer;
