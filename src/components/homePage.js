'use strict';
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Home = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <h1>Pluralsight Administration</h1>
        <p>React, react router, and flux for web apps</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
});

module.exports = Home;