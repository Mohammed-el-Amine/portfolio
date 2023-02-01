import React, { Component } from 'react';
export default class About extends Component {
   render() {
      let resumeData = this.props.resumeData;
      return (
         <section id="about">
            <div className="row">

               <div className="three columns">

                  <img className="profile-pic" src="images/amine-djeljal.png" alt="me-pic profile" />

               </div>

               <div className="nine columns main-col">

                  <h2>À propos de moi</h2>
                  <p>
                     {
                        resumeData.aboutme
                     }
                  </p>

                  <div className="row">

                     <div className="columns contact-details">

                        <h2>Me contacter</h2>
                        <p className="address">
                           <span>{resumeData.name}</span>
                           <br></br>
                           <span>
                              {resumeData.address}
                           </span>
                           <br></br>
                           <span>{resumeData.website}</span>
                           <br /><br />
                           <span>{resumeData.website2}</span>
                           <br /><br />
                           <span>{resumeData.website3}</span>
                           <br /><br />
                           <a href='images/Djellal mohammed el amine.pdf' download>
                              <button>
                                 Télécharger mon C.V ?
                              </button>
                           </a>

                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}