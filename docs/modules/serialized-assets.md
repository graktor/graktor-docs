---
id: serialized-assets
title: Serialized assets
sidebar_position: 20
---

# Serialized assets

*Service-business tool.*

For a product where "which exact one" matters more than "how many" -- a specific vehicle, a
specific solar panel -- with its own serial number and, optionally, a warranty-expiry date.
Selling a serialized line picks one specific in-stock unit by its serial number rather than
deducting a fungible quantity.

- A unit already sold can't be sold again, and can't be removed from the record -- it's part of
  that sale's history now.
- Quantity is always exactly one per line for a serialized product.

## Honesty note

No warranty-claim workflow beyond recording the expiry date -- claims are tracked outside Graktor
for now.
