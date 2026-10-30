// Free, deterministic, browser-only writing assistance. No network requests.
const clean = value => String(value || '').replace(/\s+/g, ' ').trim();
const upperFirst = value => value ? value[0].toUpperCase() + value.slice(1) : '';
const replacements = [
  [/\bresponsible for helping\b/gi, 'Assisted'],
  [/\bresponsible for managing\b/gi, 'Managed'],
  [/\bresponsible for handling\b/gi, 'Handled'],
  [/\bhelped with\b/gi, 'Supported'],
  [/\bworked on\b/gi, 'Contributed to'],
  [/\bwas responsible for\b/gi, 'Oversaw'],
  [/\bmade sure\b/gi, 'Ensured'],
  [/\bin charge of\b/gi, 'Managed'],
  [/\bdid\b/gi, 'Performed'],
  [/\ba lot of\b/gi, 'multiple'],
];
export function improveWriting(input) {
  const original = String(input || '');
  if (!original.trim()) return '';
  return original.split('\n').map(line => {
    const prefix = line.match(/^\s*(?:[-•*]\s*)?/)?.[0] || '';
    let text = clean(line.slice(prefix.length));
    if (!text) return '';
    for (const [pattern, replacement] of replacements) text = text.replace(pattern, replacement);
    text = upperFirst(text);
    if (!/[.!?]$/.test(text)) text += '.';
    return prefix + text;
  }).join('\n');
}
export function generateSummary({ title, skills, experience }) {
  const jobTitle = clean(title);
  const skillList = String(skills || '').split(',').map(clean).filter(Boolean).slice(0, 4);
  const roles = (experience || []).map(item => clean(item.role)).filter(Boolean);
  if (!jobTitle && !skillList.length && !roles.length) return '';
  const role = jobTitle || roles[0] || 'Professional';
  let result = `${upperFirst(role)} with experience in ${roles.length ? roles.slice(0, 2).join(' and ') : 'professional settings'}`;
  if (skillList.length) result += ` and skills in ${skillList.join(', ')}`;
  return `${result}.`; // Do not invent years, metrics, or achievements.
}
export function matchJobKeywords(jobDescription, resumeData) {
  const stop = new Set('about above after again also among and are been being between both can candidate company could each from have into its job more must need other our over role should that the their them there these this through using very were what when where which while will with work would your you for who all any able'.split(' '));
  const words = (text) => (String(text || '').toLowerCase().match(/[a-z][a-z+#.-]{2,}/g) || []).filter(word => !stop.has(word));
  const postingWords = words(jobDescription);
  const counts = new Map();
  postingWords.forEach(word => counts.set(word, (counts.get(word) || 0) + 1));
  const resumeText = [resumeData.title, resumeData.summary, resumeData.skills, ...(resumeData.experience || []).flatMap(e => [e.role,e.company,e.details])].join(' ');
  const present = new Set(words(resumeText));
  return [...counts.entries()].filter(([word]) => !present.has(word)).sort((a,b)=>b[1]-a[1]).slice(0, 12).map(([word]) => word);
}
