import React from "react";
import { Link } from "react-router";
import Request from "superagent";
import _ from "lodash";

import { Card, CardImg, CardText, CardBlock, CardTitle, CardSubtitle, Button } from 'reactstrap';
require('../../css/main.css');

export default class Featured extends React.Component {
  constructor(){
    super();
    this.state = { foodinfo: [] }
  }
  componentWillMount(){
    var url = 'http://ec2-54-165-240-14.compute-1.amazonaws.com:3000/api/foodItem';
    Request.get(url).then((response) => {
      this.setState({
        foodinfo: response.body
      })
    })
  }

  render() {
        console.log(this.state.foodinfo);
        var canvases = this.state.foodinfo.map(function(data) {
         return (
           <div>
           <Card className="col-xs-12 col-sm-4 eachCard">
             <CardImg top width="100%" src={data.food_item_pic} alt="Card image cap" />
             <CardBlock className="cardBlock">
               <CardTitle>{data.food_item_name}</CardTitle>
               <CardSubtitle>${data.food_item_price}</CardSubtitle>
               <span class="glyphicon glyphicon-plus-sign btnClass"></span>
             </CardBlock>
           </Card>
           </div>
         );
       });
    return(
      <div className="container">
        <div className="row">
          <h1>Featured</h1>


          <div>{canvases}</div>
        </div>
      </div>
    )
  }
}
