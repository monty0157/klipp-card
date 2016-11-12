import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

import { List, ListItem } from 'material-ui/List';
import LocalPizzaIcon from 'material-ui/svg-icons/maps/local-pizza';


export default class FoodPlaces extends Component {


  render() {

    let { className } = this.props;
    console.log(className)

    return(
      <div className={`innerContainer--iconBar ${className}` }>

        <List>
          <div className={`listItem menuList`}>
            <ListItem
              primaryText="Anettes Sandwich"
              secondaryText="10 clips for x kr;"
              leftIcon={<LocalPizzaIcon />}
              style={{color: 'black'}}
            />
          </div>

          <Link
            to={`cards`}
            className="listItem menuList"
          >
            <ListItem
              primaryText="Dominos"
              secondaryText="10 clips for x kr;"
              leftIcon={<LocalPizzaIcon />}
              style={{color: 'black'}}
              />
            </Link>

            <Link
              to={`cards`}
              className="listItem menuList"
            >
              <ListItem
                primaryText="McDonalds"
                secondaryText="10 clips for x kr;"
                leftIcon={<LocalPizzaIcon />}
                style={{color: 'black'}}
              />
            </Link>

            <div className="header header--iconBar">
              <input
                type="text"
                placeholder="search"
               />
            </div>
        </List>
      </div>
    )
  }
}
