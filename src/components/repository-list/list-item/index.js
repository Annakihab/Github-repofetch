import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import moment from 'moment';
class ListItem extends React.Component {
  render() {
    return (
      <div className="col-12 list-item-container">
        <div className="list-item-body">
            <img className='author-img'
               src={ this.props.repository.owner.avatar_url }
               onError={ (e) => {
                 e.target.src = '/img/logo.svg';
               } }
               alt={ this.props.repository.owner.login }/>
          <div className="repo-header">
            <h3>
              <a href={ this.props.repository.html_url } rel="noopener noreferrer" target="_blank">
                <span className="text-normal">{ this.props.repository.owner.login } / </span>
                { this.props.repository.name }
              </a>
            </h3>
          </div>
          <div className="repo-body">
            <p>{ this.props.repository.description || 'No description given.' }</p>
          </div>
          <div className="repo-footer">
            
            <a className="muted-link d-inline-block mr-3"
               href={ `${this.props.repository.html_url}/stargazers` }
               rel="noopener noreferrer"
               target="_blank">
               <span className="Item-label label-info">Stars : { this.props.repository.stargazers_count.toLocaleString()}</span>
          
            </a>
            <a className="muted-link d-inline-block mr-3"
               href={ `${this.props.repository.html_url}/network/members` }
               rel="noopener noreferrer"
               target="_blank">
              <span className="Item-label label-info">Issues : { this.props.repository.open_issues.toLocaleString() }</span>
            </a>
            <a className="muted-link d-inline-block mr-3">
             <p className="repo-meta text-muted small">Submitted {moment().diff(moment((this.props.repository.created_at)),'days')} days ago by <a href={ this.props.repository.owner.html_url } rel="noopener noreferrer" target="_blank"> { this.props.repository.owner.login }</a></p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

ListItem.propTypes = {
  repository: PropTypes.object.isRequired
};

export default ListItem;
