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
    { id: "wes", name: "Wes", index: 6.2, balance: 0, record: "0-0", note: "Handicap updated" },
    { id: "monza", name: "Monza", index: 7.8, balance: 0, record: "0-0", note: "Handicap updated" },
    { id: "paul", name: "Paul", index: 12, balance: 0, record: "0-0", note: "Handicap locked by committee" },
    { id: "ben", name: "Ben 🍌", index: 14.8, balance: 0, record: "0-0", note: "Locked at 14.8; cattle prod clause pending" },
    { id: "jon", name: "Jon", index: 10.2, balance: 0, record: "0-0", note: "Handicap updated" },
    { id: "will", name: "Will", index: 14.1, balance: 0, record: "0-0", note: "Handicap updated" },
    { id: "scott", name: "Scott", index: "TBD", balance: 0, record: "0-0", note: "Update handicap" },
    { id: "hans", name: "Hans", index: 22.7, balance: 0, record: "0-0", note: "Handicap updated" }
  ],
  rounds: [
    {
      id: "r1",
      number: 1,
      course: "Pine Needles",
      date: "Thursday May 21",
      tees: "White tees",
      yardage: 6050,
      par: 71,
      status: "Pairings loaded",
      hole: null,
      format: "2-man net best ball Nassau",
      scorecardTemplate: "assets/blank-scorecards.pdf",
      matches: [
        { foursome: "A", teeTime: "11:00 AM", teamA: ["Wes", "Hans"], teamB: ["Ben 🍌", "Jon"], front: "Not started", back: "Not started", total: "Not started", money: 0, holes: Array(18).fill("") },
        { foursome: "B", teeTime: "11:10 AM", teamA: ["Monza", "Scott"], teamB: ["Paul", "Will"], front: "Not started", back: "Not started", total: "Not started", money: 0, holes: Array(18).fill("") }
      ]
    },
    {
      id: "r2",
      number: 2,
      course: "Mid Pines",
      date: "Friday May 22 AM",
      tees: "White tees",
      yardage: 6100,
      par: 72,
      status: "Pairings loaded",
      hole: null,
      format: "2-man net best ball Nassau",
      scorecardTemplate: "assets/blank-scorecards.pdf",
      matches: [
        { foursome: "A", teeTime: "8:35 AM", teamA: ["Wes", "Scott"], teamB: ["Paul", "Jon"], front: "Not started", back: "Not started", total: "Not started", money: 0, holes: Array(18).fill("") },
        { foursome: "B", teeTime: "8:45 AM", teamA: ["Monza", "Will"], teamB: ["Ben 🍌", "Hans"], front: "Not started", back: "Not started", total: "Not started", money: 0, holes: Array(18).fill("") }
      ]
    },
    {
      id: "r3",
      number: 3,
      course: "Southern Pines",
      date: "Friday May 22 PM",
      tees: "White tees",
      yardage: 5935,
      par: 71,
      status: "Pairings loaded",
      hole: null,
      format: "2-man net best ball Nassau",
      scorecardTemplate: "assets/blank-scorecards.pdf",
      matches: [
        { foursome: "A", teeTime: "1:33 PM", teamA: ["Wes", "Will"], teamB: ["Monza", "Jon"], front: "Not started", back: "Not started", total: "Not started", money: 0, holes: Array(18).fill("") },
        { foursome: "B", teeTime: "1:43 PM", teamA: ["Paul", "Ben 🍌"], teamB: ["Scott", "Hans"], front: "Not started", back: "Not started", total: "Not started", money: 0, holes: Array(18).fill("") }
      ]
    },
    {
      id: "r4",
      number: 4,
      course: "Tot Hill Farm",
      date: "Saturday May 23",
      tees: "Fezler/White",
      yardage: 5697,
      par: 72,
      status: "Pairings loaded",
      hole: null,
      format: "2-man net best ball Nassau",
      scorecardTemplate: "assets/blank-scorecards.pdf",
      matches: [
        { foursome: "A", teeTime: "10:20 AM", teamA: ["Wes", "Jon"], teamB: ["Monza", "Ben 🍌"], front: "Not started", back: "Not started", total: "Not started", money: 0, holes: Array(18).fill("") },
        { foursome: "B", teeTime: "10:30 AM", teamA: ["Paul", "Hans"], teamB: ["Will", "Scott"], front: "Not started", back: "Not started", total: "Not started", money: 0, holes: Array(18).fill("") }
      ]
    }
  ],
  bets: [],
  settlement: [],
  scorecards: [
    {
      id: "pine-needles-card",
      course: "Pine Needles",
      round: "Round 1",
      status: "Needed",
      note: "Ready for the first uploaded scorecard.",
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
