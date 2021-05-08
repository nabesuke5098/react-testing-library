import React from "react";
import { render, screen } from "@testing-library/react";
import Render from "./Render";
import { isAsyncThunkAction } from "@reduxjs/toolkit";

describe("Rendering", () => {
  it("Should render all the elements correnctly", () => {
    render(<Render />);
    // screen.debug();
    // screen.debug(screen.getByRole("heading"));
    expect(screen.getByRole("heading")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
    expect(screen.getAllByRole("button")[0]).toBeTruthy();
    expect(screen.getAllByRole("button")[1]).toBeTruthy();
    expect(screen.getByText("Broly")).toBeTruthy();
    expect(screen.queryByText("Brory")).toBeNull();
    expect(screen.getByTestId("copyright")).toBeTruthy();
  });
});
