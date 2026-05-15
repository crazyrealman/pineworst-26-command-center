window.TRIP_DATA = {
  trip: {
    name: "Pinehurst Weekend",
    subtitle: "Golf Trip Command Center",
    dates: "May 2026",
    location: "Pinehurst, North Carolina",
    status: "Testing mode",
    liveRoundId: "r1"
  },
  players: [
    { id: "wes", name: "Wes", index: 5.4, balance: 180, record: "3-1", note: "Currently insufferable" },
    { id: "monza", name: "Monza", index: 7.8, balance: -40, record: "2-2", note: "Quietly dangerous" },
    { id: "paul", name: "Paul", index: 10.0, balance: 0, record: "2-2", note: "Suspiciously even" },
    { id: "ben", name: "Ben 🍌", index: 10.1, balance: 60, record: "2-1-1", note: "Banana equity rising" },
    { id: "jon", name: "Jon", index: 10.4, balance: -20, record: "1-2-1", note: "Due for a heater" },
    { id: "will", name: "Will", index: 13.9, balance: -70, record: "1-3", note: "Needs a back-nine miracle" },
    { id: "scott", name: "Scott", index: 14.0, balance: -130, record: "0-4", note: "Treasurer's favorite" },
    { id: "hans", name: "Hans", index: 21.7, balance: 20, record: "2-2", note: "Stroke merchant" }
  ],
  rounds: [
    {
      id: "r1",
      number: 1,
      course: "Pine Needles",
      status: "Live",
      hole: 7,
      format: "2-man net best ball Nassau",
      matches: [
        {
          id: "m1",
          teamA: ["Monza", "Hans"],
          teamB: ["Jon", "Scott"],
          front: "Monza/Hans 1 UP",
          back: "Not started",
          total: "Monza/Hans 1 UP",
          money: 20,
          holes: ["W", "AS", "L", "W", "AS", "W", "—", "—", "—"]
        },
        {
          id: "m2",
          teamA: ["Wes", "Ben 🍌"],
          teamB: ["Paul", "Will"],
          front: "All Square",
          back: "Not started",
          total: "All Square",
          money: 0,
          holes: ["AS", "W", "L", "AS", "AS", "—", "—", "—", "—"]
        }
      ]
    },
    { id: "r2", number: 2, course: "Mid Pines", status: "Upcoming", hole: null, format: "2-man net best ball Nassau", matches: [] },
    { id: "r3", number: 3, course: "Southern Pines", status: "Upcoming", hole: null, format: "2-man net best ball Nassau", matches: [] },
    { id: "r4", number: 4, course: "Tot Hill Farm", status: "Upcoming", hole: null, format: "2-man net best ball Nassau", matches: [] }
  ],
  bets: [
    { time: "10:12", type: "Nassau", text: "Monza/Hans win hole 4. Match returns to AS." },
    { time: "10:28", type: "Nassau", text: "Hole 5 tied. No blood." },
    { time: "10:46", type: "Nassau", text: "Monza/Hans win hole 6. Front now 1 UP." },
    { time: "11:04", type: "LRC", text: "LRC pot updated to $80." },
    { time: "11:17", type: "Junk", text: "Closest-to-pin claim: Ben 🍌 at 14'2\"." }
  ],
  settlement: [
    { from: "Scott", to: "Wes", amount: 80 },
    { from: "Will", to: "Ben 🍌", amount: 40 },
    { from: "Jon", to: "Monza", amount: 20 },
    { from: "Jon", to: "Hans", amount: 20 }
  ],
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
    "All disputes go in the audit log, because memories get creative after bourbon."
  ]
};
