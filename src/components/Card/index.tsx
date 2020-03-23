import React, { FunctionComponent, memo } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';

interface IPropsCustomCard {
  name: string,
  latitude: number,
  longitude: number,
  onClick?: Function['prototype'],
};

const CustomCard: FunctionComponent<IPropsCustomCard> = ({
  name,
  latitude,
  longitude,
  onClick,
}) => (
  <Card variant="outlined" onClick={() => onClick(latitude, longitude)}>
    <CardActionArea>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {name}
        </Typography>
        <Typography color="textSecondary">
          Coordinates:
        </Typography>
        <Typography variant="body2" component="p">
          Latitude: {latitude}
          <br/>
          Longitude: {longitude}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default memo(CustomCard);