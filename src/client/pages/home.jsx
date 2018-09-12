import React from 'react';
import { Grid, Icon } from '@material-ui/core';

import { getEndpoint } from '../controllers/fetch';
import DetailCard from './components/detailCard.jsx';

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
    const check = await getEndpoint('/data/lighthouse');
    // const lighthouseCheck = await postEndpoint('/data/lighthouse', this.state.url);
    console.log(check);
    // this.setState({ lighthouseCheck, loading: false });
    this.setState({ loading: false });
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return (
        <div>
          <p>
            Loading
          </p>
        </div>
      );
    }
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
            <DetailCard
              Header="Detail Card 1"
            >
              <p>Hello</p>
            </DetailCard>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default Home;
