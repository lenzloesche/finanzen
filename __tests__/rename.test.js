import Rename from "@/pages/rename";
import dataPrototype from "@/utils/data/dataPrototype";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";

test("there is a button new category. there is no delete button. there is a dropdownmenu. if you select Einkauf, then there is a delete button.", async () => {
  render(<Rename categories={dataPrototype} changeCategoryName={() => {}} deletCategory={() => {}} addCategory={() => {}} changeCategoryColor={() => {}} />);
  const buttonNewCategory = screen.getByRole("button", { name: /Neue Kategorie hinzufügen/i });
  expect(buttonNewCategory).toBeInTheDocument();
  const dropdownMenu = screen.getByRole("combobox");
  expect(dropdownMenu).toBeInTheDocument();
  const optionEinkauf = screen.getByRole("option", { name: /Einkauf/i });
  expect(optionEinkauf).toBeInTheDocument();
  const deleteButtonQuery = screen.queryByText(/Kategorie löschen/i);
  expect(deleteButtonQuery).toBe(null);

  fireEvent.change(dropdownMenu, { target: { value: optionEinkauf.value } });
  await waitFor(() => {
    const deleteButton = screen.getByRole("button", { name: /Kategorie löschen/i });
    expect(deleteButton).toBeInTheDocument();
  });
});
