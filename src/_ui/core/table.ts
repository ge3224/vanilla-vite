import { HTMLElementAttributes } from "@/_definitions/attributes";

/**
 * A constructor for the <table> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)
 */
export default function Table(
  children:
    | HTMLTableCaptionElement
    | HTMLTableSectionElement
    | HTMLTableRowElement
    | Array<
        HTMLTableCaptionElement | HTMLTableSectionElement | HTMLTableRowElement
      >,
  attributes: HTMLElementAttributes
): HTMLTableElement {
  const table = document.createElement("table");

  const allowedChildrenTypes = ["CAPTION", "THEAD", "TBODY", "TFOOT", "TR"];

  if (Array.isArray(children)) {
    children.forEach((child) => {
      if (allowedChildrenTypes.includes(child.nodeName)) {
        table.appendChild(child);
      } else {
        childWarning(child);
      }
    });
  } else if (children instanceof Node) {
    const child = children;
    if (allowedChildrenTypes.includes(child.nodeName)) {
      table.appendChild(child);
    } else {
      childWarning(child);
    }
  }

  Object.entries(attributes).map(([key, value]) => {
    switch (key) {
      case "autofocus":
        table.autofocus = value;
        return;
      case "inert":
        table.inert = value;
        return;
      default:
        table.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  return table;
}

function childWarning(child: Node) {
  console.warn(`Warning: unallowed node type: '${child.nodeName}'`);
}
