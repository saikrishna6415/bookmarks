import React from 'react'
import {Card,Button} from 'react-bootstrap'

class Preview extends React.Component {
    render () {
        return (
            <div>
            {this.props.fetched
                ?
                <Card style={{ width: 'auto' }}>
                <Card.Img variant="top" src={this.props.other.icon}  />
                <Card.Body>
                  <Card.Title>{this.props.other.title}</Card.Title>
                  <Card.Text>
                  {this.props.other.description}
                  </Card.Text>
                  
                  <Button href={this.props.other.url}variant="primary">visit website</Button>
                </Card.Body>
              </Card>
                :
                <Card.Footer>{this.props.status}</Card.Footer>
            }
            </div>
        )
    }
}

export default Preview