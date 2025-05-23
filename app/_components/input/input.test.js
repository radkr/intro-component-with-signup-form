import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Input from "./input";

describe(Input, () => {
  it("renders input labeled with 'First Name'", () => {
    // Arrange
    render(<Input id="firstName" placeholder="First Name" />);
    // Act
    const input = screen.getByLabelText("First Name");
    // Assert
    expect(input).toBeInTheDocument();
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
    // Assert
    expect(input).toBeInTheDocument();
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

  it("does not renders error icon on load", () => {
    // Arrange and act
    render(<Input id="firstName" placeholder="First Name" />);
    const errorIcon = screen.queryByAltText("Error Icon");
    // Assert
    expect(errorIcon).not.toBeInTheDocument();
  });

  it("renders error icon in error state", () => {
    // Arrange and act
    render(
      <Input id="firstName" placeholder="First Name" errorMessage="MyError" />
    );
    const errorIcon = screen.getByAltText("Error Icon");
    // Assert
    expect(errorIcon).toBeInTheDocument();
  });

  it("renders invalid input with different style", () => {
    // Arrange and act
    const { rerender } = render(
      <Input id="firstName" placeholder="First Name" />
    );
    const validInput = screen.getByPlaceholderText("First Name");
    const validStyles = [...validInput.classList];
    rerender(
      <Input id="firstName" placeholder="First Name" errorMessage="MyError" />
    );
    const invalidInput = screen.getByPlaceholderText("First Name");
    const invalidStyles = [...invalidInput.classList];
    // Chack if the have the same style
    let toHaveSameStyle = true;
    if (validStyles.length != invalidStyles.length) {
      toHaveSameStyle = false;
    } else {
      for (let style in validStyles) {
        if (!style in invalidStyles) {
          toHaveSameStyle = false;
          break;
        }
      }
    }
    // Assert
    expect(toHaveSameStyle).toBe(false);
  });

  it("renders error icon when the input is invalid", () => {
    // Arrange and act
    render(
      <Input id="firstName" placeholder="First Name" errorMessage="MyError" />
    );
    const errorIcon = screen.getByAltText("Error Icon");
    // Assert
    expect(errorIcon).toBeInTheDocument();
  });

  it("does not renders error message on load", () => {
    // Arrange and act
    render(<Input id="firstName" placeholder="First Name" />);
    const errorMessage = screen.queryByText("MyError");
    // Assert
    expect(errorMessage).not.toBeInTheDocument();
  });

  it("renders error message when the input is invalid", () => {
    // Arrange and act
    render(
      <Input id="firstName" placeholder="First Name" errorMessage="MyError" />
    );
    const errorMessage = screen.getByText("MyError");
    // Assert
    expect(errorMessage).toBeInTheDocument();
  });
});
