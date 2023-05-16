import ExpensesGraph from "@/pages/expenses-graph";
import { render, screen } from "@testing-library/react";
import startingInput from "@/utils/data/starting-input";
import dataPrototype from "@/utils/data/dataPrototype";
import ResizeObserver from "../__mocks__/resizeObserver"; //is needed!

test("there is a text for the graphes IST and SOLL", () => {
  render(<ExpensesGraph data={startingInput} dataPrototype={dataPrototype} currentYear={0} />);
  const istText = screen.getByText("IST");
  expect(istText).toBeInTheDocument();
  const sollText = screen.getByText("SOLL");
  expect(sollText).toBeInTheDocument();
});
