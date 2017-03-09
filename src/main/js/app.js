'use strict';

/**
 * Created by sshkim on 2017. 3. 7..
 */
const React = require('react');
const ReactDOM = require('react-dom')
const client = require('./client');


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {boards: []};
    }

    componentDidMount() {
        client({method: 'GET', path: '/api/boards'}).done(response => {
            this.setState({boards: response.entity._embedded.boards});
    });
    }

    render() {
        return (
            <BoardList boards={this.state.boards}/>
    )
    }
}


class BoardList extends React.Component{
    render() {
        var boards = this.props.boards.map(board =>
            <Board key={board._links.self.href} board={board}/>
        );
        return (
            <table>
                <tbody>
                <tr>
                    <th>Title</th>
                    <th>Memo</th>
                    <th>Writer</th>
                </tr>
                {boards}
                </tbody>
            </table>
        )
    }
}

class Board extends React.Component{
    render() {
        return (
            <tr>
                <td>{this.props.board.title}</td>
                <td>{this.props.board.boardDetail.memo}</td>
                <td>{this.props.board.boardDetail.memo}</td>
            </tr>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('react')
)