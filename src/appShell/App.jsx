import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import EditScreenContainer from '../modules/editScreen/editScreenContainer';
import ViewScreenContainer from '../modules/viewScreen/viewScreenContainer';
import CHeader from '../components/header/CHeader';
import styles from './app.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
      <div className={styles.headerContainer}>
        <div className={styles.basad}>בס"ד</div>
        <CHeader headerText={"אוהל אוהלי"} />
        </div>
        <main className={styles.main}>
          <Route exact path="/" component={ViewScreenContainer}/>
          <Route exact path="/viewScreen" component={ViewScreenContainer}/>
          <Route exact path="/editScreen" component={EditScreenContainer} />
        </main>
      </div>
    )
  }
}

export default App;
// {/* <Link to="/viewScreen"><Button>view</Button></Link>
// <Link to="/editScreen"><Button>Edit</Button></Link> */}
