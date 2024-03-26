import appendChildren from "@/_lib/append_children";
import { HTMLElementAttributes } from "@/_definitions/attributes";

export default function Form(
  children: string | Node | (string | Node)[],
  attributes: HTMLElementAttributes
): HTMLFormElement {
  const form = document.createElement("form");

  appendChildren(form, children, ["FORM"]);

  Object.entries(attributes).map(([key, value]) => {
    switch (key) {
      case "acceptCharset":
        form.setAttribute("accept-charset", value);
        return;
      case "novalidate":
        form.noValidate = value ? true : false;
        return;
      case "autofocus":
        form.autofocus = value;
        return;
      case "inert":
        form.inert = value;
        return;
      default:
        form.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  return form;
}
