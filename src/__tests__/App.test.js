import { render, screen } from "@testing-library/react";
import App from "../App";

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image with alt text", () => {
  render(<App />);
  const image = screen.getByAltText(/my profile picture/i);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src");
});

test("displays a second-level heading with 'About Me'", () => {
  render(<App />);
  const heading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });
  expect(heading).toBeInTheDocument();
});

test("displays a biography paragraph", () => {
  render(<App />);
  const paragraph = screen.getByText(/i'm a software engineer/i);
  expect(paragraph).toBeInTheDocument();
});

test("has a link to GitHub", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  expect(githubLink).toHaveAttribute("href", expect.stringContaining("github.com"));
});

test("has a link to LinkedIn", () => {
  render(<App />);
  const linkedInLink = screen.getByRole("link", { name: /linkedin/i });
  expect(linkedInLink).toHaveAttribute("href", expect.stringContaining("linkedin.com"));
});
