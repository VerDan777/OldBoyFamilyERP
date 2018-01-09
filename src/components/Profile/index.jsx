import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Profile1 } from '../../actions';
import { avatar } from '../../assets/img/avatar.jpg';
import Avatar from 'material-ui/Avatar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 1};
      }
    handleChange = (event, index, value) => this.setState({value});
    render() {
       const  { dispath } = this.props;
        return(
            <div>
            <div style={{display: "flex", alignItems: "center", paddingLeft: "25px"}}>
                <Avatar>Д</Avatar>
                <h3 style={{paddingLeft: "20px", color: "#fff", fontWeight: "300", fontFamily: "RexBold, sans-serif"}}>Даниил Верещагин</h3>
                <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                    <MenuItem value={1}  />
                    <MenuItem value={2} primaryText="Every Night" />
                    <MenuItem value={3} primaryText="Weeknights" />
                    <MenuItem value={4} primaryText="Weekends" />
                    <MenuItem value={5} primaryText="Weekly" />
                </DropDownMenu>
                
            </div>
           </div>
        )
    }
}
function mapStateToProps(state) {
    name: typeof state;
}
const mapDispatchToProps = (dispatch) => {
    return {
      onTodoClick: () => {
        dispatch(Profile1('Danil', 'Vereschagin'))
      }
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Profile);