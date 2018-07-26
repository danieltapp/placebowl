import React from 'react';
import SubmitForm from './SubmitForm';

class CerealCard extends React.Component {
  state = {
    cerealName: "Blueberry Pancake Crunch",
    cerealImage:
      "https://firebasestorage.googleapis.com/v0/b/placebowl-f7a12.appspot.com/o/bbpancakecrunch.jpg?alt=media&token=d1c671cb-45bb-4d0e-9158-d898f7ce327b",
    cerealRating: "🥄🥄🥄🥄🥄",
    cerealYear: 2018,
    cerealReview:
      "This is awesome. I try and be stingy with my five-spoon ratings, but this is every bit deserving. First off, I love when Cap’n variants use these circular shaped pieces. I can inhale this without damaging the roof of my mouth. The buttery pieces are distinctively Cap’n-esq. The blueberry pieces are perfect. I suspected these would taste just like Crunch Berries, but was pleasantly surprised by the blueberry flavor. The cereal milk you get from these bad boys is my favorite of any Cap’n variant. It is tragic that this is just a limited release."
  };
  render() {
    return (
      <div className="container">
        <h2 className="cereal-form__title">{this.state.cerealName}</h2>
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