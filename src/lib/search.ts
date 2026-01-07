import type { RefObject } from "react";

export function setSearchFormVisibility(
  searchFormRef: RefObject<HTMLFormElement | null>,
  visible: boolean
) {
  const element = searchFormRef.current;
  if (element) {
    const computedStyle = window.getComputedStyle(element);
    const displayValue = computedStyle.getPropertyValue("display");
    console.log(`Search form display: "${displayValue}"`);

    if (visible) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }
}
