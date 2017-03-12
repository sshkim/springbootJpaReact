import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index'
import {Link} from 'react-router';

class PostsIndex extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return this.props.posts.map((post) => {
            let id = post._links.self.href.substring(post._links.self.href.lastIndexOf("/"));

            return (
                <li className="list-group-item" key={id}>
                    <Link to={"boards" + id}>
                        <span className="pull-xs-right">{post.writer}</span>
                        <strong>{post.title}</strong>
                    </Link>
                </li>
            );
        })
    }

    render() {
        return (
            <div>
                <div className='text-xs-right'>
                    <Link to="/boards/new" className="btn btn-primary">
                        생성
                    </Link>
                </div>
                <h3>게시판</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {posts: state.posts.all};
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);
