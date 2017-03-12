import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions/index'
import {Link} from 'react-router';

class PostsShow extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {
        this.props.fetchPost(this.props.params.id);
    }

    onDeleteClick(props) {
        this.props.deletePost(this.props.params.id)
            .then(() => {
                this.context.router.push("/")
            });
    }

    render() {
        const {post} = this.props;

        if (!this.props.post) {
            return <div>잠시만 기다려주세요...</div>
        }
        return (
            <div>
                <Link to="/">메인</Link>
                <button className="btn btn-danger pull-xs-right"
                        onClick={this.onDeleteClick.bind(this)}>
                    삭제
                </button>
                <h3>{post.title}</h3>
                <h6>내용: {post.boardDetail.memo}</h6>
                <p>{post.boardDetail.writer}</p>
            </div>
        );

    }
}

function mapStateToProps(state) {
    return {post: state.posts.post};
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);
