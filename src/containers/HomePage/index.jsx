import React, { Component } from 'react';
import Header from '../../components/Header/index.jsx';
import DrawerDrop from '../../components/Drawer/index.jsx';
import MainMenu from '../../components/Menu/index.jsx';

class HomePage extends Component {
    render() {
        return(
            <div>
                <Header/>
                <DrawerDrop/>
            </div>
        )
    }
}
export default HomePage;