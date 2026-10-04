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

## Known limits (ask before promising these)

- **No first-class size/colour/shade variants.** A boutique's one "Dress" style in five sizes, or
  a cosmetics shade range, each needs its own product/SKU today — there's no single parent
  product with child variants yet.
- **No per-unit serial number history.** The barcode field can hold an IMEI or serial number per
  product, but there's no ledger of which individual unit was sold to which customer.
- **No recipe/bill-of-materials tracking.** A restaurant's menu item is its own stock line; selling
  it does not automatically deduct the raw ingredients that went into it.
