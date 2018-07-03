import React from 'react';
import { Grid, Icon } from '@material-ui/core';

import { getEndpoint } from '../controllers/fetch';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      url: 'https://google.com',
    };
  }

  async componentWillMount() {
    console.log('/data/lighthouse');
    // const check = await getEndpoint('/data/lighthouse');
    const lighthouseCheck = await postEndpoint('/data/lighthouse', this.state.url);
    this.setState({ lighthouseCheck, loading: false });
  }

  render() {
    return (
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <div className="Header">
            <div className="Header-menuButton">
              <Icon className="material-icons">menu</Icon>
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="wrapper">
            <p>lighthouse</p>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default Home;
