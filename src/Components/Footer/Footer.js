import React from 'react';
const Footer = () => {
    let date = new Date()
    return(
        <footer>
          <p>Design and Develop by Mir Sujat, &copy; {date.getFullYear()}, E-mail: mir.sujat@gmail.com,  
          <a className="download_link" href="https://github.com/mirsujat/accessible-react-modal" target="_blank" rel="noreferrer">
          Download Source Code 
          </a> 
          </p>
      </footer>
    )
}
   

export default Footer;