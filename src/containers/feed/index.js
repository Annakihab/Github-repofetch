import React from 'react';
import { connect } from 'react-redux';
import './styles.css';
import TopNav from '../../components/top-nav';
import { fetchTrending } from '../../redux/github/actions';
import RepositoryList from '../../components/repository-list';

class FeedContainer extends React.Component {
 
  componentDidMount() {
    const existingRepositories = this.props.github.repositories || [];

    // If there are no loaded repositories before, fetch them
    if (existingRepositories.length === 0) {
      this.fetchNextRepositories();
    }
  }

  fetchNextRepositories() {
    const filters = this.getFilters();
    this.props.fetchTrending(filters);
  }
  getFilters() {
    const filters = {};
    return filters;
  }
  

  

  renderErrors() {
    if (!this.props.github.error) {
      return null;
    }
  }

  

  renderRepositoriesList() {
    return <RepositoryList
      repositories={ this.props.github.repositories || [] }
    />;
  }

  hasRepositories() {
    return this.props.github.repositories && this.props.github.repositories.length !== 0;
  }

  render() {
    return (
      <div className="page-wrap">
        <TopNav/>


        <div className="container mb-5 pb-4">
          <div className="body-row">
            { this.renderRepositoriesList() }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    github: store.github
  };
};

const mapDispatchToProps = {
  fetchTrending
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedContainer);
