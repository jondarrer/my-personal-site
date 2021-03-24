import React from 'react';
import { Box, NavLink } from 'theme-ui';

// eslint-disable-next-line no-empty-function
const noOp = () => {};

/**
 * Provides a way to change from the current language to another one from the provided list
 *
 * @typedef {object} Props
 * @property {Number} currentPage The page number of the current page
 * @property {Number} totalItems The total number of items in all
 * @property {Number} pageSize How many items fit on a page
 * @property {Callback} onPageClick Called when a page is clicked
 */

const Paginator = ({
  currentPage = 0,
  totalItems = 0,
  pageSize = 10,
  // eslint-disable-next-line no-empty-function
  onPageClick = () => {},
}) => {
  const partialPage = totalItems % pageSize > 0 ? 1 : 0;
  let totalPages = totalItems / pageSize;
  totalPages += partialPage;

  const children = [];
  for (let p = 1; p <= totalPages; p += 1) {
    let child;
    switch (p) {
      case currentPage:
        child = (
          <Box
            key={p}
            aria-label={`Page Button ${p}`}
            as="span"
            role="tab"
            aria-selected={p === currentPage}
          >
            {p}
          </Box>
        );
        break;
      default:
        child = (
          <NavLink
            key={p}
            aria-label={`Page Button ${p}`}
            onClick={p === currentPage ? noOp : () => onPageClick({ page: p })}
            role="tab"
            aria-selected={p === currentPage}
            href={`?page=${p}`}
          >
            {p}
          </NavLink>
        );
    }
    children.push(child);
  }

  return <Box role="tablist">{children}</Box>;
};

export default Paginator;
