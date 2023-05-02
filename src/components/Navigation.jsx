import React from 'react';
import { Link } from 'react-router-dom';
import { LocaleConsumer } from '../context/LocaleContext';
import { FiHome, FiPlusCircle, FiLogOut } from 'react-icons/fi';
import { FaMoon, FaSun } from 'react-icons/fa';

function Navigation({ logout, name, authed }) {
  return (
    <LocaleConsumer>
      {
        ({ locale, theme, toggleLocale, toggleTheme }) => {
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

export default Navigation;
