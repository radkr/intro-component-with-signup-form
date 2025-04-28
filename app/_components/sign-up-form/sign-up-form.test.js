import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SignUpForm from "./sign-up-form";

function rendersInput(placeholder) {
  // Arrange
  render(<SignUpForm />);
  // Act
  const signUpForm = screen.getByPlaceholderText(placeholder);
  // Assert
  expect(signUpForm).toBeInTheDocument();
}

function rendersValidInput(id, message) {
  // Arrange
  render(<SignUpForm />);
  // Act
  const field = screen.getByTestId(`${id}Test`);
  const errorMessage = screen.queryByText(message, {
    container: field,
  });
  // Assert
  expect(errorMessage).not.toBeInTheDocument();
}

describe(SignUpForm, () => {
  it("renders First Name input", () => {
    rendersInput("First Name");
  });

  it("renders no error message for First Name input on load", () => {
    rendersValidInput("firstName", "First Name cannot be empty");
  });

  it("renders Last Name input", () => {
    rendersInput("Last Name");
  });

  it("renders no error message for Last Name input on load", () => {
    rendersValidInput("lastName", "Last Name cannot be empty");
  });

  it("renders Email Address input", () => {
    rendersInput("Email Address");
  });

  it("renders no error message for Email Address input on load", () => {
    rendersValidInput("email", "Look like this is not an email");
  });

  it("renders Password input", () => {
    rendersInput("Password");
  });

  it("renders no error message for Password input on load", () => {
    rendersValidInput("password", "Password cannot be empty");
  });

  it("renders the 'Claim your free trail' button", () => {
    // Arrange
    render(<SignUpForm />);
    // Act
    const button = screen.getByText(/Claim your free trial/i);
    // Assert
    expect(button).toBeInTheDocument();
  });

  it("renders the text of 'By clicking the button you are agreeing to our Terms and Services'", () => {
    // Arrange
    render(<SignUpForm />);
    // Act
    const paragraph = screen.getByText(
      /By clicking the button, you are agreeing to our/i
    );
    const link = screen.getByText(/Terms and Services/i);
    // Assert
    expect(paragraph).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  });

  it("renders First Name input in focus on load", () => {
    // Arrange
    render(<SignUpForm />);
    // Act
    const signUpForm = screen.getByPlaceholderText("First Name");
    // Assert
    expect(signUpForm).toHaveFocus();
  });
});

async function submit() {
  const button = screen.getByText(/Claim your free trial/i);
  await userEvent.click(button);
}

async function submitNoData(id, message) {
  // Arrange
  render(<SignUpForm />);
  // Act
  await submit();
  const field = screen.getByTestId(`${id}Test`);
  const errorMessage = screen.getByText(message, {
    container: field,
  });
  // Assert
  expect(errorMessage).toBeInTheDocument();
}

async function submitInvalidData(id, message, placeholder, data) {
  // Arrange
  render(<SignUpForm />);
  // Act
  const field = screen.getByTestId(`${id}Test`);
  const input = screen.getByPlaceholderText(placeholder, {
    container: field,
  });
  await userEvent.type(input, data);
  await submit();
  const errorMessage = screen.getByText(message, {
    container: field,
  });
  // Assert
  expect(errorMessage).toBeInTheDocument();
}

async function submitValidData(id, message, placeholder, data) {
  // Arrange
  render(<SignUpForm />);
  // Act
  const field = screen.getByTestId(`${id}Test`);
  const input = screen.getByPlaceholderText(placeholder, {
    container: field,
  });
  await userEvent.type(input, data);
  await submit();
  const errorMessage = screen.queryByText(message, {
    container: field,
  });
  // Assert
  expect(errorMessage).not.toBeInTheDocument();
}

describe("SignUpForm submittion tests", () => {
  it("show error message upon signing up without filling First Name", async () => {
    await submitNoData("firstName", "First Name cannot be empty");
  });

  it("do not show error message upon signing up when First Name has been filled", async () => {
    await submitValidData(
      "firstName",
      "First Name cannot be empty",
      "First Name",
      "a"
    );
  });

  it("show error message upon signing up without filling Last Name", async () => {
    await submitNoData("lastName", "Last Name cannot be empty");
  });

  it("do not show error message upon signing up when Last Name has been filled", async () => {
    await submitValidData(
      "lastName",
      "Last Name cannot be empty",
      "Last Name",
      "a"
    );
  });

  it("show error message upon signing up without filling Email Address", async () => {
    await submitNoData("email", "Look like this is not an email");
  });

  it("do not show error message upon signing up when Email Address has been filled", async () => {
    await submitInvalidData(
      "email",
      "Look like this is not an email",
      "Email Address",
      "a"
    );
  });

  it("do not show error message upon signing up when Email Address has been filled", async () => {
    await submitValidData(
      "email",
      "Look like this is not an email",
      "Email Address",
      "a@a.ab"
    );
  });

  it("show error message upon signing up without filling Password", async () => {
    await submitNoData("password", "Password cannot be empty");
  });

  it("do not show error message upon signing up when Password has been filled", async () => {
    await submitValidData(
      "password",
      "Password cannot be empty",
      "Password",
      "a"
    );
  });
});
