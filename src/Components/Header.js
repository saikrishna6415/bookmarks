import React from 'react'
import {Button,Image,Modal,InputGroup,FormControl,Navbar} from 'react-bootstrap'
import logo from './logo.png'
import plus from './plus.png'


class AddModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      showModal: false,
      url:[]
    };


    this.close = () => {
      this.setState({ showModal: false });
    };


    this.open = () => {
      this.setState({ showModal: true });
    };
    
    this.handleChange = this.handleChange.bind(this)
    this.handleChange = this.handleChange.bind(this)

    }
    
    handleChange(event) {
        this.setState({
            url: event.target.value
        })
    }
   componentDidMount(){
    var unfurled = require('unfurled')
 
    unfurled("http://google.com",{mode: "no-cors"})
      .then(console.log)
      .catch(console.error)

   }
  render() {
    return (
      <div>
      <Navbar className="bg-light justify-content-between">
      <Image src={logo} onClick={this.open}style={{width:"200px"}} fluid />

  <Image src={plus} onClick={this.open}style={{width:"50px",height:"50px"}} className=" mr-sm-2"rounded />

</Navbar>
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
    );
  }
}

export default AddModal