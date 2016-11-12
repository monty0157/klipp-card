import React, { Component } from 'react';
import { Link } from 'react-router';

import { List, ListItem } from 'material-ui/List';
import LocalBarIcon from 'material-ui/svg-icons/maps/local-bar';
import LocalCafeIcon from 'material-ui/svg-icons/maps/local-cafe';
import LocalPizzaIcon from 'material-ui/svg-icons/maps/local-pizza';


export default class Cards extends Component {


  render() {

    return(
      <div className="outerContainer">
        <h2 className="header">Your cards</h2>
        {this.props.children}

        <List>
          <Link

            to={`/cards/1`}
            className="listItem menuList"
          >
            <ListItem
              primaryText="Australian Bar"
              secondaryText="Beer: three clips remaining"
              leftIcon={<LocalBarIcon />}
            />
          </Link>

          <Link

            to={`/cards/1`}
            className="listItem menuList"
          >
            <ListItem
              primaryText="Starbucks"
              secondaryText="Coffee: eight clips remaining"
              leftIcon={<LocalCafeIcon />}
            />
          </Link>

          <Link

            to={`/cards/1`}
            className="listItem menuList"
          >
            <ListItem
              primaryText="Baresso"
              secondaryText="Coffee: nine clips remaining"
              leftIcon={<LocalCafeIcon />}
              />
            </Link>

            <Link

              to={`/cards/1`}
              className="listItem menuList"
            >
              <ListItem
                primaryText="Jensens Bøfhus"
                secondaryText="Lunch offer: one clip remaining"
                leftIcon={<LocalPizzaIcon />}
              />
          </Link>
        </List>


      </div>
    )
  }
}
