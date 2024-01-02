import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBarContainer from './components/NavBar/NavBarContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
import LoginContainer from './components/Login/LoginContainer';
import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { initializedSuccessThunkCreator } from './components/Redux/appReducer';
import Preloader from './components/common/preloader/preloader';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends React.Component {
  componentDidMount(){
    this.props.initializeApp()
  }
  render(){
    if(!this.props.initializedValue) return (<div className="appPreloader"><Preloader /></div>)

    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <NavBarContainer />
  
          <div className="app-wrapper-content">
            <Suspense fallback={<div>Loading...</div>}>
            <Routes>
  
              <Route path= "login" element={<LoginContainer />} />
  
              <Route path= "profile" element={<ProfileContainer />} />
  
              <Route path="profile/:profiled" element={<ProfileContainer />} />
  
              <Route path="dialogs" element={<DialogsContainer />} />
  
              <Route path="users" element={<UsersContainer />} />
  
              <Route path="news" element={<News />} />
  
              <Route path="music" element={<Music />} />
  
              <Route path="settings" element={<Settings />} />
            </Routes>
            </Suspense>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const operatorIngages = (newParams) => {};

const mapStateToProps = (state) => ({
  initializedValue: state.app.initializedValue
})

export default connect(mapStateToProps, { initializeApp: initializedSuccessThunkCreator })(App);
// export default App;