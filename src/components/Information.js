import React from 'react';

class Information extends React.Component {
   constructor(props) {
   super(props);

   }
   render(){
     return (
         <section className="main__information">
             <div className="information center">
                 <p>Drodzy użytkownicy! Witam na stronie PWW - Przeglądaj Wyszukaj Wylosuj, na której możesz przeglądać
                     filmy
                     znajdujące się w naszej bazie danych, możesz wyszukać konkretny tytuł lub wylosować film na
                     wieczór. </p>
             </div>
         </section>


     )
   }
 }

 export default Information;