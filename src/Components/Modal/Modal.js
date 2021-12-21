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
    this.focusRef = React.createRef();
    this.dialog = null;
    this.setFocusRef = el =>{
      if(this.props.isOpen && el){
        this.focusRef = el
      }
    }
    this.state = { focus: false,  focusChanges : false}
  }

  componentDidMount(){
    this.dialog = document.getElementById("modal-root");
  }

  componentDidUpdate(){
    this.setFocus();
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
        return !!element.href && element.rel != 'ignore';
      case 'INPUT':
        return element.type != 'hidden' && element.type != 'file';
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
      let firstChild = rootNode.firstChild;
      let lastchild = rootNode.lastChild;
      let prevNode = rootNode.parentNode;
    console.log("childNodes: ", child);
    console.log("lastChild: ", lastchild);
    console.log("prevNode: ", prevNode);
    console.log("firstChild: ", firstChild);

    // if(rootNode.lastChild.contains(e.target) ){
    //   console.log("last Target: ", "Last Target");
    //   this.setFocus();
    // }
    // if(rootNode.firstChild.contains(e.target) ){
    //   console.log("firstChild: ", "firstChild");
    //   this.setFocus();
    // }
    
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
        <div>
           <Backdrop className={backdropClass} onClick={this.props.onClose}  >
           <div className="focus_trap" tabIndex="0"></div>
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
              ref={this.focusRef}
              tabIndex="0"
              >
                {this.props.label}
              </h4>
            {this.props.children}
            </div>
          <div className="focus_trap" tabIndex="0"></div>
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