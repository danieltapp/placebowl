import React from 'react';

class CerealCard extends React.Component {
  // render(){
  //     return (
  //         <div>
  //         <h1>{this.state.cereal.name}</h1>
  //         <img src={this.state.cereal.image}></img>
  //         <ul>
  //         <li>Rating : {this.state.cereal.spoons}</li>
  //         <li>Year : {this.state.cereal.year}</li>
  //         </ul>
  //         <p>{this.state.cereal.review}</p>
  //         </div>
  //     )
  // }

  render() {
    return (
      <div>
        <h1>Cereal Name</h1>
        <ul>
          <li>Rating : </li>
          <li>Year : </li>
        </ul>
        <p>this is very tasty :)</p>
      </div>
    );
  }
}

export default CerealCard;