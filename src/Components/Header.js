import React from 'react'
import {Button,Image,Modal,InputGroup,FormControl,Navbar} from 'react-bootstrap'
import logo from './logo.png'
import plus from './plus.png'
import axios from 'axios'
import Preview from './Preview'


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      showModal: false,
      url:'',
      apiResponse: "",
      Preview: false,
      fetched: false,
      status: ''
  }

  
}

onChange = event => {
  this.setState({
      url: event.target.value,
      Preview: false,
      fetched: false
  })
}

bookmarkpreview = (event) => {
  event.preventDefault()
  this.setState({
      Preview: true,
      status: 'loading preview...'
  })
  var url = {
      "urlgot": this.state.url
  }
  axios.post('https://api-bookmarker.herokuapp.com/url', url)
      .then(res => {
          if (res.data.hasError !== true) {
              this.setState({ apiResponse: res.data.other, fetched: true })
          }
          else {
              this.setState({ status: res.data.errorMsg })
          }
          console.log(res.data.other)
      })
      .catch(err => { this.setState({ status: "server error" }) })
}

addnewbookmark = () => {
  const newbookmark = {
      url: this.state.apiResponse.url,
      icon: this.state.apiResponse.icon,
      title: this.state.apiResponse.title,
      description: this.state.apiResponse.description
  }
  console.log(newbookmark)
 this.props.addbookmark(newbookmark)
  this.setState({
    showModal:false
  })
}

    close = () => {
      this.setState({ showModal: false });
    };


    open = () => {
      this.setState({ showModal: true });
    };
  
  
   
  render() {
    return (
      <div>
      <Navbar className="bg-light justify-content-between">
          <Image src={logo} style={{width:"200px"}} fluid />
          <Image src={plus} onClick={this.open}style={{width:"50px",height:"50px"}} className=" mr-sm-2"rounded />
      </Navbar>
        <div className="modal-example">
        <Modal
          onHide={this.close}
          aria-labelledby="modal-label"
          show={this.state.showModal}>        
          <div style={{padding:"15px"}}>
          <label htmlFor="url">Enter URL</label>
              <InputGroup className="mb-3">
                <FormControl onChange={this.onChange}id="url" aria-describedby="basic-addon3"placeholder="https://example.com"/>
              </InputGroup>
                 <label htmlFor="url">Preview</label>
                 {this.state.Preview && <Preview other={this.state.apiResponse} fetched={this.state.fetched} status={this.state.status}/>}

               <Modal.Footer>
                      <Button variant="secondary"onClick={this.close} >
                        Close
                        </Button>
                        {this.state.fetched
                            ?
                            <Button onClick={this.addnewbookmark} variant="primary">Add bookmark</Button>
                            :
                            <Button onClick={this.bookmarkpreview}variant="primary" >Preview</Button>                        }
                           
                  </Modal.Footer>
                  </div>
                    </Modal>
                  </div>
                  </div>
    );
  }
}

export default Header