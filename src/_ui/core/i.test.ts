/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the _ui/core/i module
 */

import { expect, test } from "vitest";
import NewI from "./i";
import { I } from "@/_lib/node_names";

// @vitest-environment happy-dom

test("basic construction", () => {
  const mock = NewI()();

  expect(mock).not.toBeNull();

  expect(mock.tagName).toEqual(I);
});

test("construction with attributes", () => {
  const mock = NewI(undefined, {
    id: "bar",
    class: "foo bar baz",
  })();

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});

test("construction with a child node", () => {
  const mockChildren = [
    document.createElement("em"),
    document.createElement("br"),
    document.createElement("abbr"),
    document.createElement("style"), // not phrasing content
  ];

  const mockParent = NewI(mockChildren, {})();

  expect(mockParent.childNodes.length).toBe(3);
});
