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
    this.focusFirst = React.createRef();
    this.firstFocus = React.createRef();
    this.lastFocus = React.createRef();
    this.dialog = null;
     this.dialog1 = null || {};
    this.setFocusRef = el =>{
      if(this.props.isOpen && el){
        this.focusFirst = el
      }
    }
    this.state = { focus: false,  focusChanges : false}
  }

  componentDidMount(){
    this.dialog = document.getElementById("modal-root");
    this.dialog1 = document.getElementById("dialog1");
    console.log("dialog: ", this.dialog);
  }

  // componentDidUpdate(){
  //   this.setFocus();
  // }

 

 

  setFocus = () =>{
    if(this.props.isOpen){
      this.focusFirst.current.focus();
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
    if(rootNode.hasChildNodes() ){
      let childNodes = rootNode.childNodes;
      let children = rootNode.children;
      let firstChild = rootNode.firstChild;
      let lastchild = rootNode.lastChild.lastChild;
      let parentNode = rootNode.parentNode;
      let previousSibling = rootNode.previousSibling;
      let nextSibling = rootNode.nextSibling;
      // this.focusFirstDescendant(rootNode);
      this.focusLastDescendant(rootNode);

    console.log("childNodes: ", childNodes);
    // console.log("children: ", children);
    // console.log("lastChild: ", lastchild);
    // console.log("prevNode: ", parentNode);
    // console.log("firstChild: ", firstChild);
    // console.log("previousSibling: ", previousSibling);
    // console.log("nextSibling: ", nextSibling);

    }
  }

  
 focusFirstDescendant = function (element) {
    for (var i = 0; i < element.childNodes.length; i++) {
      var child = element.childNodes[i];
      if (this.attemptFocus(child) ||
          this.focusFirstDescendant(child)) {
        return true;
      }
    }
    return false;
  }; // end focusFirstDescendant

  /**
   * @desc Find the last descendant node that is focusable.
   * @param element
   *          DOM node for which to find the last focusable descendant.
   * @returns
   *  true if a focusable element is found and focus is set.
   */
  focusLastDescendant = function (element) {
    for (var i = element.childNodes.length - 1; i >= 0; i--) {
      var child = element.childNodes[i];
      if (this.attemptFocus(child) ||
          this.focusLastDescendant(child)) {
        return true;
      }
    }
    return false;
  }; // end focusLastDescendant

  isFocusable = function (element) {
    if (element.tabIndex > 0 || (element.tabIndex === 0 && element.getAttribute('tabIndex') !== null)) {
      return true;
    }
  
    if (element.disabled) {
      return false;
    }
  
    switch (element.nodeName) {
      case 'A':
        return !!element.href && element.rel !== 'ignore';
      case 'INPUT':
        return element.type !== 'hidden' && element.type !== 'file';
      case 'BUTTON':
      case 'SELECT':
      case 'TEXTAREA':
        return true;
      default:
        return false;
    }
  }; // End isFocusable
  attemptFocus = function (element) {
    if (!this.isFocusable(element)) {
      return false;
    }

    this.setState({focusChanges : true });

    try {
      element.focus();
    }
    catch (e) {
    }
    this.setState({focusChanges : false });
    return (document.activeElement === element);
  }; // end attemptFocus

  render() {
   
    let content = null;
    let modalClass = "hidden";
    let backdropClass = "dialog-backdrop";
    

    if(!this.props.isOpen){
       body.classList.remove("has-dialog");
    }
     if(this.props.isOpen && this.props.label){
        console.log("focusFirst: ", this.focusFirst);
    }
    if (this.props.isOpen) {
      modalClass = "no-scroll";
      backdropClass = "dialog-backdrop active"
      body.classList.add("has-dialog");
      content = (
        <div>
           <Backdrop className={backdropClass} onClick={this.props.onClose}  >
           <div id="first" className="focus_trap" tabIndex="0" ref={this.firstFocus}></div>
           <div role="dialog" 
               id="dialog1"
               aria-modal="true"
              aria-labelledby="dialog1_label"
              className={modalClass} 
              open={this.props.isOpen}
              onKeyUp={(e) =>  this.onKeyUp(e)}
              >
             
              <h4 className="dialog_label" 
              onClick={this.setFocus}
              ref={this.focusFirst}
              tabIndex="0"
              >
                {this.props.label}
              </h4>
            {this.props.children}
            </div>
          <div id="last" className="focus_trap" tabIndex="0" ref={this.lastFocus}></div>
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