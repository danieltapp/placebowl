import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const CerealCard = () => (
  <Card>
    <CardHeader
      title="User"
      subtitle="Cereal Killer"
      avatar="images/jsa-128.jpg"
    />
    <CardMedia
      overlay={<CardTitle title="Blueberry Pancake Crunch" />}
    >
      <img src="https://i5.walmartimages.com/asr/5df4e576-8c61-4108-903d-53c101017690_1.1727359dd0f277c10fc4520a9df96a61.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF" alt="" />
    </CardMedia>
    <CardTitle subtitle="2017" />
    <CardText>
        The cap'n definitely made this happen and I would eat 30 million boxes if I could.
    </CardText>
    <CardActions>
      <FlatButton label="rate" />
      <FlatButton label="review" />
    </CardActions>
  </Card>
);

export default CerealCard;