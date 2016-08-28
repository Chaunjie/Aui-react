import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import Main from 'components/Main';
import Button from 'components/ButtonMain';
import ColMain from 'components/ColMain';
import NineGridMain from 'components/NineGridMain';
import SixteenGridMain from 'components/SixteenGridMain';
import SearchBarMain from 'components/SearchMain';
import TabBarMain from 'components/FootBarMain';
import TabMain from 'components/TabMain';
import ToastMain from 'components/ToastMain';
import AlertMain from 'components/AlertMain';
import RefreshLoad from 'components/PullRefresh';

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

// Render the main component into the dom
ReactDOM.render((
  <Router key="router" history={ browserHistory }>
    <Route path="/" component={App}>
      <IndexRoute key="main" component={Main}/>
      <Route key="Refresh" path="/Refresh" component={RefreshLoad}/>
      <Route key="button" path="/button" component={Button}/>
      <Route key="col" path="/col" component={ColMain}/>
      <Route key="nineGridMain" path="/nineGridMain" component={NineGridMain}/>
      <Route key="sixteenGridMain" path="/sixteenGridMain" component={SixteenGridMain}/>
      <Route key="searchBarMain" path="/searchBarMain" component={SearchBarMain}/>
      <Route key="tabBarMain" path="/tabBarMain" component={TabBarMain}/>
      <Route key="tabMain" path="/tabMain" component={TabMain}/>
      <Route key="toastMain" path="/toastMain" component={ToastMain}/>
      <Route key="alertMain" path="/alertMain" component={AlertMain}/>
    </Route>
  </Router>
), document.getElementById('app'));
