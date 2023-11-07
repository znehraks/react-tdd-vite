import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("app test", () => {
  test("jest title 테스트", () => {
    const AppComponent = render(<App />);
    expect(AppComponent).toMatchSnapshot();

    const titleText = screen.getByTestId("title-text");
    // expect(titleText).not.toBeNull();
    expect(titleText).toBeInTheDocument();
  });
});
