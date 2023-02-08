import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../../App";
import userEvent from "@testing-library/user-event";

describe("Homepage test", () => {

    it("clicking shop now renders shop page", async () => {
        render(<App />);
        const button = screen.getByRole("button");
        userEvent.click(button);

        await (() => {expect(screen.getByText("Add to Cart")).toBeInTheDocument()})
        await (() => {expect(screen.queryByText("Do not add to Cart")).not.toBeInTheDocument()})
    })
});