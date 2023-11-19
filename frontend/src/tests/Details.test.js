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
    const testCampaignName = "Test Campaign";
    setup(0);
    const campaignTitle = screen.getByText("Title");
    expect(campaignTitle).toBeInTheDocument();
    const campaignTitleLegend = screen.getByTestId("Title-legend");
    expect(campaignTitleLegend).toBeInTheDocument();
    const campaignTitleLabel = screen.getByTestId("Title-helper");
    expect(campaignTitleLabel).toBeInTheDocument();
    
    expect(campaignTitleLegend).toHaveTextContent("Title");
    const campaignTitleInput = screen.getByTestId("Title-input");
    expect(campaignTitleInput).toBeInTheDocument();
    expect(campaignTitleInput).toHaveAttribute("type", "text");
    const campaignNameInput = screen.getByTestId("campaign-name-input");
    fireEvent.change(campaignNameInput, { target: { value: testCampaignName } });
    expect(campaignNameInput.value).toBe(testCampaignName);
    expect(campaignTitleInput).toHaveAttribute("placeholder", `Default is "${testCampaignName}"`);
    campaignTitleInput.focus();
    expect(campaignTitleInput).toHaveFocus();
    fireEvent.change(campaignTitleInput, { target: { value: testCampaignName } });
    expect(campaignTitleInput.value).toBe(testCampaignName);
    campaignTitleInput.blur();
    expect(campaignTitleInput).not.toHaveFocus();
});
test("Render Campaign Description Input", async () => {
    setup(0);
    const campaignDescription = screen.getByText("Description")
    expect(campaignDescription).toBeInTheDocument();
    const campaignDescriptionLegend = screen.getByTestId("Description-legend");
    expect(campaignDescriptionLegend).toBeInTheDocument();
    const campaignDescriptionLabel = screen.getByTestId("Description-helper");
    expect(campaignDescriptionLabel).toBeInTheDocument();
    expect(campaignDescriptionLegend).toHaveTextContent("Description");
    const campaignDescriptionInput = screen.getByTestId("Description-input");
    expect(campaignDescriptionInput).toBeInTheDocument();
    expect(campaignDescriptionInput).toHaveAttribute("type", "text");
    campaignDescriptionInput.focus();
    expect(campaignDescriptionInput).toHaveFocus();
    fireEvent.change(campaignDescriptionInput, { target: { value: "Any Campaign Description" } });
    expect(campaignDescriptionInput.value).toBe("Any Campaign Description");
    campaignDescriptionInput.blur();
    expect(campaignDescriptionInput).not.toHaveFocus();
});
