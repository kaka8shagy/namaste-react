import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react";
import Body from "../Body";
import MOCK_DATA from "../../utils/mockData.js";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA),
    })
);

describe("Body Component", () => {
    it("should render the Body component with a search button", async () => {
        await act(async () =>
            render(
                <BrowserRouter>
                    <Body />
                </BrowserRouter>
            )
        );

        const searchButton = screen.getByRole("button", { name: "Search" });
        expect(searchButton).toBeInTheDocument();
    });

    it("should filter restaurant cards when searching for 'pizza'", async () => {
        await act(async () =>
            render(
                <BrowserRouter>
                    <Body />
                </BrowserRouter>
            )
        );

        const cardsBeforeSearch = screen.getAllByTestId("resCard");
        expect(cardsBeforeSearch.length).toBe(8);

        const searchInput = screen.getByTestId("searchInput");
        fireEvent.change(searchInput, { target: { value: "pizza" } });

        const searchButton = screen.getByRole("button", { name: "Search" });
        fireEvent.click(searchButton);

        const cardsAfterSearch = screen.getAllByTestId("resCard");
        expect(cardsAfterSearch.length).toBe(1);
    });

    it("should filter only vegetarian restaurants when clicking the 'Veg Only Restaurants' button", async () => {
        await act(async () =>
            render(
                <BrowserRouter>
                    <Body />
                </BrowserRouter>
            )
        );

        const vegButton = screen.getByRole("button", {
            name: "Veg Only Restaurants",
        });
        fireEvent.click(vegButton);

        const cardsAfterVegFilter = screen.getAllByTestId("resCard");
        expect(cardsAfterVegFilter.length).toBe(4);
    });
});
