import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
               Envie de me contacter ?
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Linked in &nbsp;  : &nbsp; 
                  {resumeData.linkedinId} 
                </h4>
                <h4>Outlok &nbsp;  : &nbsp; 
                  {resumeData.outlookId} 
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}