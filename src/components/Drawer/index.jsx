import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import MainMenu from '../Menu/index.jsx';

class DrawerDrop extends Component {
    constructor(props) {
        super(props);
        this.state = {open: true};
      }
    
      handleToggle = () => this.setState({open: !this.state.open});
    
      render() {
        return (
          <div>
            <Drawer containerStyle={{height: 'calc(100% - 123px)', top: 123, overflowX: 'hidden', backgroundColor: "#d5a353"}} open={this.state.open}>
                <MainMenu/>
            </Drawer>
          </div>
        );
      }
}
export default DrawerDrop;