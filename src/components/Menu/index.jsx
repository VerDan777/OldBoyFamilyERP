import React, { Component } from 'react';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import Paper from 'material-ui/Paper';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';
import FontIcon from 'material-ui/FontIcon';
import styles from './MainMenu.css';

const style = {
    display: 'inline-block',
    float: 'left',
    margin: '16px 32px 16px 0',
    overflowX: 'hidden'
  };

const iconStyles = {
    marginRight: 24,
};
  
  
class MainMenu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h2 style={{textAlign: "center", fontFamily: "RexBold, sans-serif"}}>Главное меню</h2>
                    <Menu style={{backgroundColor: "#d5a353", width: "100%"}}>
                        <MenuItem className="menu-item" primaryText="Главная" leftIcon={<FontIcon className="muidocs-icon-action-home"/>} />
                        <MenuItem className="menu-item"primaryText="Материалы" leftIcon={<RemoveRedEye/>} />
                        <MenuItem className="menu-item" primaryText="Чат" leftIcon={<PersonAdd />} />
                        <MenuItem className="menu-item" primaryText="Карта" leftIcon={<ContentLink />} />
                        <Divider />
                        <MenuItem className="menu-item" primaryText="Статистика" leftIcon={<ContentCopy />} />
                        <MenuItem className="menu-item" primaryText="Вакансии" leftIcon={<Download />} />
                        <Divider />
                        <MenuItem className="menu-item" primaryText="Роялти" leftIcon={<Delete />} />
                        <MenuItem className="menu-item" primaryText="Clear Config" leftIcon={<PersonAdd />} />
                        <MenuItem className="menu-item" primaryText="Настройки" leftIcon={<PersonAdd />} />
                        <MenuItem className="menu-item" primaryText="О проекте" leftIcon={<Delete />} />
                    </Menu>
            </div>
        )
    }
}
export default MainMenu;