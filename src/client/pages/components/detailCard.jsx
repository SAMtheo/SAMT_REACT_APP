import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardActions, Button } from '@material-ui/core';

const DetailCard = (props) => (
  <Card className="detailCard hoverable">
    <div className="detailCard-Main">
      <h2>{props.Header}</h2>
      {props.children}
    </div>
  </Card>
);

export default DetailCard;
