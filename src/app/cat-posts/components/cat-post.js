import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledPostWrapper = styled.div`
    margin-bottom: 5px;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    background: linear-gradient(#fff, #eee);
`;

const StyledPostIcon = styled.div`
    font-size: 20px;
    margin-right: 10px;
    cursor: pointer;
    transition: color 0.4s ease;
    color: ${ props => props.pinned ? '#f00': '#33f'};

    &:hover {
        color: ${ props => props.pinned ? '#c44': '#88f'};
    }
`;

const StyledPostLink = styled.a`
    text-decoration: none;
    font-weight: 300;
    transition: color 0.4s ease;
    color: #88f;

    &:focus, &:visited {
        color: #88f;
    }

    &:hover {
        color: #33f;
    }

`;

class CatPost extends Component {

    render() {
        return(
        <StyledPostWrapper>
            <StyledPostIcon pinned={this.props.pinned}>
                <FontAwesomeIcon icon={ faMapPin } onClick={ this.props.onPinClick }/>
            </StyledPostIcon>

            <StyledPostLink href={`https://www.reddit.com${this.props.postData.permalink}`} target='blank'>
                {this.props.postData.title}
            </StyledPostLink>
        </StyledPostWrapper>
        )
    }
}

CatPost.propTypes = {
    postData: PropTypes.object.isRequired,
    onPinClick: PropTypes.func.isRequired,
    pinned: PropTypes.bool,

}

export default CatPost;