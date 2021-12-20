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
    this.dialog = null;
    this.setFocusRef = el =>{
      if(this.props.isOpen && el){
        this.focusRef = el
      }
    }
    this.state = { focus: false }
  }

  componentDidMount(){
    this.dialog = document.getElementById("modal-root");
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

  onKeyUp = (e) =>{
    const rootNode = document.getElementById("dialog1");
    if(rootNode.hasChildNodes()){
      let child = rootNode.childNodes;
      let lastchild = rootNode.lastChild;
      let prevNode = rootNode.parentNode;
    console.log("childNodes: ", child);
    console.log("lastChild: ", lastchild);
    console.log("prevNode: ", prevNode);
    if(rootNode.lastChild.contains(e.target) ){
      console.log("last Target: ", "Last Target");
      this.setFocus();
    }
    }
    // if(this.dialog.hasChildNodes()){
    //   let child = this.dialog.childNodes;
    //   let lastchild = this.dialog.lastChild;
    //   let prevNode = this.dialog.parentNode;
    //   let prevSibling = this.dialog.previousSibling;
    //   let target = this.dialog.contains(e.target);
    //   for (let i = 0; i < child.length; i++) {
    //     // do something with each child as children[i]
    //     // NOTE: List is live! Adding or removing children will change the list's `length`

    //   }
    //   console.log("childNodes: ", child);
    //   console.log("lastChild: ", lastchild);
    //   console.log("prevNode: ", prevNode);
    //   console.log("prevSibling: ", prevSibling);
    //   console.log("target: ", target);
    //   console.log("lastFocus: ", this.dialog.lastFocus);
    //   if(!this.dialog.contains(e.target)){
    //     console.log("hi! i'm here");
    //     this.setFocus();
    //     return;
    //    }

    // }
    
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
        <div>
           <Backdrop className={backdropClass} onClick={this.props.onClose}  >
          <div role="dialog" 
               id="dialog1"
              aria-labelledby="dialog1_label"
              className={modalClass} 
              open={this.props.isOpen}
              onKeyUp={(e) =>  this.onKeyUp(e)}
              >
              <h4 className="dialog_label" 
              onClick={this.setFocus}
              ref={this.focusRef}
              tabIndex="0"
              >{this.props.label}</h4>
            {this.props.children}
            <div tabIndex="0"></div>
          </div>
          
         </Backdrop>
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