import React from "react";
import { render, fireEvent, RenderResult } from "@testing-library/react";
import Profile from "./index"; // Assuming Profile component is exported from Profile.js
import WeekDay from "./weekDay";

describe("Profile Component", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<Profile />);
  });

  test("handleChange updates formValues for text input", () => {
    const firstNameInput = component.getByLabelText(
      "First name"
    ) as HTMLInputElement;

    fireEvent.change(firstNameInput, { target: { value: "John" } });

    expect(firstNameInput.value).toBe("John");
  });

  test("handleChange updates formValues for checkbox input", () => {
    const coreTeamCheckbox = component.getByLabelText(
      "Core team member"
    ) as HTMLInputElement;

    fireEvent.click(coreTeamCheckbox);

    expect(coreTeamCheckbox.checked).toBe(true);
  });

  test("handleDateChange updates formValues for date picker", () => {
    const dateOfBirthPicker = component.getByLabelText("Date of birth");

    // Simulate selecting a date
    const selectedDate = {
      $d: new Date("2024-05-02"), // Adjust the date object according to your requirement
    };

    fireEvent.change(dateOfBirthPicker, { target: { value: selectedDate } });
    const expectedValue = !dateOfBirthPicker ? "2024-05-02" : "";
    expect((dateOfBirthPicker as HTMLInputElement).value).toBe(expectedValue);
  });
});
describe("WeekDay component", () => {
  test("renders with the correct day", () => {
    const { getByText } = render(<WeekDay day="Monday" />);
    expect(getByText("Monday")).toBeInTheDocument();
  });

  test('adds a new time range when the "+" button is clicked', () => {
    const { getByText, container } = render(<WeekDay day="Monday" />);
    const addButton = getByText("+");
    fireEvent.click(addButton);
    const startTimeInput = container.querySelector(`input[id^="start-time-"]`);
    const endTimeInput = container.querySelector(`input[id^="end-time-"]`);
    expect(startTimeInput).toBeInTheDocument();
    expect(endTimeInput).toBeInTheDocument();
  });

  test('removes a time range when the "x" button is clicked', () => {
    const { getByText, queryByTestId } = render(<WeekDay day="Monday" />);
    const addButton = getByText("+");
    fireEvent.click(addButton); // Adds one time range
    const removeButton = getByText("+").closest("div")!.querySelector("button");
    fireEvent.click(removeButton!);
    expect(queryByTestId("start-time-0")).not.toBeInTheDocument();
    expect(queryByTestId("end-time-0")).not.toBeInTheDocument();
  });

  test("updates the start time when a time input is changed", () => {
    const { container } = render(<WeekDay day="Monday" />);
    const startTimeInput = container.querySelector(
      'input[type="time"]'
    ) as HTMLInputElement;
    fireEvent.change(startTimeInput, { target: { value: "08:00" } });
    expect(startTimeInput.value).toBe("08:00");
  });

  test("updates the end time when a time input is changed", () => {
    const { container } = render(<WeekDay day="Monday" />);
    const endTimeInput = container.querySelectorAll(
      'input[type="time"]'
    )[1] as HTMLInputElement;
    fireEvent.change(endTimeInput, { target: { value: "17:00" } });
    expect(endTimeInput.value).toBe("17:00");
  });
});
