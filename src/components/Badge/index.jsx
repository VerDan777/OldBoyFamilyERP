import React, { Component } from 'react';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import {white, yellow500, blue500} from 'material-ui/styles/colors';

const styles = {
    backgroundColor: '#d5a353'
}
class BadgeGen extends Component {
    render() {
        return(
            <div>
    <Badge
      badgeContent={4}
      primary={true}
    >
      <NotificationsIcon color={white} />
    </Badge>
    <Badge
      badgeContent={10}
      secondary={true}
      badgeStyle={{top: 12, right: 12}}
    >
      <IconButton tooltip="Notifications">
        <NotificationsIcon color={yellow500}/>
      </IconButton>
    </Badge>
  </div>
        )
    }
}
export default BadgeGen;