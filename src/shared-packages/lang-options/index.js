import * as _ from "lodash";
export const sourceLangOptions = {
  auto: "Auto",
  en: "English",
  es: "Spanish",
  uk: "Ukrainian",
  af: "Afrikaans",
  sq: "Albanian",
  ar: "Arabic",
  hy: "Armenian",
  az: "Azerbaijani",
  eu: "Basque",
  be: "Belarusian",
  bn: "Bengali",
  bs: "Bosnian",
  bg: "Bulgarian",
  ca: "Catalan",
  ceb: "Cebuano",
  ny: "Chichewa",
  "zh-cn": "Chinese Simplified",
  "zh-tw": "Chinese Traditional",
  co: "Corsican",
  hr: "Croatian",
  cs: "Czech",
  da: "Danish",
  nl: "Dutch",
  eo: "Esperanto",
  et: "Estonian",
  tl: "Filipino",
  fi: "Finnish",
  fr: "French",
  fy: "Frisian",
  gl: "Galician",
  ka: "Georgian",
  de: "German",
  el: "Greek",
  gu: "Gujarati",
  ht: "Haitian Creole",
  ha: "Hausa",
  haw: "Hawaiian",
  iw: "Hebrew",
  hi: "Hindi",
  hmn: "Hmong",
  hu: "Hungarian",
  is: "Icelandic",
  ig: "Igbo",
  id: "Indonesian",
  ga: "Irish",
  it: "Italian",
  ja: "Japanese",
  jw: "Javanese",
  kn: "Kannada",
  kk: "Kazakh",
  km: "Khmer",
  ko: "Korean",
  ku: "Kurdish (Kurmanji)",
  ky: "Kyrgyz",
  lo: "Lao",
  la: "Latin",
  lv: "Latvian",
  lt: "Lithuanian",
  lb: "Luxembourgish",
  mk: "Macedonian",
  mg: "Malagasy",
  ms: "Malay",
  ml: "Malayalam",
  mt: "Maltese",
  mi: "Maori",
  mr: "Marathi",
  mn: "Mongolian",
  my: "Myanmar (Burmese)",
  ne: "Nepali",
  no: "Norwegian",
  ps: "Pashto",
  fa: "Persian",
  pl: "Polish",
  pt: "Portuguese",
  ma: "Punjabi",
  ro: "Romanian",
  ru: "Russian",
  sm: "Samoan",
  gd: "Scots Gaelic",
  sr: "Serbian",
  st: "Sesotho",
  sn: "Shona",
  sd: "Sindhi",
  si: "Sinhala",
  sk: "Slovak",
  sl: "Slovenian",
  so: "Somali",
  su: "Sudanese",
  sw: "Swahili",
  sv: "Swedish",
  tg: "Tajik",
  ta: "Tamil",
  te: "Telugu",
  th: "Thai",
  tr: "Turkish",
  ur: "Urdu",
  uz: "Uzbek",
  vi: "Vietnamese",
  cy: "Welsh",
  xh: "Xhosa",
  yi: "Yiddish",
  yo: "Yoruba",
  zu: "Zulu",
};
export const sourceLangOptionsRaycast = {
  auto: "🌐 Auto",
  en: "🇬🇧 English",
  es: "🇪🇸 Spanish",
  uk: "🇺🇦 Ukrainian",
  af: "🇿🇦 Afrikaans",
  sq: "🇦🇱 Albanian",
  ar: "🇸🇦 Arabic",
  hy: "🇦🇲 Armenian",
  az: "🇦🇿 Azerbaijani",
  eu: "🏴󠁥󠁳󠁰󠁶󠁿 Basque",
  be: "🇧🇾 Belarusian",
  bn: "🇧🇩 Bengali",
  bs: "🇧🇦 Bosnian",
  bg: "🇧🇬 Bulgarian",
  ca: "🏴󠁥󠁳󠁣󠁴󠁿 Catalan",
  ceb: "🇵🇭 Cebuano",
  ny: "🇲🇼 Chichewa",
  "zh-cn": "🇨🇳 Chinese Simplified",
  "zh-tw": "🇹🇼 Chinese Traditional",
  co: "🇫🇷 Corsican",
  hr: "🇭🇷 Croatian",
  cs: "🇨🇿 Czech",
  da: "🇩🇰 Danish",
  nl: "🇳🇱 Dutch",
  eo: "🌐 Esperanto",
  et: "🇪🇪 Estonian",
  tl: "🇵🇭 Filipino",
  fi: "🇫🇮 Finnish",
  fr: "🇫🇷 French",
  fy: "🇳🇱 Frisian",
  gl: "🇪🇸 Galician",
  ka: "🇬🇪 Georgian",
  de: "🇩🇪 German",
  el: "🇬🇷 Greek",
  gu: "🇮🇳 Gujarati",
  ht: "🇭🇹 Haitian Creole",
  ha: "🇳🇬 Hausa",
  haw: "🇺🇸 Hawaiian",
  iw: "🇮🇱 Hebrew",
  hi: "🇮🇳 Hindi",
  hmn: "🇨🇳 Hmong",
  hu: "🇭🇺 Hungarian",
  is: "🇮🇸 Icelandic",
  ig: "🇳🇬 Igbo",
  id: "🇮🇩 Indonesian",
  ga: "🇮🇪 Irish",
  it: "🇮🇹 Italian",
  ja: "🇯🇵 Japanese",
  jw: "🇮🇩 Javanese",
  kn: "🇮🇳 Kannada",
  kk: "🇰🇿 Kazakh",
  km: "🇰🇭 Khmer",
  ko: "🇰🇷 Korean",
  ku: "🇹🇷 Kurdish (Kurmanji)",
  ky: "🇰🇬 Kyrgyz",
  lo: "🇱🇦 Lao",
  la: "🌐 Latin",
  lv: "🇱🇻 Latvian",
  lt: "🇱🇹 Lithuanian",
  lb: "🇱🇺 Luxembourgish",
  mk: "🇲🇰 Macedonian",
  mg: "🇲🇬 Malagasy",
  ms: "🇲🇾 Malay",
  ml: "🇮🇳 Malayalam",
  mt: "🇲🇹 Maltese",
  mi: "🇳🇿 Maori",
  mr: "🇮🇳 Marathi",
  mn: "🇲🇳 Mongolian",
  my: "🇲🇲 Myanmar (Burmese)",
  ne: "🇳🇵 Nepali",
  no: "🇳🇴 Norwegian",
  ps: "🇦🇫 Pashto",
  fa: "🇮🇷 Persian",
  pl: "🇵🇱 Polish",
  pt: "🇵🇹 Portuguese",
  ma: "🇮🇳 Punjabi",
  ro: "🇷🇴 Romanian",
  ru: "🇷🇺 Russian",
  sm: "🇼🇸 Samoan",
  gd: "🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scots Gaelic",
  sr: "🇷🇸 Serbian",
  st: "🇱🇸 Sesotho",
  sn: "🇿🇼 Shona",
  sd: "🇵🇰 Sindhi",
  si: "🇱🇰 Sinhala",
  sk: "🇸🇰 Slovak",
  sl: "🇸🇮 Slovenian",
  so: "🇸🇴 Somali",
  su: "🇮🇩 Sudanese",
  sw: "🇹🇿 Swahili",
  sv: "🇸🇪 Swedish",
  tg: "🇹🇯 Tajik",
  ta: "🇮🇳 Tamil",
  te: "🇮🇳 Telugu",
  th: "🇹🇭 Thai",
  tr: "🇹🇷 Turkish",
  ur: "🇵🇰 Urdu",
  uz: "🇺🇿 Uzbek",
  vi: "🇻🇳 Vietnamese",
  cy: "🏴󠁧󠁢󠁷󠁬󠁳󠁿 Welsh",
  xh: "🇿🇦 Xhosa",
  yi: "🌐 Yiddish",
  yo: "🇳🇬 Yoruba",
  zu: "🇿🇦 Zulu",
};
export const targetLangOptions = {
  auto: "Auto",
  en: "English",
  es: "Spanish",
  uk: "Ukrainian",
  af: "Afrikaans",
  sq: "Albanian",
  ar: "Arabic",
  hy: "Armenian",
  az: "Azerbaijani",
  eu: "Basque",
  be: "Belarusian",
  bn: "Bengali",
  bs: "Bosnian",
  bg: "Bulgarian",
  ca: "Catalan",
  ceb: "Cebuano",
  ny: "Chichewa",
  "zh-cn": "Chinese Simplified",
  "zh-tw": "Chinese Traditional",
  co: "Corsican",
  hr: "Croatian",
  cs: "Czech",
  da: "Danish",
  nl: "Dutch",
  eo: "Esperanto",
  et: "Estonian",
  tl: "Filipino",
  fi: "Finnish",
  fr: "French",
  fy: "Frisian",
  gl: "Galician",
  ka: "Georgian",
  de: "German",
  el: "Greek",
  gu: "Gujarati",
  ht: "Haitian Creole",
  ha: "Hausa",
  haw: "Hawaiian",
  iw: "Hebrew",
  hi: "Hindi",
  hmn: "Hmong",
  hu: "Hungarian",
  is: "Icelandic",
  ig: "Igbo",
  id: "Indonesian",
  ga: "Irish",
  it: "Italian",
  ja: "Japanese",
  jw: "Javanese",
  kn: "Kannada",
  kk: "Kazakh",
  km: "Khmer",
  ko: "Korean",
  ku: "Kurdish (Kurmanji)",
  ky: "Kyrgyz",
  lo: "Lao",
  la: "Latin",
  lv: "Latvian",
  lt: "Lithuanian",
  lb: "Luxembourgish",
  mk: "Macedonian",
  mg: "Malagasy",
  ms: "Malay",
  ml: "Malayalam",
  mt: "Maltese",
  mi: "Maori",
  mr: "Marathi",
  mn: "Mongolian",
  my: "Myanmar (Burmese)",
  ne: "Nepali",
  no: "Norwegian",
  ps: "Pashto",
  fa: "Persian",
  pl: "Polish",
  pt: "Portuguese",
  ma: "Punjabi",
  ro: "Romanian",
  ru: "Russian",
  sm: "Samoan",
  gd: "Scots Gaelic",
  sr: "Serbian",
  st: "Sesotho",
  sn: "Shona",
  sd: "Sindhi",
  si: "Sinhala",
  sk: "Slovak",
  sl: "Slovenian",
  so: "Somali",
  su: "Sudanese",
  sw: "Swahili",
  sv: "Swedish",
  tg: "Tajik",
  ta: "Tamil",
  te: "Telugu",
  th: "Thai",
  tr: "Turkish",
  ur: "Urdu",
  uz: "Uzbek",
  vi: "Vietnamese",
  cy: "Welsh",
  xh: "Xhosa",
  yi: "Yiddish",
  yo: "Yoruba",
  zu: "Zulu",
};
export const targetLangOptionsRaycast = {
  auto: "🌐 Auto",
  en: "🇬🇧 English",
  es: "🇪🇸 Spanish",
  uk: "🇺🇦 Ukrainian",
  af: "🇿🇦 Afrikaans",
  sq: "🇦🇱 Albanian",
  ar: "🇸🇦 Arabic",
  hy: "🇦🇲 Armenian",
  az: "🇦🇿 Azerbaijani",
  eu: "🏴󠁥󠁳󠁰󠁶󠁿 Basque",
  be: "🇧🇾 Belarusian",
  bn: "🇧🇩 Bengali",
  bs: "🇧🇦 Bosnian",
  bg: "🇧🇬 Bulgarian",
  ca: "🏴󠁥󠁳󠁣󠁴󠁿 Catalan",
  ceb: "🇵🇭 Cebuano",
  ny: "🇲🇼 Chichewa",
  "zh-cn": "🇨🇳 Chinese Simplified",
  "zh-tw": "🇹🇼 Chinese Traditional",
  co: "🇫🇷 Corsican",
  hr: "🇭🇷 Croatian",
  cs: "🇨🇿 Czech",
  da: "🇩🇰 Danish",
  nl: "🇳🇱 Dutch",
  eo: "🌐 Esperanto",
  et: "🇪🇪 Estonian",
  tl: "🇵🇭 Filipino",
  fi: "🇫🇮 Finnish",
  fr: "🇫🇷 French",
  fy: "🇳🇱 Frisian",
  gl: "🇪🇸 Galician",
  ka: "🇬🇪 Georgian",
  de: "🇩🇪 German",
  el: "🇬🇷 Greek",
  gu: "🇮🇳 Gujarati",
  ht: "🇭🇹 Haitian Creole",
  ha: "🇳🇬 Hausa",
  haw: "🇺🇸 Hawaiian",
  iw: "🇮🇱 Hebrew",
  hi: "🇮🇳 Hindi",
  hmn: "🇨🇳 Hmong",
  hu: "🇭🇺 Hungarian",
  is: "🇮🇸 Icelandic",
  ig: "🇳🇬 Igbo",
  id: "🇮🇩 Indonesian",
  ga: "🇮🇪 Irish",
  it: "🇮🇹 Italian",
  ja: "🇯🇵 Japanese",
  jw: "🇮🇩 Javanese",
  kn: "🇮🇳 Kannada",
  kk: "🇰🇿 Kazakh",
  km: "🇰🇭 Khmer",
  ko: "🇰🇷 Korean",
  ku: "🇹🇷 Kurdish (Kurmanji)",
  ky: "🇰🇬 Kyrgyz",
  lo: "🇱🇦 Lao",
  la: "🌐 Latin",
  lv: "🇱🇻 Latvian",
  lt: "🇱🇹 Lithuanian",
  lb: "🇱🇺 Luxembourgish",
  mk: "🇲🇰 Macedonian",
  mg: "🇲🇬 Malagasy",
  ms: "🇲🇾 Malay",
  ml: "🇮🇳 Malayalam",
  mt: "🇲🇹 Maltese",
  mi: "🇳🇿 Maori",
  mr: "🇮🇳 Marathi",
  mn: "🇲🇳 Mongolian",
  my: "🇲🇲 Myanmar (Burmese)",
  ne: "🇳🇵 Nepali",
  no: "🇳🇴 Norwegian",
  ps: "🇦🇫 Pashto",
  fa: "🇮🇷 Persian",
  pl: "🇵🇱 Polish",
  pt: "🇵🇹 Portuguese",
  ma: "🇮🇳 Punjabi",
  ro: "🇷🇴 Romanian",
  ru: "🇷🇺 Russian",
  sm: "🇼🇸 Samoan",
  gd: "🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scots Gaelic",
  sr: "🇷🇸 Serbian",
  st: "🇱🇸 Sesotho",
  sn: "🇿🇼 Shona",
  sd: "🇵🇰 Sindhi",
  si: "🇱🇰 Sinhala",
  sk: "🇸🇰 Slovak",
  sl: "🇸🇮 Slovenian",
  so: "🇸🇴 Somali",
  su: "🇮🇩 Sudanese",
  sw: "🇹🇿 Swahili",
  sv: "🇸🇪 Swedish",
  tg: "🇹🇯 Tajik",
  ta: "🇮🇳 Tamil",
  te: "🇮🇳 Telugu",
  th: "🇹🇭 Thai",
  tr: "🇹🇷 Turkish",
  ur: "🇵🇰 Urdu",
  uz: "🇺🇿 Uzbek",
  vi: "🇻🇳 Vietnamese",
  cy: "🏴󠁧󠁢󠁷󠁬󠁳󠁿 Welsh",
  xh: "🇿🇦 Xhosa",
  yi: "🌐 Yiddish",
  yo: "🇳🇬 Yoruba",
  zu: "🇿🇦 Zulu",
};
export const autoKey = _.chain(sourceLangOptions).pick("auto").keys().first().value();
export const enKey = _.chain(targetLangOptions).pick("en").keys().first().value();
