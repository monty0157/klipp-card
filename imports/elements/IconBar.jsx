import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import classNames from 'classnames';

import RaisedButton from 'material-ui/RaisedButton';
import MusicIcon from 'material-ui/svg-icons/image/music-note';
import LocalBarIcon from 'material-ui/svg-icons/maps/local-bar';
import LocalCafeIcon from 'material-ui/svg-icons/maps/local-cafe';
import LocalGroceryIcon from 'material-ui/svg-icons/maps/local-grocery-store';
import LocalPizzaIcon from 'material-ui/svg-icons/maps/local-pizza';

import FoodPlaces from './FoodPlaces';


export default class IconBar extends Component {
  constructor() {
    super()

    this.state = {
      icon1IsRising: false,
      icon2IsRising: false,
      icon3IsRising: false,
    }
  };

  @autobind
  handleIcon1Rise() {
    this.setState({icon1IsRising: !this.state.icon1IsRising})
  }

  @autobind
  handleIcon2Rise() {
    this.setState({icon2IsRising: !this.state.icon2IsRising})
  }

  @autobind
  handleIcon3Rise() {
    this.setState({icon3IsRising: !this.state.icon3IsRising})
  }

  render() {
    return(
      <div className={this.props.className}>
        <div className={classNames({
          'iconMenu': true,
          "iconMenu--active": this.state.icon1IsRising,
        })}>
          <RaisedButton
            primary
            className={classNames({
              'button button--icon': true,
              'button--changeColor': this.state.icon1IsRising,
            })}
            icon={<LocalBarIcon />}
            onClick={this.handleIcon1Rise}
          />
        </div>

        <div className={classNames({
          'iconMenu': true,
          "iconMenu--active": this.state.icon2IsRising,
        })}>
          <RaisedButton
            icon={<LocalPizzaIcon />}
            className={classNames({
              'button button--icon': true,
              'button--changeColor': this.state.icon2IsRising,
            })}            primary
            onClick={this.handleIcon2Rise}
          />

          <FoodPlaces
            className={classNames({
              'innerContainer--iconBar--hideContent': this.state.icon2IsRising,
            })}
          />
        </div>

        <div className={classNames({
          'iconMenu': true,
          "iconMenu--active": this.state.icon3IsRising,
        })}>
          <RaisedButton
          className={classNames({
            'button button--icon': true,
            'button--changeColor': this.state.icon3IsRising,
          })}            primary
            icon={<LocalCafeIcon />}
            onClick={this.handleIcon3Rise}
          />
        </div>

        {this.props.children}
      </div>
    )
  }
}
