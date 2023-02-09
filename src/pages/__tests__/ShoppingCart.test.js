import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../../App";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'


describe("ShoppingCart tests", () => {

    it("having no book in cart renders no subtotal", async () => {
        render(<App />);
        let cart = screen.getByTestId('cart')
        userEvent.click(cart);
        const noItems = await waitFor(() => {return screen.getByTestId('no-items')});
        expect(noItems).toBeInTheDocument();
        
    });

    it("adding book to cart renders subtotal in shopping cart", async () => {
        render(<App />);
        let button = await waitFor(() => {return screen.getByTestId(/Books/i)})
        userEvent.click(button);
        let add = await waitFor(() => {return screen.getAllByText(/Add to Cart/i)[0]},{timeout:10000})
        userEvent.click(add);
        let cart = screen.getByTestId('cart')
        userEvent.click(cart);
        const subtotal = await waitFor(() => {return screen.getByTestId('subtotal')},{timeout:10000});
        expect(subtotal).toBeInTheDocument();

    });
});