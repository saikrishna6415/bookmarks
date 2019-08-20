import React from 'react'
import Bookmarks from './Bookmarks';
import {CardColumns} from 'react-bootstrap'

class Main extends React.Component {
    render () {
        return (
                <div><CardColumns>
                    <Bookmarks />
                    <Bookmarks />
                    <Bookmarks />
                    <Bookmarks />
                    <Bookmarks />
                    <Bookmarks />
                    <Bookmarks />
                    <Bookmarks />
                    <Bookmarks />
                    </CardColumns>>
                </div>
        )
    }
}

export default Main