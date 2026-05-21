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
    { id: "wes", name: "Wes", index: 5.4, balance: 0, record: "0-0", note: "Handicap updated" },
    { id: "monza", name: "Monza", index: 7.8, balance: 0, record: "0-0", note: "Handicap updated" },
    { id: "paul", name: "Paul", index: 12, balance: 0, record: "0-0", note: "Handicap locked by committee" },
    { id: "ben", name: "Ben 🍌", index: 14.8, balance: 0, record: "0-0", note: "Locked at 14.8; cattle prod clause pending" },
    { id: "jon", name: "Jon", index: 10.2, balance: 0, record: "0-0", note: "Handicap updated" },
    { id: "will", name: "Will", index: 14.1, balance: 0, record: "0-0", note: "Handicap updated" },
    { id: "scott", name: "Scott", index: 13.6, balance: 0, record: "0-0", note: "Handicap updated" },
    { id: "hans", name: "Hans", index: 22.7, balance: 0, record: "0-0", note: "Handicap updated" }
  ],
  rounds: [
    {
      id: "r1",
      number: 1,
      course: "Pine Needles",
      date: "Thursday May 21",
      tees: "White tees",
      yardage: 6002,
      par: 71,
      status: "Live",
      hole: 18,
      format: "2-man net best ball Nassau",
      scorecardTemplate: "assets/scorecards/pine-needles-updated-scorecards-2026-05-21.pdf",
      matches: [
        { foursome: "A", teeTime: "11:00 AM", teamA: ["Wes", "Hans"], teamB: ["Ben 🍌", "Jon"], front: "Ben/Jon 2 up", back: "Ben/Jon 1 up", total: "Ben/Jon 3 up", money: 0, holes: ["L", "L", "W", "L", "L", "W", "W", "T", "L", "W", "W", "T", "L", "L", "T", "T", "T", "L"] },
        { foursome: "B", teeTime: "11:10 AM", teamA: ["Monza", "Scott"], teamB: ["Paul", "Will"], front: "Tied", back: "Paul/Will 2 up", total: "Paul/Will 2 up", money: 0, holes: ["W", "W", "W", "L", "W", "T", "L", "L", "L", "T", "L", "W", "L", "L", "T", "L", "T", "W"] }
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
      status: "Final posted",
      note: "Group A final scorecard logged. Match result: Ben/Jon win front 2 up, back 1 up, total 3 up. Hole 15 clarified as W4 / H8 / J5 / B7.",
      file: "assets/scorecards/pine-needles-group-a-final-2026-05-21.jpg",
      receivedFrom: "Wes",
      receivedAt: "May 21, 2026 4:01 PM",
      scores: [
        { player: "Wes", gross: "88", holes: [6, 6, 4, 4, 4, 5, 4, 5, 6, 6, 6, 5, 4, 5, 4, 4, 6, 4], strokes: [2, 6, 7, 10, 14] },
        { player: "Hans", gross: "110", holes: [7, 7, 4, 7, 7, 5, 5, 5, 7, 6, 5, 7, 5, 6, 8, 6, 8, 5], strokes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18] },
        { player: "Jon", gross: "87", holes: [5, 5, 4, 4, 3, 6, 6, 4, 4, 6, 5, 5, 5, 4, 5, 4, 8, 4], strokes: [1, 2, 4, 5, 6, 7, 10, 14, 15, 17, 18] },
        { player: "Ben 🍌", gross: "102", holes: [6, 6, 4, 4, 4, 5, 6, 6, 7, 6, 6, 8, 4, 5, 7, 6, 7, 5], strokes: [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18] }
      ],
    },
    {
      id: "pine-needles-group-b-card",
      course: "Pine Needles — Group B",
      round: "Round 1",
      status: "Final posted",
      note: "Group B final scorecard logged. Match result: Monza/Scott tied front, Paul/Will win back 2 up and total 2 up.",
      file: "assets/scorecards/pine-needles-group-b-final-2026-05-21.jpg",
      receivedFrom: "Wes",
      receivedAt: "May 21, 2026 4:23 PM",
      scores: [
        { player: "Paul", gross: "88", holes: [6, 6, 5, 5, 4, 6, 5, 6, 4, 5, 5, 4, 3, 5, 6, 2, 6, 5], strokes: [1, 2, 4, 5, 6, 7, 9, 10, 11, 14, 15, 17, 18] },
        { player: "Monza", gross: "85", holes: [6, 6, 2, 5, 3, 6, 5, 5, 5, 5, 4, 4, 3, 6, 6, 5, 4, 5], strokes: [2, 5, 6, 7, 10, 14, 15, 17] },
        { player: "Will", gross: "88", holes: [7, 6, 4, 6, 4, 5, 4, 5, 4, 6, 4, 5, 3, 6, 6, 4, 4, 5], strokes: [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18] },
        { player: "Scott", gross: "93", holes: [5, 5, 4, 6, 5, 5, 6, 6, 5, 7, 6, 4, 3, 7, 8, 3, 4, 4], strokes: [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 17, 18] }
      ]
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
