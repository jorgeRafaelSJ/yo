import React, { Component } from 'react';
import CatPost from './components/cat-post';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* STYLES */
const StyledPostsWrapper = styled.div`
    padding: 50px 25px;

    @media(min-width: 768px) {
        padding: 50px 100px;
    }
`;

const PostSectionTitle = styled.h3`
    font-weight: 200;
`;

/* COMPONENT */
export default class CatPosts extends Component {

    componentWillMount() {
        this.props.loadCatPosts()
    }

    render() {
        const { pinnedPosts, unpinnedPosts } = this.props.cats;

        const pinnedPostItems = pinnedPosts.map((post) => {
            return <CatPost key={ post.id } 
                            postData={ post } 
                            pinned={true} 
                            onPinClick={ this.props.unpinCatPost.bind(this, post.id) }/>
        });

        const unpinnedPostItems = unpinnedPosts.map((post) => {
            return <CatPost key={ post.id } 
                            postData={ post } 
                            onPinClick={ this.props.pinCatPost.bind(this, post.id) } />
        });

        return (
            <StyledPostsWrapper>
                { pinnedPostItems.length ? <PostSectionTitle>Pinned Posts:</PostSectionTitle> : '' }
                { pinnedPostItems }
                <PostSectionTitle>Unpinned Posts:</PostSectionTitle>
                { unpinnedPostItems }
            </StyledPostsWrapper>
        )
    }
}

/* PROP TYPES */
CatPosts.propTypes = {
    cats: PropTypes.shape({
        pinnedPosts: PropTypes.array.isRequired,
        unpinnedPosts: PropTypes.array.isRequired,
    }),
    pinCatPost: PropTypes.func.isRequired,
    unpinCatPost: PropTypes.func.isRequired,
    loadCatPosts: PropTypes.func.isRequired,
}