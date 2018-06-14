import React from 'react';

class CerealCard extends React.Component {
  state = {
    cerealName: "Sprinkled Donut Crunch",
    cerealImage:
      "https://i5.walmartimages.com/asr/8028a99d-7172-4a0f-ad74-3a14416f52f8_1.dd9aea515cd1325693f454f1630e4c9f.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    cerealRating: "🥄🥄🥄🥄🥄",
    cerealYear: 2017,
    cerealReview:
      "Remember 'Sprinkle Spangles from the 90's? This is basically that. I want to eat all of it."
  };
  render() {
    return (
      <div>
        <h1>{this.state.cerealName}</h1>
        <img src={this.state.cerealImage} />
        <ul>
          <li>Rating : {this.state.cerealRating}</li>
          <li>Year : {this.state.cerealYear}</li>
        </ul>
        <p>{this.state.cerealReview}</p>
      </div>
    );
  }
}

export default CerealCard;