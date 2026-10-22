---
id: custom-fields
title: Custom fields
sidebar_position: 15
---

# Custom fields

*Service-business tool.*

Free-form fields a business adds for itself -- an IMEI, a vehicle plate number, a set of
measurements, a legal case number -- without needing a column built into the app for every
possible vertical. Fields are defined once per business (for customers or for
[tickets](./tickets.md)), then filled in per record.

- A field can be marked required.
- Several [service-business templates](../business-templates/service-businesses.md) come with
  relevant fields already defined -- phone repair starts with an IMEI field, auto mechanic with
  plate/make-model/mileage, tailoring with measurements, and so on.
- Removing a field definition also removes every value filled in against it.

## Honesty note

Fields are plain text today -- no dropdown/date/number field types, and no validation beyond
"required or not."
