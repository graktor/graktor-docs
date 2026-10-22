---
id: products-and-inventory
title: Products & inventory
sidebar_position: 3
---

# Products & inventory

## What it does

- Product catalog with cost, price, stock on hand, reorder level, unit, and category.
- **Low-stock alerts** once stock falls under a product's reorder level.
- **Carton pricing** — a flat bulk rate independent of the per-unit price, for businesses that
  sell both single units and full cartons of the same product.
- **Barcode/SKU** — free-form by default; the [retail pack](./retail-pack.md) adds real barcode
  scanning at the till.
- **Branch transfers** (retail pack) — move stock between branches with a record of the move.

## Batch tracing & expiry (pharmacy pack)

For businesses on the [pharmacy pack](./pharmacy.md): stock is tracked in dated batches rather
than one running total. Selling always takes from the batch that expires soonest first, and a
batch past its expiry date is never sold — this also means a recall can trace exactly which
batch(es) a sale came from.

## Service-business additions

- **[Bill of materials](./bill-of-materials.md)** — a product can list the other products it
  consumes to deliver (a repair's screen part, a dish's ingredients), deducted automatically on
  sale.
- **[Serialized assets](./serialized-assets.md)** — a product can track individually-serialed
  units (a specific vehicle, a specific panel) instead of a fungible quantity.
- **Age-restricted items** — a product can be flagged so POS shows a staff age-confirmation prompt
  before checkout.
- **Square-footage pricing** — a service can carry a rate per square foot, which POS uses to
  suggest a price from the job's area.
- **Document vault** — any product/service can have photos/documents attached (see
  [Attachments](./attachments.md)), not just its one storefront picture.
- **Product variants** — many size/colour SKUs (a boutique's "Dress" in five sizes, a cosmetics
  shade range) can be grouped under one shared style with a shared name/photo, shown as a single
  tile in POS and on the storefront with a variant picker. Each size/colour is still its own real
  product/SKU with its own stock and price — this is a display grouping, not a merged inventory
  row with attribute facets (no separate "Size" and "Colour" dimensions crossed against each
  other).

## Known limits (ask before promising these)

- No limits specific to this module beyond what's noted above.
