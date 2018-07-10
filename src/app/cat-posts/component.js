import React, { Component } from 'react';
import CatPost from './components/cat-post';
import styled from 'styled-components';

const StyledPostsWrapper = styled.div`
    padding: 20px;
`;

const PostSectionTitle = styled.h3`
    font-weight: 200;
`;

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