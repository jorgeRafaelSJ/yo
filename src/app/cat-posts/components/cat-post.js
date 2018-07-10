import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'

class CatPost extends Component {

    render() {
        const onClickIcon = this.props.pinned ? this.props.unpinPost : this.props.pinPost;
        return(
        <div>
            <FontAwesomeIcon icon={ faMapPin } style={ this.props.pinned ? {color: 'red' } : { color: 'blue'} } onClick={ onClickIcon }/>
            <a href={`https://www.reddit.com${this.props.postData.permalink}`} target='blank'>{this.props.postData.title}</a>
        </div>
        )
    }
}

export default CatPost;