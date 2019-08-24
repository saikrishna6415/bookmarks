import React from 'react'
import {CardColumns} from 'react-bootstrap'
import Bookmarks from './Bookmarks'

class Main extends React.Component {
    render () {
        const bookmark_cards = this.props.bookmarks.map((bookmark, i) => <Bookmarks key={i} bookmark={bookmark}/>)

        return (
                <div><CardColumns>
                        {bookmark_cards}
                    </CardColumns>>
                </div>
        )
    }
}

export default Main