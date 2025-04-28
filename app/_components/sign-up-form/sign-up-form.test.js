import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SignUpForm from "./sign-up-form";

const firstName = {
  id: "firstName",
  placeholder: "First Name",
  message: "First Name cannot be empty",
};

const lastName = {
  id: "lastName",
  placeholder: "Last Name",
  message: "Last Name cannot be empty",
};

const email = {
  id: "email",
  placeholder: "Email Address",
  message: "Look like this is not an email",
};

const password = {
  id: "password",
  placeholder: "Password",
  message: "Password cannot be empty",
};

function rendersInput(input) {
  // Arrange
  render(<SignUpForm />);
  // Act
  const signUpForm = screen.getByPlaceholderText(input.placeholder);
  // Assert
  expect(signUpForm).toBeInTheDocument();
}

function rendersValidInput(input) {
  // Arrange
  render(<SignUpForm />);
  // Act
  const field = screen.getByTestId(`${input.id}Test`);
  const errorMessage = screen.queryByText(input.message, {
    container: field,
  });
  // Assert
  expect(errorMessage).not.toBeInTheDocument();
}

describe(SignUpForm, () => {
  it("renders First Name input", () => {
    rendersInput(firstName);
  });

  it("renders no error message for First Name input on load", () => {
    rendersValidInput(firstName);
  });

  it("renders Last Name input", () => {
    rendersInput(lastName);
  });

  it("renders no error message for Last Name input on load", () => {
    rendersValidInput(lastName);
  });

  it("renders Email Address input", () => {
    rendersInput(email);
  });

  it("renders no error message for Email Address input on load", () => {
    rendersValidInput(email);
  });

  it("renders Password input", () => {
    rendersInput(password);
  });

  it("renders no error message for Password input on load", () => {
    rendersValidInput(password);
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
    const signUpForm = screen.getByPlaceholderText(firstName.placeholder);
    // Assert
    expect(signUpForm).toHaveFocus();
  });
});

async function submit() {
  const button = screen.getByText(/Claim your free trial/i);
  await userEvent.click(button);
}

async function submitNoData(input) {
  // Arrange
  render(<SignUpForm />);
  // Act
  await submit();
  const field = screen.getByTestId(`${input.id}Test`);
  const errorMessage = screen.getByText(input.message, {
    container: field,
  });
  // Assert
  expect(errorMessage).toBeInTheDocument();
}

async function submitInvalidData(input, data) {
  // Arrange
  render(<SignUpForm />);
  // Act
  const field = screen.getByTestId(`${input.id}Test`);
  const inputField = screen.getByPlaceholderText(input.placeholder, {
    container: field,
  });
  await userEvent.type(inputField, data);
  await submit();
  const errorMessage = screen.getByText(input.message, {
    container: field,
  });
  // Assert
  expect(errorMessage).toBeInTheDocument();
}

async function submitValidData(input, data) {
  // Arrange
  render(<SignUpForm />);
  // Act
  const field = screen.getByTestId(`${input.id}Test`);
  const inputField = screen.getByPlaceholderText(input.placeholder, {
    container: field,
  });
  await userEvent.type(inputField, data);
  await submit();
  const errorMessage = screen.queryByText(input.message, {
    container: field,
  });
  // Assert
  expect(errorMessage).not.toBeInTheDocument();
}

describe("SignUpForm submittion tests", () => {
  it("show error message upon signing up without filling First Name", async () => {
    await submitNoData(firstName);
  });

  it("do not show error message upon signing up when First Name has been filled", async () => {
    await submitValidData(firstName, "a");
  });

  it("show error message upon signing up without filling Last Name", async () => {
    await submitNoData(lastName);
  });

  it("do not show error message upon signing up when Last Name has been filled", async () => {
    await submitValidData(lastName, "a");
  });

  it("show error message upon signing up without filling Email Address", async () => {
    await submitNoData(email);
  });

  it("show error message upon signing up when invalid Email Address has been filled", async () => {
    await submitInvalidData(email, "a");
  });

  it("do not show error message upon signing up when Email Address has been filled", async () => {
    await submitValidData(email, "a@a.ab");
  });

  it("show error message upon signing up without filling Password", async () => {
    await submitNoData(password);
  });

  it("do not show error message upon signing up when Password has been filled", async () => {
    await submitValidData(password, "a");
  });
});

async function enter(input, data) {
  const field = screen.getByTestId(`${input.id}Test`);
  const inputField = screen.getByPlaceholderText(input.placeholder, {
    container: field,
  });
  await userEvent.click(inputField);
  if (data) {
    await userEvent.type(inputField, data);
  }
  const form = screen.getByLabelText("Sign Up Form");
  await userEvent.click(form);
}

async function enterNoData(input) {
  // Arrange
  render(<SignUpForm />);
  // Act
  await enter(input);
  const field = screen.getByTestId(`${input.id}Test`);
  const errorMessage = screen.getByText(input.message, {
    container: field,
  });
  // Assert
  expect(errorMessage).toBeInTheDocument();
}

async function enterInvalidData(input, data) {
  // Arrange
  render(<SignUpForm />);
  // Act
  await enter(input, data);
  const field = screen.getByTestId(`${input.id}Test`);
  const errorMessage = screen.getByText(input.message, {
    container: field,
  });
  // Assert
  expect(errorMessage).toBeInTheDocument();
}

async function enterValidData(input, data) {
  // Arrange
  render(<SignUpForm />);
  // Act
  await enter(input, data);
  const field = screen.getByTestId(`${input.id}Test`);
  const errorMessage = screen.queryByText(input.message, {
    container: field,
  });
  // Assert
  expect(errorMessage).not.toBeInTheDocument();
}

describe("SignUpForm lost focus tests", () => {
  it("show error message upon entering no data to First Name", async () => {
    await enterNoData(firstName);
  });

  it("do not show error message upon entering valid data to First Name", async () => {
    await enterValidData(firstName, "a");
  });

  it("show error message upon entering no data to Last Name", async () => {
    await enterNoData(lastName);
  });

  it("do not show error message upon entering valid data to Last Name", async () => {
    await enterValidData(lastName, "a");
  });

  it("show error message upon entering no data to Email Address", async () => {
    await enterNoData(email);
  });

  it("show error message upon entering invalid Email Address", async () => {
    await enterInvalidData(email, "a");
  });

  it("do not show error message upon entering valid data to Email Address", async () => {
    await enterValidData(email, "a@a.ab");
  });

  it("show error message upon entering no data to Password", async () => {
    await enterNoData(password);
  });

  it("do not show error message upon entering valid data to Password", async () => {
    await enterValidData(password, "a");
  });
});
