import React from 'react';

// import react-testing methods
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Paginator from './';

describe('components/Paginator', () => {
  it('should show all the pages', () => {
    // Arrange
    // Act
    render(<Paginator currentPage={2} totalItems={80} pageSize={10} />);

    // Assert
    expect(screen.getAllByRole('tab')).toHaveLength(8);
  });
  it('should not call for the same page when clicked', () => {
    // Arrange
    const mockOnClickHandler = jest.fn();

    // Act
    render(
      <Paginator
        currentPage={2}
        totalItems={80}
        pageSize={10}
        onPageClick={mockOnClickHandler}
      />
    );
    const pageNo2Button = screen.getByLabelText('Page Button 2');
    fireEvent.click(pageNo2Button);

    // Assert
    expect(mockOnClickHandler).not.toHaveBeenCalled();
  });
  it('should call for the next page when clicked', () => {
    // Arrange
    const mockOnClickHandler = jest.fn();

    // Act
    render(
      <Paginator
        currentPage={2}
        totalItems={80}
        pageSize={10}
        onPageClick={mockOnClickHandler}
      />
    );
    const pageNo3Button = screen.getByLabelText('Page Button 3');
    fireEvent.click(pageNo3Button);

    // Assert
    expect(mockOnClickHandler).toHaveBeenCalledWith({ page: 3 });
  });
});
