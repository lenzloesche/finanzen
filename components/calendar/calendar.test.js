import StyledCalendar from ".";
import ResizeObserver from "../../__mocks__/resizeObserver"; //is needed!
import { render, screen, fireEvent } from "@testing-library/react";

let current = 2023;

function handleMinus() {
  current -= 1;
}

function handlePlus() {
  current += 1;
}

test("the year is displayed. when you press next, the next year is displayed. when you press minus, the last year is displayed", () => {
  render(<StyledCalendar handleMinus={handleMinus} handlePlus={handlePlus} current={current} />);
  const yearDisplayed = screen.getByText(current);
  expect(yearDisplayed).toBeInTheDocument();
  const plusButton = screen.getByRole("button", { name: "+" });
  expect(plusButton).toBeInTheDocument();
  fireEvent.click(plusButton);
  expect(current).toBe(2024);
  const minusButton = screen.getByRole("button", { name: "-" });
  expect(minusButton).toBeInTheDocument();
  fireEvent.click(minusButton);
  fireEvent.click(minusButton);
  expect(current).toBe(2022);
});
