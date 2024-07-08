import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MainCarousel from "./MainCarousel";
import { BrowserRouter as Router } from "react-router-dom";

describe("MainCarousel", () => {
  test("renders MainCarousel component", () => {
    render(
      <Router>
        <MainCarousel />
      </Router>,
    );

    //Sprawdź, czy pierwszy slajd jest wyświetlany
    expect(screen.getByText("Glamor and Chic")).toBeInTheDocument();
  });

    //import { render, screen, fireEvent } from "@testing-library/react";
    test("navigates to the next slide", () => {
      render(
        <Router>
          <MainCarousel />
        </Router>,
      );

      // const nextButton = screen.getByRole("button", { name: /chevron right/i });
       const nextButton = screen.getByTestId("carousel-arrow-right");
      fireEvent.click(nextButton);

      // Sprawdź, czy drugi slajd jest wyświetlany po kliknięciu przycisku "next"
      // expect(screen.getByText("WOMAN")).toBeInTheDocument();
    });

  //   test("navigates to the previous slide", () => {
  //     render(
  //       <Router>
  //         <MainCarousel />
  //       </Router>,
  //     );

  //     const prevButton = screen.getByRole("button", { name: /chevron left/i });
  //     fireEvent.click(prevButton);

  //     // Sprawdź, czy ostatni slajd jest wyświetlany po kliknięciu przycisku "previous"
  //     expect(screen.getByText("Dolce Vita")).toBeInTheDocument();
  //   });

  //   test("automatically navigates to the next slide after interval", () => {
  //     jest.useFakeTimers();

  //     render(
  //       <Router>
  //         <MainCarousel />
  //       </Router>,
  //     );

  //     // Sprawdź, czy pierwszy slajd jest wyświetlany początkowo
  //     expect(screen.getByText("Glamor and Chic")).toBeInTheDocument();

  //     // Przesuń czas o 5 sekund
  //     jest.advanceTimersByTime(5000);

  //     // Sprawdź, czy drugi slajd jest wyświetlany po 5 sekundach
  //     expect(screen.getByText("WOMAN")).toBeInTheDocument();
  //   });

  //   test("navigates to the selected slide when indicator is clicked", () => {
  //     render(
  //       <Router>
  //         <MainCarousel />
  //       </Router>,
  //     );

  //     const indicators = screen.getAllByRole("button", { name: /dash/i });

  //     // Kliknij wskaźnik trzeciego slajdu
  //     fireEvent.click(indicators[2]);

  //     // Sprawdź, czy trzeci slajd jest wyświetlany po kliknięciu wskaźnika
  //     expect(screen.getByText("Dolce Vita")).toBeInTheDocument();
  //   });
});
