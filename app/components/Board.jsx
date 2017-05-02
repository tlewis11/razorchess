import React from 'react'
import BoardRow from './BoardRow'

export default class Board extends React.Component {
    render() {
        return <div className="board container">
            <BoardRow/>
            <BoardRow/>
            <BoardRow/>
            <BoardRow/>
            <BoardRow/>
            <BoardRow/>
            <BoardRow/>
            <BoardRow/>
            <BoardRow/>
        </div>
    }
}