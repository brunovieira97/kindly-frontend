import React, { Component } from 'react'
import './Profile.css'
import picture from '../assets/bob.png';

class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="Profile">
                <img src={picture} alt="Bob Ross"></img>
            </div>
        )
    }

}

export default Profile;