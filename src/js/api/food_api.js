var api = {
  getFood(){
    var url = 'http://ec2-54-165-240-14.compute-1.amazonaws.com:3000/api/foodItem';
    return fetch(url).then((res) => res.json());
  }
}

module.export = api;
