import React from 'react';
import { Link } from 'react-router';

class Main extends React.Component {
  render() {
    return (
      <div id="splash">
        <h1>
          <Link to="/">Patient Notes</Link>
        </h1>
        {this.props.children}
      </div>
    );
  }
}

export default Main;
