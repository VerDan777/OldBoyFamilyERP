import React, { Component } from 'react';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import {white, yellow500, blue500, amber700} from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';
import { connect } from 'react-redux';
import { badgeIncrement, badgeDecrement } from '../../actions';
const styles = {
    backgroundColor: '#d5a353'
}
const iconStyles = {
  marginRight: 24,
};

const MessageIcon = (props) => (
<SvgIcon version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" enable-background="new 0 0 44 44">
  <g>
    <g>
      <g>
        <path d="M43,6H1C0.447,6,0,6.447,0,7v30c0,0.553,0.447,1,1,1h42c0.552,0,1-0.447,1-1V7C44,6.447,43.552,6,43,6z M42,33.581     L29.612,21.194l-1.414,1.414L41.59,36H2.41l13.392-13.392l-1.414-1.414L2,33.581V8h40V33.581z" fill="#fff" />
      </g>
    </g>
    <g>
      <g>
        <path fill="#fff" d="M39.979,8L22,25.979L4.021,8H2v0.807L21.293,28.1c0.391,0.391,1.023,0.391,1.414,0L42,8.807V8H39.979z"/>
      </g>
    </g>
  </g>
</SvgIcon>

);

class BadgeGen extends Component {
  render() {
    
        return(
            <div>
              <Badge badgeContent={12} primary={true}>
                <NotificationsIcon color={white}>
                  <IconButton tooltip="Уведомления">
                    <MessageIcon style={iconStyles} />
                 </IconButton>
                </NotificationsIcon>
              </Badge>
              <Badge badgeContent={10} secondary={true} badgeStyle={{top: 12, right: 12}}>
              <IconButton tooltip="Сообщения">
                <MessageIcon style={iconStyles} />
              </IconButton>
              </Badge>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        badge: state
    }
}
export default connect(mapStateToProps)(BadgeGen);