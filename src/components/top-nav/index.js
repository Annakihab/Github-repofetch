import React from 'react';
import './styles.css';

class TopNav extends React.Component {
 

  render() {
  

    return (
      <div className='top-nav'>
        <div className="container clearfix">
         
            <div className="logo-text">
              <h4>UNINTED REMOTES - Front End Coding Challenge</h4>
              <p className="text-muted d-none d-sm-inline-block d-md-inline-block d-xl-inline-block d-lg-inline-block">Feching the most starred github repositories created a month ago </p>
            </div>
         
 
        </div>
      </div>
    );
  }
}

export default TopNav;
