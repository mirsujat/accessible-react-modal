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

    this.KEYCODE = { tab: 9, shift: 16,  Esc: 27};
    //prev  element to be focus out side dialog
    this.prevElRef = React.createRef();
    //next element to be focus out side dialog
    this.nextElRef = React.createRef();
    // first focusable element inside dialog
    this.firstFocus = React.createRef();
    // last focusable element inside dialog
    this.lastFocus = React.createRef();
   
     //focusAfterClose that will receive focus after modal close
     this.focusAfterClose = null;
     if(!this.props.focusAfterClose){
        console.log("You should provide > focusAfterClose < props to receive focus when modal being closed.");
     }
     if(this.props.focusAfterClose){
        this.focusAfterClose =  window.document.getElementsByClassName("focusAfterClose");
      }
   
    //init state
    this.state = { focus: false}

  }


  componentDidUpdate(){
    this.setFocus();
  }
 
  setFocus = () =>{
    if(!this.props.isOpen) return; 
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
    const rootNode = document.getElementById(`${this.props.id}`);
    if(rootNode.hasChildNodes()){
      if(rootNode.nextSibling.contains(e.target)){
          this.setFocus();
     }
     if(rootNode.previousSibling.contains(e.target)){
        this.lastFocus.current.focus();
     }
    }
   if(e.keyCode === 32){
    this.handleClose();
   }
  //  console.log("keyCode: ", e.keyCode);
  }

handleClose = () =>{
  if(this.props.focusAfterClose){
    this.props.onClose();
    this.focusAfterClose[0].focus();
  }
  this.props.onClose()
}

  render() {
    
    let content = null;
    let modalClass = "hidden";
    let backdropClass = "dialog-backdrop";

    if(!this.props.isOpen){
       body.classList.remove("has-dialog");
    }

    if (this.props.isOpen ) {
      modalClass = "no-scroll";
      backdropClass = "dialog-backdrop active"
      body.classList.add("has-dialog");
      content = (
        <>
           <Backdrop className={backdropClass} onClick={this.handleClose}  > </Backdrop>
           <div id="first" className="focus_trap" tabIndex="0" ref={this.prevElRef} 
           onKeyUp={(e) =>  this.onKeyUp(e)}></div>
           <div role="dialog" 
               id={this.props.id}
               aria-modal="true"
              aria-labelledby={this.props.label}
              className={modalClass} 
              open={this.props.isOpen}
              onKeyUp={(e) =>  this.onKeyUp(e)}
              >
              <div 
              id={this.props.label}
              className="dialog_label" 
              >
                <span
                className={this.props.titleStyle ? this.props.titleStyle : "dialog_title"}
                onClick={this.setFocus}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                ref={this.firstFocus}
                tabIndex="0">
                  {this.props.label}
                </span>
              </div>
            {this.props.children}

              <button className={this.props.cancelBtnStyle} onClick={this.handleClose} 
              ref={this.lastFocus}>Cancel</button>
            </div>
          <div id="last" className="focus_trap" tabIndex="0" ref={this.nextElRef}
          onKeyUp={(e) =>  this.onKeyUp(e)}  ></div>
        
        </>
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