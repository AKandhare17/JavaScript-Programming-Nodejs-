# Simple Calculator

A basic calculator built with HTML, CSS, and vanilla JavaScript. Supports addition, subtraction, multiplication, and division through a clean, dark-themed button interface.

## Demo

Open `index.html` in any browser — no build step or dependencies required.

## Features

- Basic arithmetic operations: `+`, `-`, `*`, `/`
- Decimal number support
- Clear (`C`) button to reset the display
- Responsive button-press styling (hover and active states)
- Rounded, modern dark UI with orange accent for operator keys

## Project Structure

```
├── index.html        # Calculator markup and button layout
├── calculator.css    # Styling for layout, buttons, and display
└── calculator.js     # Calculator logic
```

> Note: rename `calcualtor.html` to `index.html` before/while uploading so GitHub Pages (or any static host) picks it up automatically.

## How It Works

- Each number/operator button calls `appendToDisplay()`, which appends the clicked value to the display input.
- The `=` button calls `calculate()`, which evaluates the expression in the display using `eval()` and shows the result (or `"Error"` if the expression is invalid).
- The `C` button calls `clearDisplay()` to reset the input field.

## Usage

1. Open `index.html` in your browser.
2. Click the buttons to build an expression and press `=` to evaluate.

## Known Limitations

- Uses JavaScript's `eval()` to evaluate expressions, which is not recommended for production apps (potential security risk if input isn't tightly controlled). A future improvement would be to replace this with a safe expression parser.
- No keyboard input support yet.
- No operator chaining validation (e.g., `5++3` will produce an error rather than being auto-corrected).

## Future Improvements

- Replace `eval()` with a safer expression evaluator.
- Add keyboard support.
- Add memory functions (M+, M-, MR, MC).
- Add percentage and square-root operations.

## License

MIT License

Copyright (c) 2025 Akandhare17

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.