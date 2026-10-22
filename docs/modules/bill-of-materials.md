---
id: bill-of-materials
title: Bill of materials (BOM)
sidebar_position: 16
---

# Bill of materials (BOM)

*Service-business tool.*

For a service that consumes other stocked items to deliver -- a phone-repair "Screen Replacement"
that uses a screen part, a welding job that uses rods and sheets, a catering package that uses raw
ingredients. Set one or more component products (and how many of each) on the service product; the
components are deducted automatically, in the same stock-deducting step as the sale itself.

- If a component doesn't have enough stock, the whole sale is refused -- including the parent
  item -- rather than partially completing.
- One level deep: a component's own components (if it has any) aren't cascaded.

## Honesty note

No recipe/BOM editor UI yet beyond the underlying API -- components are managed per product, not
authored as a standalone named recipe.
