import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
});
test("Render Stepper", async () => {
  render(<App />);
  const stepper = screen.getByTestId("stepper");
  expect(stepper).toBeInTheDocument();
  for(let i = 0; i < 6; i++){
    const step = screen.getByTestId(`step-${i}`);
    expect(step).toBeInTheDocument();
    expect(step).toHaveClass("flex flex-col justify-center items-center text-center rounded-lg p-2 text-white");
  }
});
test("Render Campaign Name Input", async () => {
  render(<App />);
  const campaignDetailsStep = screen.getByTestId("step-0");
  expect(campaignDetailsStep).toBeInTheDocument();
  expect(campaignDetailsStep).toHaveAttribute("data-selected", "true");
  expect(campaignDetailsStep).toHaveClass("bg-blue-800");
  expect(campaignDetailsStep).not.toHaveClass("bg-blue-500");
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
  campaignNameInput.focus();
  expect(campaignNameInput).toHaveFocus();
  campaignNameInput.value = "Test Campaign";
  expect(campaignNameInput.value).toBe("Test Campaign");
  campaignNameInput.blur();
  expect(campaignNameInput).not.toHaveFocus();
});
test("Render Campaign Title Input", async () => {
  render(<App />);
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

