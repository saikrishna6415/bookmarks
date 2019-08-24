import React from 'react'
import {Card,Button} from 'react-bootstrap'

class Cards extends React.Component {
    render () {
        return (
            <Card style={{ width: 'auto' }}>
  <Card.Img variant="top" src={this.props.bookmark.image}  />
  <Card.Body>
    <Card.Title>{this.props.bookmark.title}</Card.Title>
    <Card.Text>
    {this.props.bookmark.description}
    </Card.Text>
    <Button  href={this.props.bookmark.url}variant="primary">visit website</Button>
  </Card.Body>
</Card>
        )
    }
}

export default Cards