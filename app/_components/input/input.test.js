import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Input from "./input";

describe(Input, () => {
  it("renders input labeled with 'First Name'", () => {
    // Arrange
    render(<Input id="firstName" placeholder="First Name" />);
    // Act
    const input = screen.getByLabelText("First Name");
    const id = input.id;
    // Assert
    expect(input).toBeInTheDocument();
    expect(id).toBe("firstName");
  });

  it("renders input with placeholder text of 'First Name'", () => {
    // Arrange
    render(<Input id="firstName" placeholder="First Name" />);
    // Act
    const input = screen.getByLabelText("First Name");
    const placeholder = input.placeholder;
    // Assert
    expect(input).toBeInTheDocument();
    expect(placeholder).toBe("First Name");
  });

  it("renders input labeled with 'Password'", () => {
    // Arrange
    render(<Input id="password" placeholder="Password" />);
    // Act
    const input = screen.getByLabelText("Password");
    const id = input.id;
    // Assert
    expect(input).toBeInTheDocument();
    expect(id).toBe("password");
  });

  it("renders input with placeholder text of 'Password'", () => {
    // Arrange
    render(<Input id="password" placeholder="Password" />);
    // Act
    const input = screen.getByLabelText("Password");
    const placeholder = input.placeholder;
    // Assert
    expect(input).toBeInTheDocument();
    expect(placeholder).toBe("Password");
  });

  it("renders input not in focus by default", () => {
    // Arrange
    render(<Input id="firstName" placeholder="First Name" />);
    // Act
    const input = screen.getByLabelText("First Name");
    // Assert
    expect(input).not.toHaveFocus();
  });

  it("renders input in focus when specified", () => {
    // Arrange
    render(<Input id="firstName" placeholder="First Name" autoFocus />);
    // Act
    const input = screen.getByLabelText("First Name");
    // Assert
    expect(input).toHaveFocus();
  });

  it("renders input of type 'text'", () => {
    // Arrange
    render(<Input id="firstName" placeholder="First Name" type="text" />);
    // Act
    const input = screen.getByLabelText("First Name");
    const type = input.type;
    // Assert
    expect(type).toBe("text");
  });

  it("renders input of type 'password'", () => {
    // Arrange
    render(<Input id="password" placeholder="Password" type="password" />);
    // Act
    const input = screen.getByLabelText("Password");
    const type = input.type;
    // Assert
    expect(type).toBe("password");
  });

  it("does not renders error icon by default", () => {
    // Arrange and act
    render(<Input id="firstName" placeholder="First Name" />);
    const errorIcon = screen.queryByAltText("Error Icon");
    // Assert
    expect(errorIcon).not.toBeInTheDocument;
  });

  it("renders error icon in error state", () => {
    // Arrange and act
    render(<Input id="firstName" placeholder="First Name" active />);
    const errorIcon = screen.getByAltText("Error Icon");
    // Assert
    expect(errorIcon).toBeInTheDocument;
  });

  it("does not renders error message by default", () => {
    // Arrange and act
    render(
      <Input id="firstName" placeholder="First Name" errorMessage="MyError" />
    );
    const errorMessage = screen.queryByText("MyError");
    // Assert
    expect(errorMessage).not.toBeInTheDocument;
  });

  it("renders error message in error state", () => {
    // Arrange and act
    render(
      <Input
        id="firstName"
        placeholder="First Name"
        errorMessage="MyError"
        active
      />
    );
    const errorMessage = screen.getByText("MyError");
    // Assert
    expect(errorMessage).toBeInTheDocument;
  });
});
