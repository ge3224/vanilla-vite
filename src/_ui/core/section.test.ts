// @vitest-environment happy-dom

import { expect, test } from "vitest";
import { HTMLElementAttributes } from "@/_definitions/attributes";
import Section from "./section";

test("basic construction", () => {
  const mock = Section("foo", {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual("SECTION");
  expect(mock.textContent).toBe("foo");
});

test("construction with a child node", () => {
  const mockChildren = [
    document.createElement("h1"),
    document.createElement("p"),
    document.createElement("span"),
    document.createElement("style"), // not flow content
  ];

  const mockParent = Section(mockChildren, {});

  expect(mockParent.childNodes.length).toBe(3);
});

test("construction with attributes", () => {
  const mock = Section("foo", {
    id: "bar",
    class: "foo bar baz",
  } as HTMLElementAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});