import { fireEvent, render, screen } from '@testing-library/react';
import { renderHook  } from '@testing-library/react-hooks'
import NameForm from "../FormCoding"


test('renders learn react link', () => {
  render(<NameForm />);
  const linkElement = screen.getByText(/Pendaftaran Peserta Coding Bootcamp/i);
  expect(linkElement).toBeInTheDocument();
});

test('Check Value nama', () => {
  render(<NameForm />);

  fireEvent.input(screen.getByRole('textbox', {name: /nama/i}),{target: {value: 'jamal'}})
  expect(screen.getByRole('textbox', {name: /nama/i}).value).toBe('jamal')

  fireEvent.input(screen.getByRole('textbox', {name: /nama/i}),{target: {value: 'nama02'}})

  expect(screen.getByText("Nama Lengkap Harus Berupa Huruf"))

});

test('Check Value nama erorr ', () => {
  render(<NameForm />);
  fireEvent.input(screen.getByRole('textbox', {name: /nama/i}),{target: {value: 'nama02'}})

  expect(screen.getByText("Nama Lengkap Harus Berupa Huruf"))

});

test('Check Value email', () => {
  render(<NameForm />);

  fireEvent.input(screen.getByRole('textbox', {name: /email/i}),{target: {value: 'email'}})
  expect(screen.getByLabelText(/Email/)).toHaveValue('email')

});

test('Check Value noHandphone', () => {
  render(<NameForm />);

  fireEvent.input(screen.getByTestId('phone-number'),{target: {value: '222222222'}})
  expect(screen.getByLabelText(/No Handphone/)).toHaveValue(222222222)

});



test('Check Value Button submit', () => {
  render(<NameForm />);

  fireEvent.input(screen.getByRole('button', { name: /button-name/i }))

});

