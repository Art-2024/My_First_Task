import { fireEvent, render } from "@testing-library/react";
import WeeklySchedule from "./index";

describe("WeekDay component", () => {
  test("renders with the correct day", () => {
    const { getByText } = render(<WeeklySchedule day="Monday" />);
    expect(getByText("Monday")).toBeInTheDocument();
  });

  test('adds a new time range when the "+" button is clicked', () => {
    const { getByText, container } = render(<WeeklySchedule day="Monday" />);
    const addButton = getByText("+");
    fireEvent.click(addButton);
    const startTimeInput = container.querySelector(`input[id^="start-time-"]`);
    const endTimeInput = container.querySelector(`input[id^="end-time-"]`);
    expect(startTimeInput).toBeInTheDocument();
    expect(endTimeInput).toBeInTheDocument();
  });

  test('removes a time range when the "x" button is clicked', () => {
    const { getByText, queryByTestId } = render(
      <WeeklySchedule day="Monday" />
    );
    const addButton = getByText("+");
    fireEvent.click(addButton);
    const removeButton = getByText("+").closest("div")!.querySelector("button");
    fireEvent.click(removeButton!);
    expect(queryByTestId("start-time-0")).not.toBeInTheDocument();
    expect(queryByTestId("end-time-0")).not.toBeInTheDocument();
  });

  test("updates the start time when a time input is changed", () => {
    const { container } = render(<WeeklySchedule day="Monday" />);
    const startTimeInput = container.querySelector(
      'input[type="time"]'
    ) as HTMLInputElement;
    fireEvent.change(startTimeInput, { target: { value: "08:00" } });
    expect(startTimeInput.value).toBe("08:00");
  });

  test("updates the end time when a time input is changed", () => {
    const { container } = render(<WeeklySchedule day="Monday" />);
    const endTimeInput = container.querySelectorAll(
      'input[type="time"]'
    )[1] as HTMLInputElement;
    fireEvent.change(endTimeInput, { target: { value: "17:00" } });
    expect(endTimeInput.value).toBe("17:00");
  });
});
