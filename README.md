# context-menu

A small (4kb / 1.6kb gzipped) JavaScript library for adding context menus to any HTML element.

## API

```js
// Constructor
new ContextMenu(selector[, options]);
```

* `selector` (String) - Show context menus for elements matching this selector
* `options` (Object)
  * `className` (String, default: `''`) - CSS class to add to the context menu element
  * `minimalStyling` (Boolean, default: `false`) - If true, does not apply default theme CSS class to context menu element

```js
// Event helper methods
ContextMenu.prototype.on(type, listener);
ContextMenu.prototype.off(type, listener);
```

* `type` (String) - Event type; one of: `created`, `shown`, `hidden`, `itemselected`
* `listener` (Function) - Callback for event listener

## Example

```js
import ContextMenu from 'context-menu';

const menu = new ContextMenu('table tr', [
  { name: 'Add row', fn: () => { /* ... */ }},
  { name: 'Remove row', fn: () => { /* ... */ }},
]);

menu.on('itemselected', () => { /* ... */ });
```
