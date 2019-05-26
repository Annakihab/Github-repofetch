import React from 'react';
import './styles.css';
import ListItem from './list-item';



class RepositoryList extends React.Component {

  renderGroup(repositoryGroup, counter) {
    

    
    const repositories = repositoryGroup.data.items;

    return (
     
        <div className="row list-container">
          { repositories.map(repository => <ListItem repository={ repository } key={ repository.id }/>) }
        </div>
   
    );
  }

  render() {
    return (
      <div className="repositories-list">
        {
          this.props.repositories.map((repositoryGroup, counter) => {
            return this.renderGroup(repositoryGroup, counter);
          })
        }
      </div>
    );
  }
}



export default RepositoryList;
