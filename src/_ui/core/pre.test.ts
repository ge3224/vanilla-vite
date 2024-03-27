// @vitest-environment happy-dom

import { expect, test } from "vitest";
import { HTMLElementAttributes } from "@/_definitions/attributes";
import Pre from "./pre";

test("basic construction", () => {
  const mock = Pre("foo", {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual("PRE");
  expect(mock.textContent).toBe("foo");
});

test("construction with a child node", () => {
  const mockChildren = [
    document.createElement("span"),
    document.createElement("strong"),
    document.createElement("div"), // not phrasing content
  ];

  const mockParent = Pre(mockChildren, {});

  expect(mockParent.childNodes.length).toBe(2);
});

test("construction with attributes", () => {
  const mock = Pre("foo", {
    id: "bar",
    class: "foo bar baz",
  } as HTMLElementAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
