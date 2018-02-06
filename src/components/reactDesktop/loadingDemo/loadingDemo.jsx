import React, { Component } from 'react';
import Loading from '../loading/Loading';
import logo from './logo.svg';
import styles from './loadingDemo.scss';

export default class LoadingDemo extends Component {

render()  {
return (
<Loading color='blue' size={100} hidden>
    <header className={styles.AppHeader}>
      <Loading color='yellow' size={80}>
      <img src={logo} className={styles.AppLogo} alt="logo" />
      <h1 className={styles.AppTitle}>Welcome to React</h1>
    </Loading>
    </header>
<div>
<Loading color='red' size={50} hidden></Loading>
<Loading color='green' size={30} hidden></Loading>
</div>
</Loading>
);
}
}
