window.addEventListener("keydown", function (event) {
  const nodePromptTextArea = document.getElementById("prompt-textarea");
  if (!nodePromptTextArea) {
    return;
  }
  const isFocusingOnPromptTextArea = nodePromptTextArea.contains(document.activeElement)

  if (!isFocusingOnPromptTextArea && event.key === "/") {
    event.preventDefault();
    nodePromptTextArea.focus();
  }

  if (isFocusingOnPromptTextArea && event.key === "Escape") {
    nodePromptTextArea.blur();
  }
});
