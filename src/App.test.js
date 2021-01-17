import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import SalesEntry from './SalesEntry/SaleEntry';
import Landing from './Landing/Landing';
import SalesEntryUpdate from './SalesEntryUpdate/SaleEntryUpdate';
import SalesCollection from './SalesCollection/SalesCollection';

it('renders the App without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    div,
  );

  ReactDOM.unmountComponentAtNode(div);
});

it('renders SalesEntery without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<SalesEntry />, div);

  ReactDOM.unmountComponentAtNode(div);
});

it('renders Landing without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <Landing />
    </Router>,
    div,
  );

  ReactDOM.unmountComponentAtNode(div);
});

it('renders SalesEntryUpdate without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<SalesEntryUpdate />, div);

  ReactDOM.unmountComponentAtNode(div);
});

it('renders SalesCollection without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<SalesCollection />, div);

  ReactDOM.unmountComponentAtNode(div);
});
