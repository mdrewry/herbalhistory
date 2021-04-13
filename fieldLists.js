const cannabisFamilySelection = [
  { label: "Indica", value: "Indica" },
  { label: "Sativa", value: "Sativa" },
  { label: "Hybrid", value: "Hybrid" },
  { label: "Unknown", value: "Unknown" },
];
const thcValueTypeSelection = [
  { label: "%", value: "%" },
  { label: "mg", value: "mg" },
];
const consumptionMethodSelection = [
  { label: "Inhalation (smoke)", value: "Inhalation (smoke)" },
  { label: "Inhalation (vaporizer)", value: "Inhalation (vaporizer)" },
  { label: "Sublingual", value: "Sublingual" },
  { label: "Topical", value: "Topical" },
  { label: "Edible", value: "Edible" },
];
const moodWordsSelection = [
  { label: "Calm", value: "Calm" },
  { label: "Relaxed", value: "Relaxed" },
  { label: "Uplifted", value: "Uplifted" },
  { label: "Creative", value: "Creative" },
  { label: "Energetic", value: "Energetic" },
  { label: "Happy", value: "Happy" },
  { label: "Euphoric", value: "Euphoric" },
  { label: "Paranoid", value: "Paranoid" },
  { label: "Sad", value: "Sad" },
  { label: "Restless", value: "Restless" },
  { label: "Anxious", value: "Anxious" },
];
const positiveWordsSelection = [
  { label: "Pain Relief", value: "Pain Relief" },
  { label: "Energy", value: "Energy" },
  { label: "Focused", value: "Focused" },
  { label: "Muscle Relief", value: "Muscle Relief" },
  { label: "Intestinal Relief", value: "Intestinal Relief" },
  { label: "Sedative", value: "Sedative" },
  { label: "Anti-Depressant", value: "Anti-Depressant" },
  { label: "Reduced Anxiety", value: "Reduced Anxiety" },
  { label: "Anti-Inflammatory", value: "Anti-Inflammatory" },
  { label: "Increased Appetite", value: "Increased Appetite" },
  { label: "Mood Booster", value: "Mood Booster" },
];
const negativeWordsSelection = [
  { label: "Dry Mouth", value: "Dry Mouth" },
  { label: "Dry Eyes", value: "Dry Eyes" },
  { label: "Dizziness", value: "Dizziness" },
  { label: "Nausea", value: "Nausea" },
  { label: "Drowsy", value: "Drowsy" },
  { label: "Anxiety", value: "Anxiety" },
  { label: "Paranoia", value: "Paranoia" },
  { label: "Headache", value: "Headache" },
  { label: "Couch Lock", value: "Couch Lock" },
];
const wouldTryAgainSelection = [
  { label: "Yes", value: true },
  { label: "No", value: false },
];
const overallRatingSelection = [
  { label: "Bad", value: 0 },
  { label: "Ok", value: 1 },
  { label: "Good", value: 2 },
  { label: "Great", value: 3 },
  { label: "Awesome", value: 4 },
];

const fieldLists = {
  cannabisFamilySelection,
  thcValueTypeSelection,
  consumptionMethodSelection,
  moodWordsSelection,
  positiveWordsSelection,
  negativeWordsSelection,
  wouldTryAgainSelection,
  overallRatingSelection,
};
export default fieldLists;
