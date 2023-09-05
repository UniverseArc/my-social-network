import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar 
        friendsInSidebarData={props.TransferState.SideBar.friendsInSidebarData} />

        <div className="app-wrapper-content">
          <Routes>

            <Route path="profile" element={
              <Profile
                TransferState={props.TransferState.profilePage}

                addPostOnWall={props.addPostOnWall}

                seeTheActionsOfUserInTextarea={props.seeTheActionsOfUserInTextarea} />} />

            <Route path="dialogs" element={
            <Dialogs
                TransferState={props.TransferState.chattingPage}

                addMessageInChat={props.addMessageInChat}

                watchForInputUserInTexteareOfChats={props.watchForInputUserInTexteareOfChats} />} />

            <Route path="news" element={<News />} />

            <Route path="music" element={<Music />} />

            <Route path="settings" element={<Settings />} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;