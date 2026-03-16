export const doctors = [
  { id: "d1", name: "Dr. Priya Sharma", role: "Psychiatrist" },
];

export const patients = [
  { id: "P-1001", name: "Ananya Kumar", age: 28, gender: "F" },
  { id: "P-1002", name: "Rahul Verma", age: 34, gender: "M" },
  { id: "P-1003", name: "Nidhi Rao", age: 41, gender: "F" },
];

export const assessments = [
  {
    id: "A-001",
    patient: "Ananya Kumar",
    test: "PHQ-9",
    score: 14,
    severity: "Moderate",
    date: "Mar 15, 2026",
  },
  {
    id: "A-002",
    patient: "Rahul Verma",
    test: "GAD-7",
    score: 9,
    severity: "Mild",
    date: "Mar 15, 2026",
  },
  {
    id: "A-003",
    patient: "Nidhi Rao",
    test: "PHQ-9",
    score: 19,
    severity: "Moderately Severe",
    date: "Mar 14, 2026",
  },
];

export const questions = [
  {
    id: 1,
    text: "Little interest or pleasure in doing things",
  },
  {
    id: 2,
    text: "Feeling down, depressed, or hopeless",
  },
  {
    id: 3,
    text: "Trouble falling or staying asleep, or sleeping too much",
  },
  {
    id: 4,
    text: "Feeling tired or having little energy",
  },
  {
    id: 5,
    text: "Poor appetite or overeating",
  },
];

export const severityMap = [
  { label: "0-4", meaning: "Minimal", color: "bg-emerald-100 text-emerald-800" },
  { label: "5-9", meaning: "Mild", color: "bg-sky-100 text-sky-800" },
  { label: "10-14", meaning: "Moderate", color: "bg-amber-100 text-amber-800" },
  { label: "15-19", meaning: "Moderately Severe", color: "bg-orange-100 text-orange-800" },
  { label: "20-27", meaning: "Severe", color: "bg-rose-100 text-rose-800" },
];
