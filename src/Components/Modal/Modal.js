import React,{Component, Fragment} from 'react';
import ReactDOM from "react-dom";

const body = document.body;
const modalRoot = document.getElementById("modal-root");


class Portal extends Component {
  constructor(props) {
    super(props);
    this.container = document.createElement("div");
  }

  componentDidMount() {
      modalRoot.appendChild(this.container);
  }
  componentWillUnmount() {
   modalRoot.removeChild(this.container);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.container);
  }
}

const Backdrop = props => <div className={props.className} {...props} />;

class Modal extends Component {
  constructor(props){
    super(props);
    this.KEYCODE = { tab: 9, shift: 16 };
    //prev  element to be focus out side dialog
    this.prevElRef = React.createRef();
    //next element to be focus out side dialog
    this.nextElRef = React.createRef();
    // first focusable element inside dialog
    this.firstFocus = React.createRef();
    // last focusable element inside dialog
    this.lastFocus = React.createRef();
    
    
    //focusAfterClose
    this.state = { focus: false}
  }

  componentDidMount(){
    this.dialog1 = document.getElementById("dialog1");
   
    
  }

  componentDidUpdate(){
    this.setFocus();
  
  }
 

  setFocus = () =>{
    if(this.props.isOpen){
      this.firstFocus.current.focus();
    } 
  }

  onFocus = () =>{
    if(this.props.isOpen){
      this.setState({focus: true});
    }
  }
  onBlur = () =>{
    if(!this.props.isOpen){
       this.setState({focus: false});
    }
  }

  onKeyUp = (e) =>{
    const rootNode = document.getElementById("dialog1");
    if(rootNode.hasChildNodes()){
      if(rootNode.nextSibling.contains(e.target)){
          this.setFocus();
     }
     if(rootNode.previousSibling.contains(e.target)){
        this.lastFocus.current.focus();
     }
    }
  }



  render() {
   
   

    let content = null;
    let modalClass = "hidden";
    let backdropClass = "dialog-backdrop";

    

    if(!this.props.isOpen){
       body.classList.remove("has-dialog");
    }
    //TODO
     if(this.props.isOpen && this.props.label){
    }
    if (this.props.isOpen) {
      modalClass = "no-scroll";
      backdropClass = "dialog-backdrop active"
      body.classList.add("has-dialog");
      content = (
        <div>
           <Backdrop className={backdropClass} onClick={this.props.onClose}  > </Backdrop>
           <div id="first" className="focus_trap" tabIndex="0" ref={this.prevElRef} 
           onKeyUp={(e) =>  this.onKeyUp(e)}></div>
           <div role="dialog" 
               id="dialog1"
               aria-modal="true"
              aria-labelledby={this.props.label}
              className={modalClass} 
              open={this.props.isOpen}
              onKeyUp={(e) =>  this.onKeyUp(e)}
              >
             
              <h4 
              id={this.props.label}
              className="dialog_label" 
              
              >
                <span
                className="dialog_title"
                onClick={this.setFocus}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                ref={this.firstFocus}
                tabIndex="0">
                  {this.props.label}
                </span>
               
              </h4>
            {this.props.children}
            <div className="content-footer">
                <button>Ok</button>
                <button  onClick={this.props.onClose} ref={this.lastFocus}>Cancel</button>
            </div>
            </div>
          <div id="last" className="focus_trap" tabIndex="0" ref={this.nextElRef}
          onKeyUp={(e) =>  this.onKeyUp(e)}  ></div>
        
        </div>
      );
    }
    return (
      <Portal>
        <Fragment>{content}</Fragment>
      </Portal>
    );
  }
}

export default Modal;