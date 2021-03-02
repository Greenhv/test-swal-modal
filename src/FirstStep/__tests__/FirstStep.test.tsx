import FirstStep from "../FirstStep";
import { render, screen, fireEvent } from "@testing-library/react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const renderComponent = (goToNextStep = jest.fn()) => {
  const openModal = () => {
    MySwal.fire({
      html: <FirstStep goToNextStep={goToNextStep} />
    });
  };

  const params = render(<button onClick={openModal}>test</button>);
  fireEvent.click(screen.getByRole("button"));

  return params;
};

describe("<FirstStep />", () => {
  describe("when the later button is clicked", () => {
    it("should close the modal", () => {
      renderComponent();
      expect(screen.getByRole("button", { name: /later/i }));
    });
  });
});
