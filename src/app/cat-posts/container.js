import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { catPostsActions } from './duck';
import CatPost from './components/cat-post';

class CatPosts extends Component {

    componentWillMount() {
        this.props.loadCatPosts()
        console.log(this)
    }

    render() {
        const posts = this.props.cats.posts
            // .sort((a, b) => {
            //     console.log(a.data, b.data)
            // })
            .map((post, i) => {
                return <CatPost key={ i } postData={ post.data } onPinClick={this.onPinClick}/>
            })

        return (
            <div>
                { posts }
            </div>
        )
    }
}

CatPosts = connect(
    //mapStateToProps
    (state) => ({
        cats: state.catPosts
    }), 
    //mapDispatchToProps
    (dispatch) => bindActionCreators({
        loadCatPosts: catPostsActions.loadCatPosts
    }, dispatch)
)(CatPosts)

export default CatPosts;