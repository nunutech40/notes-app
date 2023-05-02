import React from 'react';
import { Link } from 'react-router-dom';
import { LocaleConsumer } from '../context/LocaleContext';
import { FiHome, FiPlusCircle, FiLogOut } from 'react-icons/fi';
import { FaMoon, FaSun } from 'react-icons/fa';
import PropTypes from 'prop-types';

function Navigation({ logout, name, authed, toggleTheme }) {
  return (
    <LocaleConsumer>
      {
        ({ locale, theme, toggleLocale }) => { // Fixed typo: llocale -> locale
          return (
            <nav className="nav">
              <ul className="nav__list">
                <li>
                  <button onClick={toggleTheme}>{theme === 'light' ? <FaMoon /> : <FaSun />}</button>
                </li>
                <li><button onClick={toggleLocale}>{locale === 'id' ? 'en' : 'id'}</button></li>
                {authed && (
                  <>
                    <li className="nav__item">
                      <Link className="nav__link" to="/"><FiHome /> {locale === 'id' ? 'Beranda' : 'Home'}</Link>
                    </li>
                    <li className="nav__item">
                      <Link className="nav__link" to="/add"><FiPlusCircle /> {locale === 'id' ? 'Tambah Note' : 'Add Note'}</Link>
                    </li>
                    <li className="nav__item">
                      <button onClick={logout}><span className="logout-name">{name}</span><FiLogOut /></button>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          )
        }
      }
    </LocaleConsumer>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string,
  authed: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Navigation;
