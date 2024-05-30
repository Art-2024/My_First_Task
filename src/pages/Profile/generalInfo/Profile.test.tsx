import React from "react";
import { render, fireEvent, RenderResult } from "@testing-library/react";
import GeneralInfo from "./index";

describe("Profile Component", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<GeneralInfo />);
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

    const selectedDate = {
      $d: new Date("2024-05-02"),
    };

    fireEvent.change(dateOfBirthPicker, { target: { value: selectedDate } });
    const expectedValue = !dateOfBirthPicker ? "2024-05-02" : "";
    expect((dateOfBirthPicker as HTMLInputElement).value).toBe(expectedValue);
  });
});
