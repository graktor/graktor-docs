---
id: tickets
title: Tickets (job workflow)
sidebar_position: 14
---

# Tickets (job workflow)

*Service-business tool.*

A job/ticket per customer -- the right fit for repair, tailoring, laundry, auto, welding, solar,
pest control, cleaning, moving, cobbler and watch/jewelry businesses, among others. Six generic
stages cover every vertical's own language:

**Open → In Progress → Awaiting Customer → Ready → Completed / Cancelled**

A free-text label rides alongside the stage so a repair shop can show "Diagnosing" or "Awaiting
Parts" while a laundry shows "Washing" or "Ironing" -- the underlying stage (and any reporting or
notification built on it) stays the same six values either way.

- A ticket can be assigned to a staff member, and optionally linked to a sale once billed.
- Moving a ticket to **Ready** (or **Awaiting Customer**) sends the customer an automatic text,
  if [SMS notifications](./customers-and-crm.md) are configured.
- A [photo or document](./attachments.md) can be attached to a ticket -- a condition photo at
  cobbler/watch-repair intake, for example.
- Cancelling a ticket requires a reason, kept on the record.

## Honesty note

There's no tenant-configurable Kanban board (custom stage names/columns per business) -- the six
stages above are fixed, with the free-text label carrying the vertical-specific wording instead.
