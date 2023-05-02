import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePageWrapper from './pages/HomePage';
import AddNotePage from './pages/AddNotePage';
import DetailNotes from './pages/DetailNotes';
import { LocaleProvider } from './context/LocaleContext';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { getUserLogged, putAccessToken } from './utils/api';

class NotesApp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
      localeContext: {
        locale: 'id',
        theme: 'light',
        toggleLocale: () => {
          this.setState((prevState) => {
            return {
              localeContext: {
                ...prevState.localeContext,
                locale: prevState.localeContext.locale === 'id' ? 'en' : 'id'
              }
            }
          })
        },
        toggleTheme: () => {
          this.setState((prevState) => {
            return {
              localeContext: {
                ...prevState.localeContext,
                theme: prevState.localeContext.theme === 'light' ? 'dark' : 'light',
              },
            };
          });
        },
      }
    };

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
    this.handleKeywordChange = this.handleKeywordChange.bind(this);
  }

  // mengambil kembali data autheduser ketika refresh
  async componentDidMount() {
    const { data } = await getUserLogged();
    this.setState(() => {
      return {
        authedUser: data,
        initializing: false
      };
    });
  }

  handleKeywordChange(newKeyword) {
    
  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
      };
    });
  }

  onLogout() {
    this.setState(() => {
      return {
        authedUser: null
      }
    });
    putAccessToken('');
  }


  render() {
    if (this.state.initializing) {
      return null;
    }

    if (this.state.authedUser === null) {
      return (
        <LocaleProvider value={this.state.localeContext}>
          <div
            className={`theme ${this.state.localeContext.theme === 'light' ? 'light-theme' : 'dark-theme'}`}
          >
            <div>
              <header className='notes-app__header'>
                <h1>{this.state.localeContext.locale === 'id' ? 'Aplikasi Notes' : 'Notes App'}</h1>
                <Navigation logout={this.onLogout} name={this.state.authedUser?.name} authed={this.state.authedUser !== null} />
              </header>
              <main>
                <div className='note-app'>
                  <Routes>
                    <Route path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
                    <Route path="/register" element={<RegisterPage />} />
                  </Routes>
                </div>
              </main>
            </div>
          </div>
        </LocaleProvider>
      )
    }

    return (
      <LocaleProvider value={this.state.localeContext}>
        <div
          className={`theme ${this.state.localeContext.theme === 'light' ? 'light-theme' : 'dark-theme'}`}
        >
          <header className='notes-app__header'>
            <h1>{this.state.localeContext.locale === 'id' ? 'Aplikasi Notes' : 'Notes App'}</h1>
            <Navigation logout={this.onLogout} name={this.state.authedUser?.name} authed={this.state.authedUser !== null} />
          </header>
          <main>
            <div className='note-app'>
              <Routes>
                <Route path="/" element={<HomePageWrapper keywordChange={this.handleKeywordChange} />} />
                <Route path="/add" element={<AddNotePage />} />
                <Route path="/detail/:id" element={<DetailNotes />} />
              </Routes>
            </div>
          </main>
        </div>
      </LocaleProvider>
    );
  }


}

export default NotesApp;