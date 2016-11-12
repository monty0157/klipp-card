import React, { Component } from 'react';

import LocalBarIcon from 'material-ui/svg-icons/maps/local-bar';

export default class Bar extends Component {

  render() {
    return(
      <div className="outerContainer">
        <h2 className="header">What's happening?</h2>

        {[1,2,3,4,5].map(lists => {
          return(
            <div className="menuList">

              <div className="menuList__iconContainer">
                <LocalBarIcon className="menuList__icon"/>
              </div>

              <div className="menuList__content">
                <ul>
                  {[1,2,3].map(element => {
                    return(
                      <li>{element}</li>
                    )})}
                </ul>
              </div>

            </div>
          )})}
      </div>
    )
  }
}
