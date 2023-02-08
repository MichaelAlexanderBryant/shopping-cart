import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {

    it('should render App', () => {
        render(<App />)
    });

    it("renders correct heading", () => {
        render(<App />);
        expect(screen.getByRole("heading").textContent).toMatch(/Boltzmann's Books/);
    });

    it("renders navigation", () => {
        render(<App />);
        const navigation = screen.getByTestId('navigation');
        expect(navigation).toBeDefined()
        const home = screen.getByTestId('home').textContent;
        expect(home).toMatch(/Home/)
        const books = screen.getByTestId('books').textContent;
        expect(books).toMatch(/Books/)
        const cart = screen.getByTestId('cart').textContent;
        expect(cart).toMatch(/Shopping Cart/)
    });

    it("renders empty shopping cart", () => {
        render(<App />);
        const cartNumber = screen.getByTestId('cart-number').textContent;
        expect(cartNumber).toMatch(/0/);
    })

    it("renders shop now button", () => {
        render(<App />);
        expect(screen.getByRole("button").textContent).toMatch(/Shop Now/);
    });
});