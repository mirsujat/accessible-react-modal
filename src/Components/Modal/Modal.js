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
    this.focusRef = React.createRef();
    this.setFocusRef = el =>{
      if(this.props.open && el){
        this.focusRef = el
      }
    }
    this.state = { focus: false }
  }

  componentDidMount(){
    this.setFocus();
  }
  setFocus = () =>{
    if(this.props.open){
      this.focusRef.focus();
    }
  }

  onFocus = () =>{
    if(this.props.open){
      this.setState({focus: true});
    }
  }
  onBlur = () =>{
    if(this.props.open){
       this.setState({focus: false});
    }
  }

  render() {
   
    let content = null;
    let modalClass = "hidden";
    let backdropClass = "dialog-backdrop";

    if(!this.props.open){
       body.classList.remove("has-dialog");
    }
     if(this.props.open && this.props.label){
        console.log("focusRef: ", this.focusRef);
    }
    if (this.props.open) {
      modalClass = "no-scroll";
      backdropClass = "dialog-backdrop active"
      body.classList.add("has-dialog");
      content = (
        <Fragment>
           <Backdrop className={backdropClass} onClick={this.props.onClose} />
          <div role="dialog" 
               id="dialog1"
              aria-labelledby="dialog1_label"
              aria-modal="true" 
              className={modalClass} open={this.props.open}
              >
              <h4 className="dialog_label" 

              ref={this.setFocusRef}
              onFocus={this.onFocus}
              onBlur={this.onBlur} 
              tabIndex="0"
              
              >{this.props.label}</h4>
            {this.props.children}
          </div>
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