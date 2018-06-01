import React from 'react';
import { Grid, Icon } from '@material-ui/core';

export default () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <div className="Header">
          <div className="Header-menuButton">
            <Icon classNAme="material-icons">menu</Icon>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
