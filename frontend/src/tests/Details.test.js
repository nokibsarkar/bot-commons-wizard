import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import { act } from 'react-dom/test-utils';
import setup from './App.test';
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
    const campaignTitleLegend = screen.getByTestId("Title-legend");
    expect(campaignTitleLegend).toBeInTheDocument();
    // const campaignTitleLabel = screen.getByTestId("campaign-title-helper");
    // expect(campaignTitleLabel).toBeInTheDocument();
    
    // expect(campaignTitleLegend).toHaveTextContent("Campaign Title");
    // const campaignTitleInput = screen.getByTestId("campaign-title-input");
    // expect(campaignTitleInput).toBeInTheDocument();
    // expect(campaignTitleInput).toHaveAttribute("type", "text");
    // campaignTitleInput.focus();
    // expect(campaignTitleInput).toHaveFocus();
    // campaignTitleInput.blur();
    // expect(campaignTitleInput).not.toHaveFocus();
});
