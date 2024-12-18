# Elementor Date Restriction Script

This script provides dynamic date management for Elementor forms, ensuring proper dependencies between a check-in (`inhceckning`) field and a check-out (`utcheckning`) field. It is ideal for booking systems or reservation forms where dates must follow a logical sequence.

## Features

- **Dynamic Minimum Date for Check-in Field**:
  - The `inhceckning` field automatically sets its minimum selectable date to today's date, preventing past dates from being selected.

- **Default State Management**:
  - The `utcheckning` field is disabled by default and only becomes active once a valid date is selected in the `inhceckning` field.

- **Dynamic Minimum Date for Check-out Field**:
  - Once a date is selected in `inhceckning`, the `utcheckning` field dynamically updates to allow only dates equal to or after the selected check-in date.

- **Integration with Flatpickr**:
  - The script leverages the Flatpickr library for a modern, user-friendly datepicker interface.

- **Reset Behavior**:
  - If the check-in date is cleared, the check-out field is disabled and reset automatically.

## How It Works

1. **Initialization**:
   - The script runs when the DOM is fully loaded (`DOMContentLoaded`).
   - Flatpickr is initialized for both the check-in and check-out fields.

2. **Dynamic Updates**:
   - The `inhceckning` field has a minimum date set to today.
   - The `utcheckning` field’s datepicker dynamically adjusts its minimum date to match the selected check-in date.

3. **Field States**:
   - The `utcheckning` field is disabled until a valid check-in date is selected.
   - If the check-in date is cleared, the check-out field is disabled and reset.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/axelbriones/elementor-dates-restrict.git
   cd elementor-dates-restrict
