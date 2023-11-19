import { fireEvent, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import setup from './App.test';
const setupAndSelectStep = (step = 0) => {
    const utils = setup(step);
    const nextButton = screen.getByTestId("next-button");
    expect(nextButton).toBeInTheDocument();
    // expect(nextButton).toBeDisabled();
    return {
        nextButton,
        ...utils,
    }
}
test("Render Campaign Name Input", async () => {
    const { nextButton } = setupAndSelectStep();
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
    // check this is required
    expect(campaignNameInput).toBeRequired();
    // empty it and check it is invalid
    fireEvent.change(campaignNameInput, { target: { value: "" } });
    expect(campaignNameInput.value).toBe("");
    expect(campaignNameInput).toBeInvalid();
    expect(nextButton).toBeDisabled();
});
test("Render Campaign Title Input", async () => {
    const {nextButton}    = setupAndSelectStep();
    const testCampaignName = "Test Campaign";
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

    // By default, the campaign title is ""
    expect(campaignTitleInput.value).toBe("");
    expect(nextButton).not.toBeDisabled(); // Because the campaign title is optional
    act(() => fireEvent.change(campaignNameInput, { target: { value: testCampaignName } }));

    expect(campaignNameInput.value).toBe(testCampaignName);
    expect(campaignTitleInput).toHaveAttribute("placeholder", `Default is "${testCampaignName}"`);
    campaignTitleInput.focus();
    expect(campaignTitleInput).toHaveFocus();
    fireEvent.change(campaignTitleInput, { target: { value: testCampaignName } });
    expect(campaignTitleInput.value).toBe(testCampaignName);
    campaignTitleInput.blur();
    expect(campaignTitleInput).not.toHaveFocus();
    expect(nextButton).not.toBeDisabled(); // Because the campaign title is optional
});
test("Render Campaign Description Input", async () => {
    const {nextButton} =  setupAndSelectStep();
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
    // By default, the campaign description is ""
    expect(campaignDescriptionInput.value).toBe("");
    expect(nextButton).not.toBeDisabled(); // Because the campaign description is optional
    campaignDescriptionInput.focus();
    expect(campaignDescriptionInput).toHaveFocus();
    fireEvent.change(campaignDescriptionInput, { target: { value: "Any Campaign Description" } });
    expect(campaignDescriptionInput.value).toBe("Any Campaign Description");
    campaignDescriptionInput.blur();
    expect(campaignDescriptionInput).not.toHaveFocus();
    expect(nextButton).not.toBeDisabled(); // Because the campaign description is optional
});
test("Render Campaign Banner Input", async () => {
    const {nextButton} =  setupAndSelectStep();
    const campaignBanner = screen.getByText("Campaign Banner")
    expect(campaignBanner).toBeInTheDocument();
    const campaignBannerLegend = screen.getByTestId("Campaign Banner-legend");
    expect(campaignBannerLegend).toBeInTheDocument();
    const campaignBannerLabel = screen.getByTestId("Campaign Banner-helper");
    expect(campaignBannerLabel).toBeInTheDocument();
    expect(campaignBannerLegend).toHaveTextContent("Campaign Banner");
    const campaignBannerInput = screen.getByTestId("Campaign Banner-input");
    expect(campaignBannerInput).toBeInTheDocument();
    expect(campaignBannerInput).toHaveAttribute("type", "text");
    campaignBannerInput.focus();
    // By default, the campaign banner is ""
    expect(campaignBannerInput.value).toBe("");
    expect(nextButton).not.toBeDisabled(); // Because the campaign banner is optional
    expect(campaignBannerInput).toHaveFocus();
    fireEvent.change(campaignBannerInput, { target: { value: "Any Campaign Banner" } });
    expect(campaignBannerInput.value).toBe("Any Campaign Banner");
    campaignBannerInput.blur();
    expect(campaignBannerInput).not.toHaveFocus();
    expect(nextButton).not.toBeDisabled(); // Because the campaign banner is optional
});
test("Render Campaign Start Date Input", async () => {
    const {nextButton} =  setupAndSelectStep();
    const campaignStartDate = screen.getByTestId('details-campaign-duration-legend');
    expect(campaignStartDate).toBeInTheDocument();
    expect(campaignStartDate).toHaveTextContent("Campaign Duration");

    const campaignStartDateInput = screen.getByTestId("details-start-date");
    expect(campaignStartDateInput).toBeInTheDocument();
    expect(campaignStartDateInput).toHaveAttribute("type", "date");
    campaignStartDateInput.focus();
    expect(campaignStartDateInput).toHaveFocus();
    // By default, the campaign start date is ""
    expect(campaignStartDateInput.value).toBe("");
    expect(nextButton).not.toBeDisabled(); // Because the campaign start date is optional
    fireEvent.change(campaignStartDateInput, { target: { value: "2021-01-01" } });
    expect(campaignStartDateInput.value).toBe("2021-01-01");
    campaignStartDateInput.blur();
    expect(campaignStartDateInput).not.toHaveFocus();
    expect(nextButton).not.toBeDisabled(); // Because the campaign start date is optional
});
test("Render Campaign End Date Input", async () => {
    const {nextButton} =  setupAndSelectStep();
    const campaignEndDate = screen.getByTestId('details-campaign-duration-legend');
    expect(campaignEndDate).toBeInTheDocument();
    expect(campaignEndDate).toHaveTextContent("Campaign Duration");
    const campaignEndDateInput = screen.getByTestId("details-end-date");
    expect(campaignEndDateInput).toBeInTheDocument();
    expect(campaignEndDateInput).toHaveAttribute("type", "date");
    campaignEndDateInput.focus();
    expect(campaignEndDateInput).toHaveFocus();
    // By default, the campaign end date is ""
    expect(campaignEndDateInput.value).toBe("");
    expect(nextButton).not.toBeDisabled(); // Because the campaign end date is optional
    fireEvent.change(campaignEndDateInput, { target: { value: "2021-01-01" } });
    expect(campaignEndDateInput.value).toBe("2021-01-01");
    campaignEndDateInput.blur();
    expect(campaignEndDateInput).not.toHaveFocus();
    expect(nextButton).not.toBeDisabled(); // Because the campaign end date is optional
});
test("render Next Button", async () => {
    const { nextButton, stepper, selectedStep } = setupAndSelectStep();
    expect(nextButton).toBeInTheDocument();
    expect(nextButton).not.toHaveTextContent("");
    expect(nextButton).not.toBeDisabled();
    expect(stepper).toBeInTheDocument();
    const nextStep = stepper.children[1];
    act(() => nextButton.click());
    expect(nextButton).not.toBeInTheDocument();
    expect(selectedStep).toHaveAttribute("data-selected", "false");
    expect(nextStep).toHaveAttribute("data-selected", "true");
});