import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../../App";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'

describe("Homepage test", () => {

    it("clicking shop now renders shop page", async () => {
        render(<App />);
        const books = screen.getByTestId('books');
        userEvent.click(books);

        await waitFor(() => {expect(screen.getAllByText(/Add to Cart/i)[0]).toBeInTheDocument()})
        await waitFor(() => {expect(screen.queryByText("Do not add to Cart")).not.toBeInTheDocument()})
    })
});