import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Pagination = ({ storiesPerPage, totalStories, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalStories / storiesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      <ul className="pagination-list">
        {pageNumbers.map(number => (
          <li key={number} className="pagination-list__item">
            <a className="item" onClick={() => paginate(number)} href="!#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  storiesPerPage: PropTypes.number,
  totalStories: PropTypes.number,
  paginate: PropTypes.func
};

export default Pagination;
