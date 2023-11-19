import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
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
export const testWikiParserInput = async (fieldName, fieldValue, expectedValue, nextButton) => {
  const  wikiParserName = screen.getByTestId(fieldName);
    expect( wikiParserName).toBeInTheDocument();
    const  wikiParserNameLegend = screen.getByTestId(`${fieldName}-legend`);
    expect( wikiParserNameLegend).toBeInTheDocument();
    const  wikiParserNameLabel = screen.getByTestId(`${fieldName}-helper`);
    expect( wikiParserNameLabel).toBeInTheDocument();
    expect( wikiParserNameLegend).toHaveTextContent(`${fieldName}`);
    const  wikiParserNameInput = screen.getByTestId(`${fieldName}-input`);
    expect( wikiParserNameInput).toBeInTheDocument();
    expect( wikiParserNameInput).toHaveAttribute("type", "text");
    fireEvent.change( wikiParserNameInput, { target: { value: "" } });
    expect( wikiParserNameInput.value).toBe("");
    expect(screen.getByTestId(`${fieldName}-preview`)).toHaveTextContent("");
    // const loading = screen.getByTestId(`${fieldName}-loading`);
    // expect(loading).not.toBeInTheDocument();
    expect(nextButton).not.toBeDisabled();
    fireEvent.change( wikiParserNameInput, { target: { value: fieldValue } });
    expect( wikiParserNameInput.value).toBe(fieldValue);
    expect( wikiParserNameInput).toBeValid();
    expect(nextButton).not.toBeDisabled();
    const previewButton = screen.getByTestId(`${fieldName}-button-submit`);
    expect(previewButton).toBeInTheDocument();
    expect(previewButton).toHaveTextContent("Preview");
    act(() => previewButton.click());
    const previewLoading = screen.getByTestId(`${fieldName}-loading`);
    expect(previewLoading).toBeInTheDocument();
    await waitForElementToBeRemoved(previewLoading, { timeout: 5000 }); // Wait for the preview to load
    const previewDiv = screen.getByTestId(`${fieldName}-preview`);
    expect(previewDiv).toBeInTheDocument();
    expect(previewDiv).toHaveTextContent(expectedValue);
    // try blank input
    
};
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
