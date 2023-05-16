import ExpensesGraph from "@/pages/expenses-graph";
import { render, screen } from "@testing-library/react";
import startingInput from "@/utils/data/starting-input";
import dataPrototype from "@/utils/data/dataPrototype";
import ResizeObserver from "../__mocks__/resizeObserver";

test("there is a navbar with buttons", () => {
  render(<ExpensesGraph data={startingInput} dataPrototype={dataPrototype} currentYear={0} />);
  const indexLink = screen.getByText("IST");
  expect(indexLink).toBeInTheDocument();
});
