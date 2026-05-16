window.TRIP_DATA = {
  trip: {
    name: "Pineworst ’26",
    subtitle: "Golf Trip Command Center",
    dates: "May 2026",
    location: "Pinehurst, North Carolina",
    status: "Pre-trip setup",
    liveRoundId: "r1"
  },
  players: [
    { id: "wes", name: "Wes", index: 5.4, balance: 0, record: "0-0", note: "Ready" },
    { id: "monza", name: "Monza", index: 7.8, balance: 0, record: "0-0", note: "Ready" },
    { id: "paul", name: "Paul", index: 10.0, balance: 0, record: "0-0", note: "Ready" },
    { id: "ben", name: "Ben 🍌", index: 10.1, balance: 0, record: "0-0", note: "Ready" },
    { id: "jon", name: "Jon", index: 10.4, balance: 0, record: "0-0", note: "Ready" },
    { id: "will", name: "Will", index: 13.9, balance: 0, record: "0-0", note: "Ready" },
    { id: "scott", name: "Scott", index: 14.0, balance: 0, record: "0-0", note: "Ready" },
    { id: "hans", name: "Hans", index: 21.7, balance: 0, record: "0-0", note: "Ready" }
  ],
  rounds: [
    { id: "r1", number: 1, course: "Pine Needles", status: "Upcoming", hole: null, format: "2-man net best ball Nassau", matches: [] },
    { id: "r2", number: 2, course: "Mid Pines", status: "Upcoming", hole: null, format: "2-man net best ball Nassau", matches: [] },
    { id: "r3", number: 3, course: "Southern Pines", status: "Upcoming", hole: null, format: "2-man net best ball Nassau", matches: [] },
    { id: "r4", number: 4, course: "Tot Hill Farm", status: "Upcoming", hole: null, format: "2-man net best ball Nassau", matches: [] }
  ],
  bets: [],
  settlement: [],
  scorecards: [
    {
      id: "pine-needles-card",
      course: "Pine Needles",
      round: "Round 1",
      status: "Needed",
      note: "Upload or text the card image and it will live here.",
      file: null,
      receivedFrom: null,
      receivedAt: null
    },
    {
      id: "mid-pines-card",
      course: "Mid Pines",
      round: "Round 2",
      status: "Needed",
      note: "Used for hole handicaps / stroke allocation.",
      file: null,
      receivedFrom: null,
      receivedAt: null
    },
    {
      id: "southern-pines-card",
      course: "Southern Pines",
      round: "Round 3",
      status: "Needed",
      note: "Will be linked when received.",
      file: null,
      receivedFrom: null,
      receivedAt: null
    },
    {
      id: "tot-hill-card",
      course: "Tot Hill Farm",
      round: "Round 4",
      status: "Needed",
      note: "Will be linked when received.",
      file: null,
      receivedFrom: null,
      receivedAt: null
    }
  ],
  rules: [
    "2-man net best ball Nassau: front, back, and total.",
    "Handicap strokes applied by course scorecard hole rankings.",
    "LRC tracked separately from Nassau balances.",
    "All disputes go in the audit log so scoring calls stay traceable."
  ]
};
