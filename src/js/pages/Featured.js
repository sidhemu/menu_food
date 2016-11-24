import React from "react";
import { Link } from "react-router";
import Request from "superagent";
import _ from "lodash";

import { Card, CardImg, CardText, CardBlock, CardTitle, CardSubtitle, Button } from 'reactstrap';
require('../../css/main.css');

export default class Featured extends React.Component {
  constructor(){
    super();
    this.state = { }
  }
  componentWillMount(){
    var url = 'http://ec2-54-165-240-14.compute-1.amazonaws.com:3000/api/foodItem';
    Request.get(url).then((response) => {
      this.setState({
        foodName: response.body
      })
    })

  }

  render() {
    console.log(this.state.foodName);
    var food = _.map()
    return(
      <div className="container">
        <div className="row">
          <h1>Featured</h1>
          <Card className="col-xs-12 col-sm-4 eachCard">
            <CardImg top width="100%" src="https://tabletopmenu.s3-us-west-2.amazonaws.com/easyPie/Pasta.jpg?AWSAccessKeyId=AKIAJBLST2F5EFKIZGXQ&Expires=2079704677&Signature=eSjrIw32apC0gCGpF92%2FxgnELNA%3D" alt="Card image cap" />
            <CardBlock className="cardBlock">
              <CardTitle>Boom Boom Chicken</CardTitle>
              <CardSubtitle>$8.50</CardSubtitle>
              <span class="glyphicon glyphicon-plus-sign btnClass"></span>
            </CardBlock>
          </Card>

          <Card className="col-xs-12 col-sm-4 eachCard">
            <CardImg top width="100%" src="https://tabletopmenu.s3-us-west-2.amazonaws.com/easyPie/Pasta.jpg?AWSAccessKeyId=AKIAJBLST2F5EFKIZGXQ&Expires=2079704677&Signature=eSjrIw32apC0gCGpF92%2FxgnELNA%3D" alt="Card image cap" />
            <CardBlock className="cardBlock">
              <CardTitle>Boom Boom Chicken</CardTitle>
              <CardSubtitle>$8.50</CardSubtitle>
              <span class="glyphicon glyphicon-plus-sign btnClass"></span>
            </CardBlock>
          </Card>
        </div>
      </div>
    )
  }
}
