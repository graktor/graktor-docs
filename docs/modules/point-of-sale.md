---
id: point-of-sale
title: Point of sale
sidebar_position: 2
---

# Point of sale

The till screen every cashier uses to ring up a sale.

## What it does

- Scans/searches products, builds a cart, takes payment (cash, card/transfer, wallet, or split
  across them), and prints/shows a receipt.
- **Held sales** — a cashier can pause a cart mid-ring-up to serve someone else, then come back to
  it later. Any held sale is visible to any cashier at the branch (not just whoever held it), so a
  shift change doesn't strand a paused sale.
- **Returns** — against a completed sale: restores the stock, refunds the customer (cash, wallet,
  or reduces what they owe on credit), and adjusts the original sale's own totals directly so
  every revenue/profit report stays correct. Admin/Manager only, since it rewrites a historical
  sale.
- **Discounts** — both per-product and cart-wide.
- **Gift cards** — Admin/Manager issue one with a value and a generated code; any signed-in role
  can redeem a code into a customer's wallet. v1 is full-value, one-time redemption — no partial
  spend-down of a single card yet.
- **Credit sales** — part of a sale's total can be put on credit instead of paid in full, if the
  customer has a credit limit set (see [Customers & CRM](./customers-and-crm.md)).

## Offline mode

The till keeps working without an internet connection: products and customers are cached locally
so a cashier can still look someone up and complete a sale, and everything syncs once the
connection is back. Nothing rung up offline is lost.

## Roles

Any signed-in role can run the till, hold/resume/discard a held sale, and redeem a gift card.
Returns and gift card *issuing* are Admin/Manager only.
