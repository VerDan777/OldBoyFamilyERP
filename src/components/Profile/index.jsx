import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Profile1 } from '../../actions';

class Profile extends Component {
    render() {
       const  { dispath } = this.props;
        return(
            <div>
                <h1>{this.props.name}</h1>
                <button onClick={this.props.onTodoClick}></button>
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