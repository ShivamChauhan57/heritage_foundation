export const programs = [
  {
    id: "lessons",
    name: "Therapeutic & General Lessons",
    price: "$45",
    unit: "per 45-minute lesson",
    blurb:
      "One-on-one instruction in our arena, paced to the rider. Balance, confidence, and horsemanship for every ability level.",
    points: ["Certified, patient instruction", "Side-walkers available", "Adaptive mounting ramp"],
  },
  {
    id: "trail",
    name: "On-Site Trail Rides",
    price: "$40",
    unit: "per hour, per rider",
    blurb:
      "Guided rides on our own wooded trails and pasture loops — gentle horses, easy pace, families welcome.",
    points: ["All experience levels", "Helmets provided", "Groups of up to 8"],
  },
  {
    id: "combo",
    name: "Lessons & Trail Ride Combo",
    price: "$70",
    unit: "per session (approx. 2 hours)",
    blurb:
      "Start in the arena to build skills, then head out on the trail to put them to work. Our most popular first visit.",
    points: ["Arena lesson + guided trail", "Great for new riders", "Save $15 vs. booking separately"],
  },
  {
    id: "offsite",
    name: "Off-Site Adventure Trail Ride",
    price: "$95",
    unit: "per rider, half-day",
    badge: "Best Deal",
    blurb:
      "A true adventure — we trailer out to open country, creeks, and long stretches of trail for a half-day ride.",
    points: ["Half-day guided adventure", "Transport & horse included", "Snacks and water provided"],
  },
  {
    id: "partial-lease",
    name: "Partial Horse Lease",
    price: "$300",
    unit: "per month, cancel anytime",
    blurb:
      "Select your horse and enjoy unlimited daily riding. Month-to-month, no contracts, shared with a small number of riders.",
    points: ["Unlimited daily riding", "Choose your horse", "Month-to-month, cancel anytime"],
  },
  {
    id: "full-lease",
    name: "Full Horse Lease",
    price: "$600",
    unit: "per month, cancel anytime",
    badge: "Exclusive",
    blurb:
      "Exclusive access to your chosen horse — no other riders. Ideal for competitive training and serious progression.",
    points: ["No other riders", "Ideal for show & competition prep", "Month-to-month, zero contracts"],
  },
] as const;
