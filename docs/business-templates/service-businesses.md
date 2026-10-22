---
id: service-businesses
title: Service-business templates
sidebar_position: 2
---

# Service-business templates

49 ready-made templates for businesses that sell a service, not a physical good -- a repair job, a haircut, a tutoring session. Each one relabels the catalogue "Service" instead of "Product" throughout the admin app (purely a display label), and comes with sensible starting categories and sample services. Everything a template sets can be changed afterwards from Settings; nothing is locked in, same as any other [business template](./overview.md).

These templates are built on the same [service-business tools](../modules/overview.md#service-business-tools) every other vertical can also switch on -- [Tickets](../modules/tickets.md), [Custom Fields](../modules/custom-fields.md), [BOM](../modules/bill-of-materials.md), [Calendar booking](../modules/calendar-and-booking.md), [Commission](../modules/staff-and-commission.md), [Sale deposits](../modules/sale-deposits.md), [Serialized assets](../modules/serialized-assets.md), and [Session packs](../modules/session-packs.md). A template's own description below says exactly which of these it's set up with out of the box.

## Repair, maintenance & technical services

| Business | Tagline | Starts with |
|---|---|---|
| **Phone & Laptop Repair** | Fixed right, every time. | A real Ticket per repair now tracks Received/Diagnosing/Repairing-style stages through to Ready, with an automatic text to the customer when it's Ready. |
| **Generator & Inverter Repair** | Keeping the power on. | A real Ticket per job tracks it through to Ready. Per-hour labor-time logging isn't built yet -- log the flat job price as a service sale; ask before promising hourly time-tracking as a working feature. |
| **AC & Refrigeration Servicing** | Cool, reliably. | No recurring-contract/calendar scheduling exists yet -- log each visit as its own service sale; ask before promising automatic quarterly reminders as a working feature. |
| **Auto Mechanic Workshop** | Your vehicle, sorted. | Plate/make-model/mileage are stored as custom fields on the customer's own profile, and a real Ticket per job tracks it through to Ready. Mechanic commission can be assigned per sale line with a snapshotted percentage, reportable per staff member. A one-off externally-bought part can be logged against the job (separate from stocked parts, which already cost through inventory/BOM), so the job's real margin shows up on the ticket. |
| **Vulcanizer / Tire Repair** | In and out, fast. | Fast, standardized till pricing for patches and tire swaps. |
| **Tailoring & Fashion Design** | Cut, sewn, and ready. | Measurements are stored as a custom field on the customer's own profile. A real Ticket per order now tracks a Measured/Cutting/Sewing/Finishing-style pipeline through to Ready. |
| **Cobbler / Shoe Repair** | Shoes, restored. | A real Ticket per repair tracks it through to Ready (with an automatic text to the customer), and a condition photo can be attached to that ticket at intake. |
| **Watch & Jewelry Repair** | Precision, handled with care. | Item description and estimated value are stored as custom fields on the customer's own profile. A real deposit can be collected at intake (the sale records what's paid now and what's still due, with payments against it tracked over time). Mandatory-deposit/ID-on-intake enforcement (refusing to proceed without one) isn't built yet. |
| **Welding & Metal Fabrication** | Built to last. | A finished job's raw materials (rods, sheets, paint) can be set up as BOM components on the service product, deducted automatically from stock when it sells. A real Ticket per job also tracks it through to Ready. Formal quote-to-invoice conversion isn't built yet. |
| **Solar Panel Installation** | Power, independent. | A real Ticket per installation tracks a Survey/Quote/Install-style pipeline through to Ready. Panels and inverters can be tracked as individually-serialized units with their own warranty-expiry date, claimed by serial number at sale time. |

## Personal care & wellness

| Business | Tagline | Starts with |
|---|---|---|
| **Barbershop** | Sharp, every time. | Each sale line can be assigned to the barber who did it with a commission percentage, snapshotted and reportable per staff member. Chair-rental billing (a flat recurring charge against a barber, netted against their commission) can be recorded from the Staff page. |
| **Hair Salon (Women)** | Beautiful hair, every visit. | No chemical-formula custom field exists yet -- note a customer's formula in their profile notes for now; ask before promising a dedicated formula field as a working feature. |
| **Spa & Massage Therapy** | Relax. Recharge. | A real booking calendar now enforces room/bed capacity -- a room/bed double-booked for overlapping times is refused. |
| **Nail Studio (Manicure/Pedicure)** | Nails, done right. | Each sale line can be assigned to the technician who did it with a commission percentage, snapshotted and reportable per staff member. |
| **Laundry & Dry Cleaning** | Fresh and ready. | A real Ticket per order (reference TCK-0001 style) now tracks a Received/Washing/Ironing-style pipeline through to Ready, with an automatic text to the customer when it's Ready. |
| **Tattoo & Piercing Studio** | Art, done safely. | A real booking calendar now enforces one artist's own capacity -- double-booking the same artist for overlapping times is refused. |
| **Makeup Artist (MUA)** | Flawless, for every occasion. | A real booking calendar now enforces the artist's own capacity for event dates. |
| **Physiotherapy Clinic** | Movement, restored. | Session packages are real now -- selling a package product automatically grants its sessions, redeemed per visit. A medical-notes custom field isn't built yet. |

## Home, property & logistics

| Business | Tagline | Starts with |
|---|---|---|
| **Cleaning Services (Home/Office)** | Spotless, on schedule. | A service can carry a rate per square foot, which the till uses to suggest a price from the job's area -- still a cashier-editable suggestion, not a binding automatic quote. |
| **Pest Control** | Pest-free, guaranteed. | No recurring-contract scheduling exists yet -- log each visit as its own service sale; ask before promising automatic recurring reminders as a working feature. |
| **Fumigation Services** | Clean, certified. | No certificate-of-fumigation document template exists yet -- generate a normal invoice/receipt for now; ask before promising an automatic certificate as a working feature. |
| **Car Wash & Detailing** | Shine, every time. | Each sale line can be assigned to the washer who did it with a commission percentage, snapshotted and reportable per staff member. A Ticket per car can be put in a bay (e.g. "Bay 1") and the Tickets page shows a live queue board grouped by bay. |
| **Car Rental / Fleet Management** | On the road, your way. | A real booking calendar now enforces per-vehicle availability -- double-booking the same vehicle for overlapping dates is refused (use the vehicle's name/plate as the booked resource). |
| **Moving & Relocation Services** | Moved, with care. | No distance/volume-based auto-quoting exists yet -- price each job as a flat service sale for now; ask before promising automatic quoting as a working feature. |
| **Interior Decoration** | Spaces, reimagined. | No contractor-cost tracking distinct from CAPEX exists yet -- log contractor payments as regular expenses for now. |
| **Gardening & Landscaping** | Green, maintained. | No recurring-maintenance scheduling exists yet -- log each visit as its own service sale; ask before promising automatic recurring reminders as a working feature. |
| **Solar/Inverter Cleaning** | Panels, performing. | No subscription-based auto-billing or automated next-cleaning reminders exist yet -- log each visit as its own service sale; ask before promising subscriptions as a working feature. |
| **Security Guard Services** | Protected, around the clock. | A real booking calendar can track a guard's own shift assignments (booked as a Staff resource) -- double-booking the same guard for overlapping shifts is refused. Guard-hours and monthly client billing still run through regular staff/expenses and a monthly invoice. |
| **Delivery & Dispatch (Bike/Van)** | Delivered, on time. | Built on Graktor's existing Waybills and Dispatcher tracking -- real, working features, not a placeholder. |

## Professional & educational services

| Business | Tagline | Starts with |
|---|---|---|
| **Private Tutoring / Lesson Centers** | Learning, personalized. | A term's lessons are a real prepaid session pack now -- selling it automatically grants the lesson count, redeemed per session. Auto-renewal isn't built yet. |
| **Consulting (Business/Financial)** | Clarity, delivered. | No billable-hours time-tracking exists yet -- sell a flat project/milestone price as a service line for now; ask before promising hourly time-tracking as a working feature. |
| **Legal Services (Small Firms)** | Represented, properly. | A Case Number custom field is stored on the customer's own profile. No fuller case-management (court dates, filing status) system exists yet; ask before promising that as a working feature. |
| **Accounting & Bookkeeping** | Books, balanced. | Each catalogue entry has its own document vault (receipts, contracts, scanned forms -- not just a single storefront picture), and the same vault is available on every customer and job. |
| **Photography & Videography** | Captured, forever. | A real booking calendar now enforces capacity for shoot dates. Digital-gallery delivery-link tracking isn't built yet. |
| **Event Planning & Rentals** | Events, flawless. | No rented-out-vs-returned inventory status or damage-fee workflow exist yet -- track rentable items as regular Products with Credit Inventory for now; ask before promising a return-tracking workflow as a working feature. |
| **Catering Services** | Served, to perfection. | A menu package's raw ingredients can be set up as BOM components, deducted automatically from stock when it sells. |
| **Gym & Fitness Centers** | Stronger, every day. | Memberships and class packs are real prepaid session packs now -- selling a membership product automatically grants its sessions, redeemed per visit, tracked with expiry. No check-in log exists yet. |
| **Private Security Escort** | Safety, wherever you go. | No dispatch-assignment or shift-logging system exists yet -- track personnel assignment in the sale's own notes for now; ask before promising dispatch tracking as a working feature. |

## Food, hospitality & leisure

| Business | Tagline | Starts with |
|---|---|---|
| **Bar & Lounge** | Good drinks, good times. | A running tab is a Held Order -- keep adding rounds to it, then check out once; POS also shows a staff "confirm the customer's age" prompt before completing a sale with an age-restricted item. Both are honest-but-simple: the age check is self-certified by staff, not real ID verification, and a tab is a held cart, not a separate ledger. |
| **Hotel & Short-Let** | Rest, well. | A real booking calendar now enforces per-room availability -- double-booking the same room for overlapping dates is refused. Check-in/out status tracking isn't built yet. |
| **Cinemas & Viewing Centers** | Big screen, every show. | No showtime/seat-selection system exists yet -- sell tickets as regular service items per showing; ask before promising seat selection as a working feature. |
| **Cybercafé & Business Center** | Connected, and productive. | No automatic time-based billing (clock running per session) exists yet -- sell time blocks as regular service items for now; ask before promising live session-timer billing as a working feature. |

## Creative, digital & media

| Business | Tagline | Starts with |
|---|---|---|
| **Graphic Design** | Designed, to stand out. | No revision-tracking or cloud-delivery-link field exist yet -- price per project/deliverable as a service line for now; ask before promising revision tracking as a working feature. |
| **Social Media Management** | Seen, and heard. | No content calendar or post-approval workflow exist yet -- bill the monthly retainer as a recurring-style service sale for now; ask before promising a content calendar as a working feature. |
| **Web Development** | Built, for the web. | No milestone-split billing (e.g. 50/50) tracking exists yet -- record each milestone payment as its own sale for now; ask before promising structured milestones as a working feature. |
| **Printing & Publishing** | Printed, to order. | No volume-discount tiering exists yet -- apply discounts manually at the till for now. |
| **Content Creation (Video/Photo)** | Content, that converts. | No studio-booking calendar or equipment-rental tracking exist yet -- today the system has no appointment scheduling; ask before promising booking as a working feature. |

## Agriculture & specialized

| Business | Tagline | Starts with |
|---|---|---|
| **Poultry & Livestock Services** | Raised, right. | No batch-tracking (one flock/herd as a unit) or vet-visit scheduling exist yet -- track feed/medication as regular Products and log sales per batch manually for now; ask before promising batch tracking as a working feature. |
| **Agro-Consulting & Soil Testing** | Better soil, better yield. | A lab-results custom field is stored on the customer's own profile. No site-visit map exists yet; ask before promising route planning as a working feature. |

That's 49 templates across 7 categories. Not sure which fits? Pick the closest match -- a template only sets starting defaults, so nothing here is a one-way door.
