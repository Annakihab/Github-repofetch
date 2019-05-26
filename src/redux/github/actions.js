import axios from 'axios';
import moment from 'moment';

import {
  FETCH_TRENDING_FAILED,
  FETCH_TRENDING_SUCCESS,
  PROCESS_FETCH_TRENDING,
} from './types';

const API_URL = 'https://api.github.com/search/repositories';

const transformFilters = (filters) => {
  const transformedFilters = {};
  const startMoment = moment().add(-30, 'days');
  const reposDate = `created:>${startMoment.format()}`;
  transformedFilters.q =  reposDate;
  transformedFilters.sort = 'stars';
  transformedFilters.order = 'desc';
  return transformedFilters;
};

/**
 * @param {object} filters
 * @returns {Function}
 */
export const fetchTrending = function (filters) {
  return dispatch => {
    dispatch({ type: PROCESS_FETCH_TRENDING });

    axios.get(API_URL, {
      params: transformFilters(filters)
    }).then(response => {
      dispatch({
        type: FETCH_TRENDING_SUCCESS,
        payload: {
          data: response.data
        }
      })
      console.log(response.data);
   
    }).catch(error => {
      let message = error.response &&
        error.response.data &&
        error.response.data.message;
      if (!message) {
        message = error.message;
      }

      dispatch({
        type: FETCH_TRENDING_FAILED,
        payload: message
      });
    });
  };
};
