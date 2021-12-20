import React, {Component} from 'react';
import Modal from "./Components/Modal/Modal";

import './App.css';

 class App extends Component{
   constructor(props){
    super(props);
   
    this.state = { open: false}
   }


   openModal = () =>{
     this.setState({open: true});
   }
   closeModal = () =>{
    this.setState({open: false});
   }
render(){
  return (
    <div className="App">
      <header className="App-header">
        Hello From Accessible React Modal
      </header>
      <section>
        <button  onClick={this.openModal} >Open Modal</button>
      </section>
      <section>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.</p>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat minus nesciunt itaque molestiae nisi esse a amet praesentium in rerum non, cupiditate autem laboriosam, unde inventore quidem accusantium cumque.
            </p> 
      </section>
      <Modal isOpen={this.state.open} 
      label="Awesome Modal"
      >
       <section>
         <h4>This a awesome Modal</h4>
         <p>This is a paragraph from awesome modal</p>
         <div className="content-footer">
           <button  onClick={this.closeModal} >Close</button>
           <button>Ok</button>
         </div>
       </section>
      </Modal>
    </div>
  );
}
}

export default App;
