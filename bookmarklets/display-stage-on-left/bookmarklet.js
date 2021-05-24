if (parser.hostname === scratch.mit.edu) {
let style = document.createElement("style")

style.innerHTML = `
[class^="stage-header_stage-button-icon"] {
  transform: scaleX(-1);
}
[class^="target-pane_target-pane"] {
  -webkit-flex-direction: row-reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
}
[dir="ltr"] [class^="target-pane_stage-selector-wrapper"] {
  margin-left: 0;
  margin-right: calc(0.5rem / 2);
}
[dir="ltr"] [class^="sprite-selector_sprite-selector"] {
  margin-left: calc(0.5rem / 2);
  margin-right: 0;
}
[dir="rtl"] [class^="target-pane_stage-selector-wrapper"] {
  margin-right: 0;
  margin-left: calc(0.5rem / 2);
}
[dir="rtl"] [class^="sprite-selector_sprite-selector"] {
  margin-right: calc(0.5rem / 2);
  margin-left: 0;
}
[class^="gui_flex-wrapper"] {
  -webkit-flex-direction: row-reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
  overflow-x: hidden;
}

[dir="ltr"] [class^="backpack_backpack-header"] {
  border-top-right-radius: 0;
  border-top-left-radius: 0.5rem;
}
[dir="ltr"] [class^="blocks_blocks_C530M"] .injectionDiv,
[dir="ltr"] [class^="asset-panel_wrapper"] {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0.5rem;
}
[dir="ltr"] [class^="gui_extension-button-container"] {
  border-bottom-left-radius: 0.5rem;
}

[dir="rtl"] [class^="backpack_backpack-header"] {
  border-top-left-radius: 0;
  border-top-right-radius: 0.5rem;
}
[dir="rtl"] [class^="blocks_blocks_C530M"] .injectionDiv,
[dir="rtl"] [class^="asset-panel_wrapper"] {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0.5rem;
}
[dir="rtl"] [class^="gui_extension-button-container"] {
  border-bottom-right-radius: 0.5rem;
}

.Popover {
  z-index: 40;
}`

document.body.appendChild(style)
  }
else {
alert("Please click the bookmarklet on the scratch website (scratch.mit.edu)")
}
