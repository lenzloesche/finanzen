import ExpensesGraph from "@/pages/expenses-graph";
import { render, screen } from "@testing-library/react";

test("there is a navbar iwth buttons", () => {
  render(<ExpensesGraph />);
  const indexLink = screen.getByText("Ist");
  console.log(indexLink);
});
