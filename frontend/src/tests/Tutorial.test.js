import { fireEvent, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import setup, { testWikiParserInput } from './App.test';
const setupAndSelectStep = (step = 1) => {
    const utils = setup(step);
    const nextButton = screen.getByTestId("next-button");
    expect(nextButton).toBeInTheDocument();
    return {
        nextButton,
        ...utils,
    }
}
test("Render Tutorial Skippable", async () => {
    const { nextButton } = setupAndSelectStep();
    const skippableSection = screen.getByTestId("Skippable");
    expect(skippableSection).toBeInTheDocument();
    const skippableLegend = screen.getByTestId("Skippable-legend");
    expect(skippableLegend).toBeInTheDocument();
    expect(skippableLegend).toHaveTextContent("Skippable");
    const skippableOptions = screen.getAllByTestId("Skippable-option");
    expect(skippableOptions).toHaveLength(2);
    const [Yes, No] = skippableOptions;
    expect(Yes).toHaveAttribute("data-checked", "false"); // By default, the skippable option is "No"
    expect(No).toHaveAttribute("data-checked", "true");
    expect(nextButton).not.toBeDisabled(); // Because the skippable option is optional
    expect(Yes).toHaveTextContent("Yes");
    expect(No).toHaveTextContent("No");
    expect(Yes).not.toHaveClass("bg-green-700 text-white"); // Not selected
    expect(Yes).toHaveClass("bg-green-200 text-gray-700"); // Not selected
    expect(No).toHaveClass("bg-red-700 text-white"); // Selected
    expect(No).not.toHaveClass("bg-red-200 text-gray-700"); // Selected

    // click Yes
    act(() => fireEvent.click(Yes));
    expect(Yes).toHaveAttribute("data-checked", "true");
    expect(No).toHaveAttribute("data-checked", "false");
    expect(Yes).toHaveClass("bg-green-700 text-white"); // Selected
    expect(Yes).not.toHaveClass("bg-green-200 text-gray-700"); // Selected
    expect(No).not.toHaveClass("bg-red-700 text-white"); // Not selected
    expect(No).toHaveClass("bg-red-200 text-gray-700"); // Not selected
    expect(nextButton).not.toBeDisabled(); // Because the skippable option is optional
});
test("Render Tutorial Template Name", async () => {
    const { nextButton } = setupAndSelectStep();
    await testWikiParserInput("Tutorial Template Name", "PAGENAME", "Campaign name", nextButton);
});
test("render Next Button", async () => {
    const { nextButton, stepper, selectedStep } = setupAndSelectStep();
    expect(nextButton).toBeInTheDocument();
    expect(nextButton).not.toHaveTextContent("");
    expect(nextButton).not.toBeDisabled();
    expect(stepper).toBeInTheDocument();
    const nextStep = stepper.children[2];
    act(() => nextButton.click());
    expect(nextButton).not.toBeInTheDocument();
    expect(selectedStep).toHaveAttribute("data-selected", "false");
    expect(nextStep).toHaveAttribute("data-selected", "true");
});