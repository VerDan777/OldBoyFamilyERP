import React from 'react';
import AppBar from 'material-ui/AppBar';
import SearchBarHeader from '../SearchBarHeader/index.jsx';
import BadgeGen from '../Badge/index.jsx';
import { connect } from 'react-redux';
import { badgeIncrement, badgeDecrement, Profile1 } from '../../actions';
import Profile from '../Profile/index.jsx';
import logo from '../../assets/img/logo.png';
import icon from '../../assets/img/icon.svg';
const AppBarHeader = (props) => {
    const { dispatch } = props;

    return(
        <div>
            <AppBar style={{backgroundColor: '#222', display: "flex", alignItems: 'center', padding: "10px",boxShadow: "0 1px 4px 0 rgba(0, 0, 0, .1);"}}
             iconElementLeft={<div style={{height: "75px",marginBottom: "20px",paddingLeft: "50px", display: "flex", alignItems: "center"}}>
                <img style={{height: "100%"}} src={logo} alt="logo"/>
                {/* <div style={{}}> */}
                <svg class="jss56 jss52" focusable="false" fill="#fff" style={{height: "35", paddingLeft: "50px"}} viewBox="0 0 24 24" aria-hidden="true"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
            </div>} >
                <BadgeGen/>
                {/* <SearchBarHeader _onChanged={dispatch}/> */}
                <Profile/>
            </AppBar>
        </div>
    )
}


export default connect(state => ({badge: state}))(AppBarHeader);