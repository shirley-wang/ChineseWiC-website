var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="container-fluid">
        <ul className="nav nav-tabs nav-justified">
          <li role="presentation" className="active"><a href="#events">Upcoming events</a></li>
          <li role="presentation"><a href="#events">Past events</a></li>
        </ul>
      </div>
    );
  }
});
