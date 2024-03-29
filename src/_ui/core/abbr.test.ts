// @vitest-environment happy-dom

import { expect, test } from "vitest";
import { HTMLElementAttributes } from "@/_definitions/attributes";
import Abbr from "./abbr";

test("basic construction", () => {
  const mock = Abbr("foo", {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual("ABBR");
  expect(mock.textContent).toBe("foo");
});

test("construction with a child node", () => {
  const mockChildren = [
    document.createElement("span"),
    document.createElement("strong"),
    document.createElement("div"), // not phrasing content
  ];

  const mockParent = Abbr(mockChildren, {});

  expect(mockParent.childNodes.length).toBe(2);
});

test("construction with attributes", () => {
  const mock = Abbr("foo", {
    id: "bar",
    class: "foo bar baz",
  } as HTMLElementAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
