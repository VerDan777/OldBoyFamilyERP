import React, { Component } from 'react';
import SearchBar from 'material-ui-search-bar';
import { connect } from 'react-redux';
import { actionInput, action } from '../../actions';

class SearchBarHeader extends Component {


    render() {
        const { dispatch } = this.props;
        return(
            <SearchBar
                onChange={() => dispatch(action())}
                onRequestSearch={() => console.log('onRequestSearch')}
                style={{
                    margin: '0 auto',
                    maxWidth: 800
      }}
    />
        )
    }
}
export default connect(state =>({data: state})) (SearchBarHeader);