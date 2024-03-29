import { HTMLElementAttributes } from "@/_definitions/attributes";

export default function Ol(
  children: HTMLLIElement | HTMLLIElement[],
  attributes: HTMLElementAttributes
): HTMLOListElement {
  const ol = document.createElement("ol");

  if (Array.isArray(children)) {
    children.forEach((child) => ol.appendChild(child));
  } else {
    ol.appendChild(children);
  }

  Object.entries(attributes).map(([key, value]) => {
    switch (key) {
      case "autofocus":
        ol.autofocus = value;
        return;
      case "inert":
        ol.inert = value;
        return;
      case "reversed":
        ol.reversed = value;
        return;
      default:
        ol.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  return ol;
}
