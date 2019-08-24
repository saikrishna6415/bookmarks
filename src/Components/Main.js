import React from 'react'
import {CardColumns} from 'react-bootstrap'
import Bookmarks from './Bookmarks'

class Main extends React.Component {
    render () {
        const cards = this.props.bookmarks.map((bookmark, i) => <Bookmarks key={i} bookmark={bookmark}/>)

        return (
                <div><CardColumns>
                        {cards}
                    </CardColumns>>
                </div>
        )
    }
}

export default Main