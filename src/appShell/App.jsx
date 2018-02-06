import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import EditScreenContainer from '../modules/editScreenContainer';
import ViewScreenContainer from '../modules/viewScreenContainer';
import styles from './app.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <header>
          <Link to="/viewScreen"><Button>view</Button></Link>
          <Link to="/editScreen"><Button>Edit</Button></Link>
        </header>
        <main>
          <Route exact path="/viewScreen" component={ViewScreenContainer} />
          <Route exact path="/editScreen" component={EditScreenContainer} />
        </main>
      </div>
    )
  }
}

export default App;
