import React from 'react';
import AppBar from 'material-ui/AppBar';
import SearchBarHeader from '../SearchBarHeader/index.jsx';
import BadgeGen from '../Badge/index.jsx';

const AppBarHeader = (props) => {
    return(
        <div>
            <AppBar title="OldBoyFamily" style={{backgroundColor: '#222', display: "flex", alignItems: 'center'}} >
                <BadgeGen/>
                <SearchBarHeader/>
            </AppBar>
        </div>
    )
}
export default AppBarHeader;