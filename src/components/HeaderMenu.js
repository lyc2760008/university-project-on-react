import React from 'react';
import './MovieDetails.css'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
class HeaderMenu extends React.Component{
  //handle show or hide the About component
    state={
        show: false
    }

    handleClose = () => {
      //close About Modal  
        this.setState({show: false})
    }

    handleShow = () => {
      //show About Modal
        this.setState({show: true})
    }

    render(){
        return (
            //Learned how to use Model and Button from https://react-bootstrap.github.io/components/modal/
            <>
            <Button variant="primary" onClick={this.handleShow}>
              About
            </Button>
      
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>COMP4513 - Assignment1</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Group member: Yichen Li</p>
                <p><a href='https://lyc2760008.github.io/test'>Github Link</a></p>
                <p>Technology used: React</p>
                <p>Learning sources:</p>
                <ul className="fa-ul"> 
                  <li><i className="fa-li fa fa-check-square"></i><a href='https://www.youtube.com/watch?v=ZZS1irWSfxc&t=325s'>How to use localStorage with React</a></li>
                  <li><i className="fa-li fa fa-check-square"></i><a href='https://www.youtube.com/watch?v=NUQkajBdnmQ'>How to create page transitions with React Router</a></li>
                  <li><i className="fa-li fa fa-check-square"></i><a href='https://react-bootstrap.github.io/components/modal/'>Modals</a></li>
                  <li><i className="fa-li fa fa-check-square"></i><a href='https://www.robinwieruch.de/react-warning-cant-call-setstate-on-an-unmounted-component'>
                    Prevent React setState on unmounted Component</a></li>
                  <li><i className="fa-li fa fa-check-square"></i><a href='https://stackoverflow.com/questions/41852818/react-fade-in-element'>Toggle Animation</a></li>
                </ul>
                <p>Third party code used: <a href=' https://codepen.io/kunihiko_sugiura/pen/YGbmKj'>Half star for ratings</a></p>

              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        )
    }
}
export default HeaderMenu;

