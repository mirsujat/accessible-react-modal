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
    const KEYCODE = { tab: 9, shift: 16 };
    this.focusRef = React.createRef();
    this.dialog = document.getElementById("modal-root");
    this.setFocusRef = el =>{
      if(this.props.isOpen && el){
        this.focusRef = el
      }
    }
    this.state = { focus: false }
  }

  componentDidUpdate(){
    this.setFocus();
  }
  setFocus = () =>{
    if(this.props.isOpen){
      this.focusRef.current.focus();
    } 
  }

  onFocus = () =>{
    if(this.props.isOpen){
      this.setState({focus: true});
    }
  }
  onBlur = () =>{
    if(this.props.isOpen){
       this.setState({focus: false});
    }
  }

  onKeyDown = (e) =>{
    if(this.dialog.hasChildNodes()){
      let children = this.dialog.childNodes;
      let lastchild = this.dialog.lastChild;
      console.log("childNodes: ", children);
      console.log("lastChild: ", lastchild);
    }
   
    
  }

  render() {
   
    let content = null;
    let modalClass = "hidden";
    let backdropClass = "dialog-backdrop";

    if(!this.props.isOpen){
       body.classList.remove("has-dialog");
    }
     if(this.props.isOpen && this.props.label){
        console.log("focusRef: ", this.focusRef);
    }
    if (this.props.isOpen) {
      modalClass = "no-scroll";
      backdropClass = "dialog-backdrop active"
      body.classList.add("has-dialog");
      content = (
        <Fragment>
           <Backdrop className={backdropClass} onClick={this.props.onClose}  />
          <div role="dialog" 
               id="dialog1"
              aria-labelledby="dialog1_label"
              className={modalClass} 
              open={this.props.isOpen}
              onKeyDown={(e) =>  this.onKeyDown(e)}
              >
              <h4 className="dialog_label" 
              onClick={this.setFocus}
              ref={this.focusRef}
              tabIndex="0"
              >{this.props.label}</h4>
            {this.props.children}
          </div>
          <div ref={this.labelRef} tabIndex="0"></div>
        </Fragment>
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