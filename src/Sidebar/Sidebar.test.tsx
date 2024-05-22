import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import MenuListComposition from "./index";

describe("MenuListComposition", () => {
  test("clicking on dashboard menu item navigates to /dashboard", () => {
    render(
      <Router>
        <MenuListComposition />
      </Router>
    );

    // Find the button using its ref
    const menuButton = screen.getByTestId("menu-button"); // Assuming you set testId to 'menu-button' in your component
    fireEvent.click(menuButton);

    const dashboardMenuItem = screen.getByRole("menuitem", {
      name: /dashboard/i,
    });
    fireEvent.click(dashboardMenuItem);

    expect(window.location.pathname).toBe("/dashboard");
  });

  test("clicking on profile menu item navigates to /profile", () => {
    render(
      <Router>
        <MenuListComposition />
      </Router>
    );

    // Open the menu by clicking the menu button
    const menuButton = screen.getByTestId("menu-button");
    fireEvent.click(menuButton);

    // Find the profile menu item by its icon
    const profileMenuItem = screen.getByTestId("profile-menu-item"); // Assuming you set testId to 'profile-menu-item' in your component
    fireEvent.click(profileMenuItem);

    // Verify navigation
    expect(window.location.pathname).toBe("/profile");
  });
});
