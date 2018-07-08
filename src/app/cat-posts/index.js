import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CatPosts extends Component {

    componentWillMount() {
        console.log(this)
    }
    render() {
        return (
            <div>Hello World</div>
        )
    }
}

CatPosts = connect(
    (state) => ({
        catPosts: state.catPosts
    }), 
    (dispatch) => bindActionCreators({
        
    }, dispatch)
)(CatPosts)

export default CatPosts;