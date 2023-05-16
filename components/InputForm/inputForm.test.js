import InputForm from ".";
import { render, screen, fireEvent } from "@testing-library/react";

test("there are 2 input fields for each category", () => {
  render(<InputForm handleSubmit={()=>{}} inputFields, setInputFields={()=>{}} categories={10} valueSumIst={10} valueSum={10}/>);
});
