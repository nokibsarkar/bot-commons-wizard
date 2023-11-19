import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
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
test("Render Campaign Name Input", async () => {
  setup(0);
  const campaignName = screen.getByTestId("campaign-name");
  expect(campaignName).toBeInTheDocument();
  const campaignNameLabel = screen.getByTestId("campaign-name-helper");
  expect(campaignNameLabel).toBeInTheDocument();
  const campaignNameLegend = screen.getByTestId("campaign-name-legend");
  expect(campaignNameLegend).toBeInTheDocument();
  expect(campaignNameLegend).toHaveTextContent("Campaign Name");
  const campaignNameInput = screen.getByTestId("campaign-name-input");
  expect(campaignNameInput).toBeInTheDocument();
  expect(campaignNameInput).toHaveAttribute("type", "text");
  act(() => campaignNameInput.focus())
  expect(campaignNameInput).toHaveFocus();
  fireEvent.change(campaignNameInput, { target: { value: "Test Campaign" } });
  expect(campaignNameInput.value).toBe("Test Campaign");
  act(() => campaignNameInput.blur());
  expect(campaignNameInput).not.toHaveFocus();
});
test("Render Campaign Title Input", async () => {
  setup(0);
  const campaignTitle = screen.getByText("Title")
  expect(campaignTitle).toBeInTheDocument();
  // const campaignTitleLabel = screen.getByTestId("campaign-title-helper");
  // expect(campaignTitleLabel).toBeInTheDocument();
  // const campaignTitleLegend = screen.getByTestId("campaign-title-legend");
  // expect(campaignTitleLegend).toBeInTheDocument();
  // expect(campaignTitleLegend).toHaveTextContent("Campaign Title");
  // const campaignTitleInput = screen.getByTestId("campaign-title-input");
  // expect(campaignTitleInput).toBeInTheDocument();
  // expect(campaignTitleInput).toHaveAttribute("type", "text");
  // campaignTitleInput.focus();
  // expect(campaignTitleInput).toHaveFocus();
  // campaignTitleInput.blur();
  // expect(campaignTitleInput).not.toHaveFocus();
});

