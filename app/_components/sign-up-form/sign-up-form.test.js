import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import SignUpForm from "./sign-up-form";

describe(SignUpForm, () => {
  it("renders First Name input", () => {
    // Arrange
    render(<SignUpForm />);
    // Act
    const signUpForm = screen.getByPlaceholderText("First Name");
    // Assert
    expect(signUpForm).toBeInTheDocument();
  });

  it("renders Last Name input", () => {
    // Arrange
    render(<SignUpForm />);
    // Act
    const signUpForm = screen.getByPlaceholderText("Last Name");
    // Assert
    expect(signUpForm).toBeInTheDocument();
  });

  it("renders Email Address input", () => {
    // Arrange
    render(<SignUpForm />);
    // Act
    const signUpForm = screen.getByPlaceholderText("Email Address");
    // Assert
    expect(signUpForm).toBeInTheDocument();
  });

  it("renders Password input", () => {
    // Arrange
    render(<SignUpForm />);
    // Act
    const signUpForm = screen.getByPlaceholderText("Password");
    // Assert
    expect(signUpForm).toBeInTheDocument();
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
