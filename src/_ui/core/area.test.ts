/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the _ui/core/area module
 */

import { expect, test } from "vitest";
import Area from "./area";
import {
  AreaAttributesTarget,
  HTMLAreaElementAttributes,
} from "@/_definitions/attributes/area";
import { HTMLElementAttributeReferrerPolicy } from "@/_definitions/attributes/referrer_policy";

// @vitest-environment happy-dom

test("basic construction", () => {
  const mock = Area({});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual("AREA");
});

test("construction with attributes", () => {
  const mock = Area({
    id: "bar",
    class: "foo bar baz",
    shape: "circle",
    coords: "75, 75, 75",
    href: "right.html",
    alt: "foo bar baz",
    rel: "foo",
    target: AreaAttributesTarget.blank,
    referrerpolicy: HTMLElementAttributeReferrerPolicy.noReferrer,
    ping: "mock",
    download: "baz",
  } as HTMLAreaElementAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
