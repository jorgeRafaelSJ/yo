import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { catPostActions } from './duck';
import CatPosts from './component';

const CatPostsContainer = connect(
    //mapStateToProps
    (state) => ({ cats: state.catPosts }), 
    //mapDispatchToProps
    (dispatch) => bindActionCreators({ ...catPostActions }, dispatch)
)(CatPosts)

export default CatPostsContainer;