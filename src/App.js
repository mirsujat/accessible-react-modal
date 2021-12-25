import React, { Component } from 'react';
import Modal from "./Components/Modal/Modal";


import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
   
    this.state = { open: false, id: null }
  }

 

  openModal = (dialogId) => {
    this.setState({ open: true, id: dialogId });
  }
  closeModal = () => {
    this.setState({ open: false });
  }

   

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Hello From Accessible React Modal
        </header>
        <section>
          <button className="focusAfterClose"  onClick={ () =>  this.openModal("dialog1")} >Awesome Modal</button>
        </section>
        <section>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>
        </section>
        <Modal
          id="dialog1"
          isOpen={this.state.id === "dialog1" ? this.state.open : false}
          onClose={this.closeModal}
          label="Awesome Modal"
          focusAfterClose="focusAfterClose"
        >
          <section>
            <h4>This a awesome Modal </h4>
            <p>This is a paragraph from awesome modal</p>
          </section>
             <button>Ok</button>
             <button onClick={()=> this.openModal("dialog2")}>Process Next</button>
        </Modal>
        <Modal
          id="dialog2"
          isOpen={this.state.id === "dialog2" ? this.state.open : false}
          onClose={this.closeModal}
          label="Awesome Modal"
          focusAfterClose="focusAfterClose"
        >
          <section>
            <h4>This a awesome Modal </h4>
            <p>This is a paragraph from awesome modal</p>
          </section>
             <button>Confirm</button>
             
        </Modal>
      </div>
    );
  }
}

export default App;
