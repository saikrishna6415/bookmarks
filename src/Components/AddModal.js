import React, { Component } from 'react'
import {Button,Image,Modal,InputGroup,FormControl,Navbar} from 'react-bootstrap'


class Addmodal extends Component {
    render () {
        return (
            <div>
                 <div className="modal-example">
        <Modal
          onHide={this.close}
          aria-labelledby="modal-label"
          show={this.state.showModal}
          renderBackdrop={this.renderBackdrop}>
        
          <div style={{padding:"15px"}}>
          <label htmlFor="url">Enter URL</label>
              <InputGroup className="mb-3">
                <FormControl id="url" aria-describedby="basic-addon3"placeholder="https://example.com"onChange={this.handleChange} />
              </InputGroup>
                 <label htmlFor="url">Preview</label>
                <InputGroup size="lg">
                  <InputGroup>
                   <FormControl as="textarea" disabled aria-label="With textarea" value={this.state.url}/>
                  </InputGroup>
               </InputGroup>
               <Modal.Footer>
                      <Button variant="secondary"onClick={this.close} >
                        Close
                      </Button>
                      <Button variant="primary"type="submit" >
                        Save Changes
                      </Button>
                  </Modal.Footer>
                  </div>
                    </Modal>
                  </div>
            </div>
        )
    }
}

export default Addmodal