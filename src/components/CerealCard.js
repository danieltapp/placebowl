import React from 'react';

class CerealCard extends React.Component {
    state = {
        cereal : {
            name : 'Blueberry Pancake Crunch',
            image :  'https://i5.walmartimages.com/asr/5df4e576-8c61-4108-903d-53c101017690_1.1727359dd0f277c10fc4520a9df96a61.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
            review : "This is incredible. I'm so bummed that it's limited edition. The traditional buttery flavored Cap'n spheres mixed with the delightful blueberry crunchberries is mind blowing!",
            spoons: '9 out of 10',
            year: '2017'
        }
    }

    render(){
        return (
            <div>
            <h1>{this.state.cereal.name}</h1>
            <img src={this.state.cereal.image}></img>
            <ul>
            <li>Rating : {this.state.cereal.spoons}</li>
            <li>Year : {this.state.cereal.year}</li>
            </ul>
            <p>{this.state.cereal.review}</p>
            </div>
        )
    }    
}

export default CerealCard;