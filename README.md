# Testing Herokuapp

Automation testing practice using [the-internet.herokuapp.com](https://the-internet.herokuapp.com/) with Playwright.

## Overview

This project contains automated end-to-end tests for various interactive web components and features using the Playwright testing framework.

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/robbennett123/testing_herokuapp.git
cd testing_herokuapp
```

2. Install dependencies:
```bash
npm install
```

## Project Structure

```
testing_herokuapp/
├── tests/
│   ├── fixtures.ts                              # Custom test fixtures
│   ├── hello_herokuapp_checkboxes.spec.ts       # Checkbox tests
│   ├── hello_herokuapp_file_upload.spec.ts      # File upload tests
│   └── hello_herokuapp_horizontal_slider.spec.ts # Slider tests
├── playwright.config.ts                         # Playwright configuration
├── playwright-report/                           # HTML test reports
├── test-results/                                # Test result artifacts
├── package.json
└── README.md
```

## Available Tests

- **Checkboxes** - Tests for checkbox interactions and state management
- **File Upload** - Tests for file upload functionality
- **Horizontal Slider** - Tests for slider input interactions

## Running Tests

Run all tests:
```bash
npx playwright test
```

Run a specific test file:
```bash
npx playwright test tests/hello_herokuapp_checkboxes.spec.ts
```

Run tests in a specific browser:
```bash
npx playwright test --project=chromium
```

Run tests in UI mode (interactive):
```bash
npx playwright test --ui
```

## Viewing Test Reports

After running tests, view the HTML report:
```bash
npx playwright show-report
```

## Test Configuration

Tests are configured in `playwright.config.ts`:
- **Test directory**: `./tests`
- **Browser**: Chromium (Firefox and Safari are commented out)
- **Reporter**: HTML report
- **Parallelization**: Enabled (runs tests in parallel)
- **Retries**: 0 on local, 2 on CI
- **Tracing**: Enabled on first retry

## Custom Fixtures

The `fixtures.ts` file provides a custom `preparedPage` fixture that:
- Navigates to the-internet.herokuapp.com
- Verifies the welcome page is loaded
- Automatically closes the browser after each test

## Technologies

- **Playwright** - E2E testing framework
- **TypeScript** - Type-safe test code
- **Node.js** - JavaScript runtime

## License

ISC

## Repository

[GitHub - testing_herokuapp](https://github.com/robbennett123/testing_herokuapp)
