import {Row} from 'react-bootstrap'
import Tile from './Tile'
import React from 'react'

class BoardRow extends React.Component {
    render() {

        let tiles = [];
        for (let i = 0; i < this.props.numTiles; i++) {
            tiles.push(<Tile/>);
        }
        return <Row>{tiles}</Row>;
    }
}


BoardRow.defaultProps = {
    numTiles: 9
};

export default BoardRow;