import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions/index';
import {Link} from 'react-router';


class PostsNew extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props) {
        let input = {
            title: props.title,
            boardDetail: {
                memo: props.memo,
                writer: props.writer
            }
        };

        this.props.createPost(input)
            .then(() => {
                this.context.router.push("/")
            });
    }

    render() {
        const {fields: {title, memo, writer}, handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>게시판 글쓰기</h3>
                <div className={`form-group' ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                    <label>제목</label>
                    <input type='text' className='form-control' {...title} />
                    <div className="text-help">
                        {title.touched ? title.error : ''}
                    </div>
                </div>
                <div className={`form-group' ${memo.touched && memo.invalid ? 'has-danger' : ''}`}>
                    <label>내용</label>
                    <textarea className='form-control' {...memo} />
                    <div className="text-help">
                        {memo.touched ? memo.error : ''}
                    </div>
                </div>
                <div className={`form-group' ${writer.touched && writer.invalid ? 'has-danger' : ''}`}>
                    <label>작성자</label>
                    <input type='text' className='form-control' {...writer} />
                    <div className="text-help">
                        {writer.touched ? writer.error : ''}
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">생성</button>
                <Link to="/" className="btn btn-danger">취소</Link>
            </form>

        );
    }
}

function validate(values) {
    const errors = {};
    if (!values.title) {
        errors.title = '제목을 입력하세요.';
    }

    if (!values.memo) {
        errors.memo = '내용을 입력하세요.';
    }

    if (!values.writer) {
        errors.writer = '작성자명을 입력하세요.';
    }
    return errors;
}

export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title', 'memo', 'writer'],
    validate
}, null, {createPost})(PostsNew);
