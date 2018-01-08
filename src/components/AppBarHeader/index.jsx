import React from 'react';
import AppBar from 'material-ui/AppBar';
import SearchBarHeader from '../SearchBarHeader/index.jsx';
import BadgeGen from '../Badge/index.jsx';
import { connect } from 'react-redux';
import { badgeIncrement, badgeDecrement, Profile1 } from '../../actions';
import Profile from '../Profile/index.jsx';

const AppBarHeader = (props) => {
    const { dispatch } = props;

    return(
        <div>
            <AppBar title="OldBoyFamily" style={{backgroundColor: '#222', display: "flex", alignItems: 'center'}} >
                <Profile/>
                <BadgeGen/>
                <SearchBarHeader _onChanged={dispatch}/>
                <button onClick= {() => dispatch(badgeIncrement())}></button>
            </AppBar>
        </div>
    )
}


export default connect(state => ({badge: state}))(AppBarHeader);