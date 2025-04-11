import { fireEvent, render, screen } from '@testing-library/react';

import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import WelcomePage from './pages/WelcomePage';

test("renders link to /booking ", () => {
  render(
    <MemoryRouter>
      <WelcomePage />
    </MemoryRouter>
  );

  const linkElement = screen.getByText(/Book Your Spot Now/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement.getAttribute("href")).toBe("/book");
});

