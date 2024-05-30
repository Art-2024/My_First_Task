import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./index";

describe("Sidebar", () => {
  test("clicking on dashboard menu item navigates to /dashboard", () => {
    render(
      <Router>
        <Sidebar />
      </Router>
    );

    const menuButton = screen.getByTestId("menu-button");
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
        <Sidebar />
      </Router>
    );

    const menuButton = screen.getByTestId("menu-button");
    fireEvent.click(menuButton);

    const profileMenuItem = screen.getByTestId("profile-menu-item");

    fireEvent.click(profileMenuItem);

    expect(window.location.pathname).toBe("/profile");
  });
});
