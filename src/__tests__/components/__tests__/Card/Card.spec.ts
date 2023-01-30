import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Card from '../../../../components/Card';

describe('Card component', () => {
  it('renders correctly', () => {
    const props = {
      id: '1',
      name: 'Mojito',
      category: 'Cocktail',
      img: 'mojito.jpg',
      ingredients: ['rum', 'mint', 'sugar', 'lime', 'soda water'],
      onClick: jest.fn(),
    };

    const { getByText, getByAltText } = render(<Card {...props} />);

    expect(getByText('Mojito')).toBeInTheDocument();
    expect(getByText('Cocktail')).toBeInTheDocument();
    expect(getByText('5 Ingredient | 10 min')).toBeInTheDocument();
    expect(getByAltText('mojito')).toBeInTheDocument();
  });

  it('calls onClick when card is clicked', () => {
    const props = {
      id: '1',
      name: 'Mojito',
      category: 'Cocktail',
      img: 'mojito.jpg',
      ingredients: ['rum', 'mint', 'sugar', 'lime', 'soda water'],
      onClick: jest.fn(),
    };

    const { getByTestId } = render(<Card {...props} />);

    fireEvent.click(getByTestId('card'));

    expect(props.onClick).toHaveBeenCalled();
  });
});
