import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import { act } from 'react-dom/test-utils';
const setup = (step = null) => {
  const utils = render(<App />);
  const stepper = utils.getByTestId("stepper");
  var selectedStep = null;
  if (step !== null) {
    selectedStep = stepper.children[step];
    expect(selectedStep).toBeInTheDocument();
    act(() => selectedStep.click()); // Click on the step
    expect(selectedStep).toHaveAttribute("data-selected", "true");
    expect(selectedStep).toHaveClass("bg-blue-800");
    expect(selectedStep).not.toHaveClass("bg-blue-500");
  }
  return {
    stepper,
    selectedStep,
    ...utils,
  }
}
test('renders without crashing', () => {
  setup();
});
test("Render Stepper and clicks all of them ", async () => {
  const { stepper } = setup();
  expect(stepper).toBeInTheDocument();
  for (let i = 0; i < 6; i++) {
    const step = screen.getByTestId(`step-${i}`);
    expect(step).toBeInTheDocument();
    expect(step).toHaveClass("flex flex-col justify-center items-center text-center rounded-lg p-2 text-white");
    act(() => step.click()); // Click on the step
    expect(step).toHaveAttribute("data-selected", "true");
    for (let j = 0; j < 6; j++) {
      if (j !== i) {
        const step = screen.getByTestId(`step-${j}`);
        expect(step).not.toHaveAttribute("data-selected", "true");
      }
    }
  }
});

export default setup;
