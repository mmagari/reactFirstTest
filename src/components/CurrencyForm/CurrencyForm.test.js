import { render, screen } from '@testing-library/react';
import CurrencyForm from './CurrencyForm';
import userEvent from '@testing-library/user-event';


describe('Component CurrencyForm', () => {
  it('should render without crashing', () => {
    render(<CurrencyForm action={() => {}} />);
  });
  it('should run action callback with proper data on form submit', () => {
    const action = jest.fn();

    // render component
    render(<CurrencyForm action={action} />);

    // find elements by data-testid
    const amountInput = screen.getByTestId('amountValue');
    const fromSelect = screen.getByTestId('fromSelect');
    const toSelect = screen.getByTestId('toSelect');
    const submitButton = screen.getByText('Convert');


     // simulate user input and click on "convert" button
     userEvent.type(amountInput, '100');
     userEvent.selectOptions(fromSelect, 'PLN');
     userEvent.selectOptions(toSelect, 'USD');
     userEvent.click(submitButton);

    expect(action).toHaveBeenCalledTimes(1);
    expect(action).toHaveBeenCalledWith({ amount: 100, from: 'PLN', to: 'USD' });
  
});
});