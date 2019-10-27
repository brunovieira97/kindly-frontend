import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faBars from '@fortawesome/fontawesome-free-solid/faBars'

import Item from './Item'
import Lead from './Lead'
import Profile from './Profile'
import SearchBar from './SearchBar'
import './TopMenu.css'

class TopMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menu_class: '',
        }
    }

    setToggleTopMenuClass = () => {
        if (this.state.menu_class === '') {
            this.setState({
                menu_class: 'toggled',
            })
        } else {
            this.setState({
                menu_class: '',
            })
        }
    }

    render() {
        let top_menu_class = `TopMenu ${this.state.menu_class}`
        return (
            <div>
                <div className={top_menu_class} >
                    <Lead />
                    <div className='left'>
                        <SearchBar />
                        <NavLink  to="/instituicoes" exact activeClassName="active-link"><Item text='Instituições' /></NavLink>
                        <NavLink  to="/doacoes" exact activeClassName="active-link"><Item text='Doações' /></NavLink>
                    </div>
                    <div className="right">
                        <Profile />
                    </div>
                    <FontAwesomeIcon icon={faBars} className='TopMenu-icon' onClick={this.setToggleTopMenuClass} />
                    <div className='clear-fix' />
                </div>
            </div>
        )
    }

}

export default TopMenu;