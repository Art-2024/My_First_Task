import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./index";
import { COLORS } from "../../constants";
import { ButtonTypes } from "../../types";

// Mock the buttons and navigate function
jest.mock(
  "../../components/buttons/PrimaryButton",
  () =>
    ({ onClick, text }: ButtonTypes) =>
      <button onClick={onClick}>{text}</button>
);
jest.mock(
  "../../components/buttons/SecondaryButton",
  () =>
    ({ onClick, text }: ButtonTypes) =>
      <button onClick={onClick}>{text}</button>
);

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Dashboard Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the Dashboard component correctly", () => {
    render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );
  });

  it("navigates to the profile page on clicking the primary button", () => {
    render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );

    const profileButton = screen.getByText(/EDIT MY PROFILE AND MY WORKLOG/i);
    fireEvent.click(profileButton);

    expect(mockNavigate).toHaveBeenCalledWith("/profile");
  });

  it("navigates to the home page on clicking the logout button", () => {
    render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );

    const logoutButton = screen.getByText(/LOGOUT/i);
    fireEvent.click(logoutButton);

    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
