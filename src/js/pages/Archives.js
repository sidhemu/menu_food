import React from "react";
import Request from "superagent";
import _ from "lodash";

import { Card, CardImg, CardText, CardBlock, CardTitle, CardSubtitle, Button } from 'reactstrap';
require('../../css/main.css');

export default class Archive extends React.Component {
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
    const { query } = this.props.location;
    const { params } = this.props;
    const { article } = params;
    const { date, filter } = query;

    var archives = this.state.foodinfo.filter(item => item.food_group_id=== 'eb8e98ad-3dc9-11e6-a9f9-28e347').map(function(data) {
     return (
       <div>
       <Card  className="col-xs-12 col-sm-4 eachCard">
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
          <div>
           <p>Signature Speciality sandwich </p>
           <div>{archives}</div>
          </div>
    )
  }
}
