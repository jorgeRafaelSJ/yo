import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { catPostActions } from './duck';
import CatPost from './components/cat-post';

class CatPosts extends Component {

    componentWillMount() {
        this.props.loadCatPosts()
    }

    unpinPost(i) {
        console.log('unpin', i)
        this.props.unpinCatPost(i);
    }

    pinPost(i) {
        console.log('pin', i)
        this.props.pinCatPost(i);
    }

    render() {
        const { pinnedPosts, unpinnedPosts } = this.props.cats;

        const pinnedPostItems = pinnedPosts.map((post) => {
            return <CatPost key={ post.id } postData={ post } pinned={true} unpinPost={ this.unpinPost.bind(this, post.id) }/>
        });

        const unpinnedPostItems = unpinnedPosts.map((post) => {
            return <CatPost key={ post.id } postData={ post } pinPost={ this.pinPost.bind(this, post.id) } />
        });

        return (
            <div>
                { pinnedPostItems }
                { unpinnedPostItems }
            </div>
        )
    }
}

CatPosts = connect(
    //mapStateToProps
    (state) => ({ cats: state.catPosts }), 
    //mapDispatchToProps
    (dispatch) => bindActionCreators({ ...catPostActions }, dispatch)
)(CatPosts)

export default CatPosts;