import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import { autobind } from 'core-decorators';

import RaisedButton from 'material-ui/RaisedButton';
import ClearIcon from 'material-ui/svg-icons/content/clear';
import SearchIcon from 'material-ui/svg-icons/action/search';


export default class NavBar extends Component {


  render() {
    return(
      <div className={this.props.className}>

        <Link to="/cards">
          <RaisedButton
            primary
            label="Cards"
            className="button"
          />
        </Link>

        <a>
          <RaisedButton
            icon={<SearchIcon />}
            className="button"
            primary
          />
        </a>

        {this.props.children}
      </div>
    )
  }
}
