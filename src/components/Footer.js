import React from 'react';
import {db} from '../firebase'

class Footer extends React.Component {
   constructor(props) {
   super(props);

   }
   render(){
     return (
         <footer className="main__copyrights">
             <div className="copyrights center">
                 <div>
                     <span>Alicja Łuczyńska </span><i className="far fa-hand-spock"></i><span> 2018</span>
                 </div>
                 <div>
                     <a href="http://facebook.com/nie.dama" target="_blank">
                         <i className="fab fa-facebook socialmedia__icon"></i>
                     </a>
                     <a href="https://github.com/alicjalu" target="_blank">
                         <i className="fab fa-github socialmedia__icon"></i>
                     </a>
                     <a href="https://www.linkedin.com/in/alicja-%C5%82uczy%C5%84ska-949772127/" target="_blank">
                         <i className="fab fa-linkedin socialmedia__icon"></i>
                     </a>
                 </div>
             </div>
         </footer>


     )
   }
 }

export default Footer;