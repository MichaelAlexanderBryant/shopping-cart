import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../../App";
import userEvent from "@testing-library/user-event";

describe("ShoppingPage tests", () => {

    // it("render empty cart", async () => {
    //     render(<App />);
    //     const button = screen.getByText(/Shop Now/i);
    //     userEvent.click(button);
    //     const cartNumber = screen.getByTestId('cart-number').textContent;
    //     expect(cartNumber).toMatch(/0/);
    // });

    // it("clicking add to cart once increases cart number", async () => {
    //     render(<App />);
    //     let button = await waitFor(() => {return screen.getByText(/Shop Now/i)},{timeout:5000})
    //     userEvent.click(button);
    //     let add = await waitFor(() => {return screen.getAllByText(/Add to Cart/i)[0]},{timeout:10000})
    //     userEvent.click(add);
    //     const cartNumber = screen.getByTestId('cart-number').textContent;
    //     expect(cartNumber).toMatch(/1/);

    // });

    it("clicking add to cart multiple times increases cart number", async () => {
        render(<App />);
        let button = await waitFor(() => {return screen.getByText(/Shop Now/i)},{timeout:5000})
        userEvent.click(button);
        let add = await waitFor(() => {return screen.getAllByText(/Add to Cart/i)[0]},{timeout:10000})
        userEvent.click(add);
        userEvent.click(add);
        userEvent.click(add);
        const cartNumber = screen.getByTestId('cart-number').textContent;
        expect(cartNumber).toMatch(/3/);

    });
});