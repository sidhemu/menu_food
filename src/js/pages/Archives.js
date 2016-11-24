import React from "react";



export default class Archives extends React.Component {
  render() {
    const { query } = this.props.location;
    const { params } = this.props;
    const { article } = params;
    const { date, filter } = query;


    return (
      <div className="container">
        <div className="row">
          <h1>Archive</h1>
        </div>
      </div>
    );
  }
}
