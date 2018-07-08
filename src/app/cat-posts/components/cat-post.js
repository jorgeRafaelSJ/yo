import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'

class CatPost extends Component {
    componentWillMount() {
        console.log(this.props)
    }

    render() {
        return(
        <div>
            <FontAwesomeIcon icon={faMapPin} style={{color: 'red'}} onClick={this.props.onPinClick}/>
            <a href={`https://www.reddit.com${this.props.postData.permalink}`} target='blank'>{this.props.postData.title}</a>
        </div>
        )
    }
}

export default CatPost;