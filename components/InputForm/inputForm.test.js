import dataPrototype from "@/utils/data/dataPrototype";
import InputForm from ".";
import { render, screen } from "@testing-library/react";
import startingInput from "@/utils/data/starting-input";

test("there are 2 input fields for each category and have a name-text. also there is a SOLL and IST text.", () => {
  render(<InputForm handleSubmit={() => {}} inputFields={startingInput} setInputFields={() => {}} categories={dataPrototype} valueSumIst={10} valueSum={10} />);
  const allInputFields = screen.getAllByRole("spinbutton");
  expect(allInputFields.length).toBe(10);
  const label1 = screen.getAllByText(/Einkauf/i);
  expect(label1[0]).toBeInTheDocument();
  const label2 = screen.getAllByText(/Miete/i);
  expect(label2[0]).toBeInTheDocument();
  const title1 = screen.getByText(/SOLL/i);
  expect(title1).toBeInTheDocument();
  const title2 = screen.getByText(/IST/i);
  expect(title2).toBeInTheDocument();
});
