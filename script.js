const topics = [
  {
    id: "time",
    name: "Time & mortality",
    description: "Finitude, delay, ageing, ordinary days, the weird pressure of time passing.",
    thinkers: ["Augustine", "Kundera", "Julian Barnes", "Annie Dillard", "the person you were five years ago"],
    tensions: [
      "the life you are living and the life you keep rehearsing in your head",
      "what can be measured and what can only be felt",
      "urgency and drift",
      "memory and decay",
      "the comfort of routine and the panic of time passing"
    ],
    images: ["a half-finished cup of tea", "a calendar notification", "a late train", "a jacket you forgot you owned", "light moving across a wall", "a receipt in an old bag"],
    questions: [
      "When today felt short, what was it asking you to notice?",
      "What are you postponing because it feels too small to count as a real life decision?",
      "Which ordinary moment today will you probably forget, and why might it deserve a record?",
      "Where did you feel older than you are, or younger than you are?"
    ]
  },
  {
    id: "consciousness",
    name: "Consciousness & selfhood",
    description: "Mind, body, inwardness, attention, and the strangeness of being a person at all.",
    thinkers: ["Thomas Nagel", "Schwitzgebel", "Searle", "Wittgenstein", "a version of you observing from the ceiling"],
    tensions: [
      "the private theatre of the mind and the public face you show people",
      "being a body and having a body",
      "introspection and self-deception",
      "what you feel and what you can say about feeling it",
      "habit and agency"
    ],
    images: ["your reflection in a dark window", "a cursor blinking on a blank page", "a hand resting on a desk", "a song stuck in your head", "a room you entered and forgot why"],
    questions: [
      "What did your mind do today before you had a chance to narrate it?",
      "What part of yourself felt most automatic today?",
      "Where did your body know something before your thoughts caught up?",
      "What would be left of today if all the explanations were removed?"
    ]
  },
  {
    id: "meaning",
    name: "Meaning, nihilism & survival",
    description: "Existential doubt, low motivation, courage, absurdity, small reasons to continue.",
    thinkers: ["Camus", "Sartre", "Simone de Beauvoir", "Rilke", "Theo Decker trying to keep going"],
    tensions: [
      "surviving and living",
      "freedom and exhaustion",
      "meaninglessness and tenderness",
      "performing the expected actions and actually wanting a life",
      "despair and stubbornness"
    ],
    images: ["the small blue glow of a phone at night", "a dish left in the sink", "a bus stop", "a supermarket aisle", "a door you closed too quietly"],
    questions: [
      "What kept you going today that would sound unimpressive if you explained it?",
      "Where did you act as though life had meaning, even if you did not feel convinced?",
      "What tiny refusal did you make against despair?",
      "What would change if survival itself counted as a form of courage?"
    ]
  },
  {
    id: "memory",
    name: "Memory & narrative",
    description: "The stories we make from the past, the unreliability of memory, and the self as a draft.",
    thinkers: ["Proust", "Julian Barnes", "Milan Kundera", "Toni Morrison", "a future biographer with bad handwriting"],
    tensions: [
      "what happened and what the memory wants it to mean",
      "nostalgia and evidence",
      "forgetting and forgiveness",
      "the person you were and the person you keep editing into existence",
      "private memory and family mythology"
    ],
    images: ["an old message thread", "a childhood photo", "a song from a previous version of your life", "a familiar street", "a drawer full of paper"],
    questions: [
      "Which memory has been quietly changing its meaning?",
      "What story about yourself are you starting to suspect is too neat?",
      "What would today look like if narrated by someone who misunderstood you lovingly?",
      "Which old version of you deserves more sympathy?"
    ]
  },
  {
    id: "art",
    name: "Art, beauty & attention",
    description: "Paintings, books, music, beauty, obsession, and what attention can rescue.",
    thinkers: ["Donna Tartt", "Elaine Scarry", "Rilke", "John Berger", "your piano-teacher self listening for a wrong note"],
    tensions: [
      "beauty and possession",
      "attention and grief",
      "aesthetic pleasure and moral seriousness",
      "the tiny part standing in for the whole",
      "loving something and wanting to keep it safe"
    ],
    images: ["a painting glimpsed in passing", "a chord resolving", "dust on a bookshelf", "a museum postcard", "a sentence you wanted to underline twice"],
    questions: [
      "What beautiful thing did you almost miss today?",
      "Where did attention feel like a form of care?",
      "What object would you save if it made no practical sense to save it?",
      "When did beauty feel like consolation, and when did it feel like evidence of loss?"
    ]
  },
  {
    id: "ethics",
    name: "Ethics, fairness & responsibility",
    description: "Justice, obligation, complicity, fairness, and the moral weight of ordinary choices.",
    thinkers: ["Rawls", "Nozick", "Ursula Le Guin", "Amartya Sen", "a judge who has read your diary"],
    tensions: [
      "fairness and luck",
      "what you owe people and what you can bear to owe them",
      "principles and messy facts",
      "individual comfort and collective responsibility",
      "kindness and justice"
    ],
    images: ["a bill split unevenly", "a seat offered on public transport", "a comment you did not make", "a form asking the wrong question", "a queue moving badly"],
    questions: [
      "Where did fairness feel more complicated than the rule?",
      "What obligation did you feel today but not know what to do with?",
      "Who benefited from something being called normal?",
      "What would you notice differently from behind a veil of ignorance?"
    ]
  },
  {
    id: "lawpower",
    name: "Law, power & legitimacy",
    description: "Rules, secrecy, institutions, discipline, legitimacy, resistance, and the language of authority.",
    thinkers: ["Hart", "Fuller", "Dworkin", "Foucault", "Robert Cover"],
    tensions: [
      "law as rule and law as story",
      "authority and consent",
      "secrecy and accountability",
      "obedience and interpretation",
      "discipline and freedom"
    ],
    images: ["a locked door", "a policy document", "a signature line", "a camera in a hallway", "a rule everyone follows without reading"],
    questions: [
      "Which rule shaped your day without announcing itself?",
      "Where did power appear as politeness?",
      "What did you accept today because it came in an official-looking form?",
      "If today had a hidden constitution, what would its first clause be?"
    ]
  },
  {
    id: "relationships",
    name: "Love, friendship & family",
    description: "Sibling-like closeness, intimacy, loneliness, tenderness, resentment, and the people who make us legible.",
    thinkers: ["Sally Rooney", "Ann Patchett", "Toni Morrison", "Ocean Vuong", "someone who knows exactly how you take your tea"],
    tensions: [
      "being known and being trapped by being known",
      "care and resentment",
      "dependence and pride",
      "love as attention and love as interpretation",
      "the things families remember and the things they pretend not to"
    ],
    images: ["a message left on read", "two mugs in the sink", "a familiar laugh in another room", "a childhood argument", "someone saving you a seat"],
    questions: [
      "Who made you feel most like yourself today, and was that comforting?",
      "What did you want someone to understand without having to say it?",
      "Where did love appear as inconvenience?",
      "Which relationship contains an old version of you that you still visit?"
    ]
  },
  {
    id: "mountains",
    name: "Mountains, solitude & the sublime",
    description: "Hiking, scale, silence, weather, alpenglow, and thinking better when the world gets larger.",
    thinkers: ["Kant", "Thoreau", "Mary Oliver", "a tired hiker at sunrise", "the mountain refusing to be a metaphor"],
    tensions: [
      "smallness and freedom",
      "awe and fear",
      "solitude and loneliness",
      "the body struggling and the mind clearing",
      "beauty and indifference"
    ],
    images: ["orange light on rock", "wet socks", "a trail marker", "clouds moving over a ridge", "a packed lunch eaten with cold hands"],
    questions: [
      "What landscape, real or imagined, did your mind need today?",
      "Where did feeling small make something easier?",
      "What would the mountain refuse to care about in your current worry?",
      "What did your body know after effort that your mind did not know before?"
    ]
  },
  {
    id: "knowledge",
    name: "Knowledge, failure & uncertainty",
    description: "Failure as feedback, models, assumptions, error, and the dignity of changing your mind.",
    thinkers: ["Kuhn", "Popper", "Wittgenstein", "J.K. Rowling in the failure speech", "a mathematician with a wrong proof and good coffee"],
    tensions: [
      "failure and knowledge",
      "models and reality",
      "confidence and humility",
      "being wrong and being careless",
      "evidence and wishful thinking"
    ],
    images: ["crossed-out working", "a spreadsheet with one suspicious number", "a draft covered in comments", "a map that is slightly wrong", "a calculator left open"],
    questions: [
      "What did you learn today only because something did not work?",
      "Which assumption quietly organised your thinking?",
      "Where would a better question have helped more than a better answer?",
      "What error deserves gratitude, and what error deserves repair?"
    ]
  },
  {
    id: "ai",
    name: "AI, minds & strange futures",
    description: "Artificial minds, moral status, simulation, automation, and the uncanny edges of personhood.",
    thinkers: ["Schwitzgebel", "Alan Turing", "Ted Chiang", "Greg Egan", "a chatbot having a very bad existential Tuesday"],
    tensions: [
      "intelligence and understanding",
      "simulation and experience",
      "convenience and dependency",
      "tool and companion",
      "what sounds human and what feels human"
    ],
    images: ["an autocomplete suggestion", "a blinking cursor", "a generated image with the wrong hands", "a voice note transcribed badly", "a machine waiting for a prompt"],
    questions: [
      "What part of your thinking would you happily outsource, and what part would you protect?",
      "Where did technology make you feel more human, or less?",
      "What would count as understanding you?",
      "If an artificial mind kept a diary, what would you hope it worried about?"
    ]
  }
];
const voices = {
  unforced: {
    label: "Unforced and wandering",
    texture: [
      "Let the thought move sideways if it wants to.",
      "No need to resolve the feeling.",
      "The interesting part might be the tangent.",
      "Leave the edges a little unfinished."
    ]
  },
  literary: {
    label: "Literary / image-led",
    texture: [
      "Stay with the object until it starts behaving strangely.",
      "Let one sentence be more beautiful than useful.",
      "Give the day a little weather, a little shadow, a little room.",
      "Notice the bit of the scene that refuses to become a lesson."
    ]
  },
  analytical: {
    label: "Curious / essay-ish",
    texture: [
      "Treat the thought as provisional rather than true.",
      "Let yourself follow the objection, even if it ruins the neat version.",
      "Define one word badly, then define it again with more honesty.",
      "Think on the page, not before the page."
    ]
  },
  strange: {
    label: "A little strange",
    texture: [
      "Let the premise be odd and the feeling be real.",
      "Misread the day on purpose and see what appears.",
      "Let an ordinary object have one private opinion.",
      "Make room for the sentence that feels slightly embarrassing but true."
    ]
  },
  tender: {
    label: "Soft but not sentimental",
    texture: [
      "Be kind without smoothing the thought flat.",
      "Let the entry hold sympathy and suspicion at once.",
      "Write as if the feeling deserves company, not a cure.",
      "The tender version can still be sharp."
    ]
  }
};

const lengthTextures = {
  short: [
    "A few sentences is enough.",
    "One page corner, one scrap of thought.",
    "Stop before the thought turns obedient.",
    "Let it be a note, not an entry."
  ],
  medium: [
    "Let the entry wander for a while before deciding what it is about.",
    "Follow one detour that seems irrelevant.",
    "The second thought may be better than the first.",
    "Let the prompt loosen into a small essay, scene, or confession."
  ],
  long: [
    "Return to the first image later and see if it has changed.",
    "Let the entry have weather: a beginning temperature, a shift, an aftertaste.",
    "Keep the contradictions in view rather than settling them too early.",
    "Allow one memory, one theory, and one ordinary detail to argue quietly."
  ]
};

const promptStyles = {
  mixed: "Mixed drift",
  stray: "Stray thought",
  image: "Object / scene",
  question: "Loose question",
  philosopher: "Philosopher spark",
  contradiction: "Contradiction",
  memory: "Memory glimmer",
  sentence: "First sentence",
  form: "Odd form"
};

const referenceModes = {
  subtle: "Quiet companion",
  thinker: "Thinker",
  school: "School of thought",
  none: "None"
};

const schoolsByTopic = {
  time: ["Augustine on time", "Bergson's durée", "existentialism", "phenomenology", "memento mori", "literary modernism"],
  consciousness: ["phenomenology", "ordinary language philosophy", "materialism", "panpsychism", "introspection scepticism", "embodied cognition"],
  meaning: ["existentialism", "absurdism", "nihilism", "stoicism", "negative capability", "religious doubt without the religion"],
  memory: ["Proustian memory", "narrative identity", "hermeneutics", "autobiographical memory", "Kundera's lightness", "family mythology"],
  art: ["aesthetic attention", "the sublime", "romanticism", "Berger on looking", "beauty as consolation", "art as preservation"],
  ethics: ["Rawlsian fairness", "virtue ethics", "care ethics", "utilitarian discomfort", "Sen's capability approach", "moral luck"],
  lawpower: ["legal positivism", "natural law", "interpretivism", "Foucault and discipline", "Cover's nomos", "the rule of recognition"],
  relationships: ["care ethics", "relational selfhood", "recognition theory", "ordinary language intimacy", "attachment and interpretation", "the ethics of attention"],
  mountains: ["the sublime", "romanticism", "Kant on awe", "Thoreau-ish solitude", "eco-phenomenology", "anti-metaphor nature writing"],
  knowledge: ["Popperian falsification", "Kuhn's paradigms", "fallibilism", "Wittgensteinian language-games", "epistemic humility", "model uncertainty"],
  ai: ["the Turing test", "functionalism", "Chinese Room worries", "simulation and experience", "posthumanism", "moral status of artificial minds"]
};

const thinkerNotes = {
  time: [
    { name: "Augustine", note: "time as something strangely obvious until you try to describe it" },
    { name: "Bergson", note: "lived duration rather than clock-time" },
    { name: "Kundera", note: "lightness, repetition, and the strange weight of a single life" },
    { name: "Julian Barnes", note: "memory and ageing without heroic consolation" }
  ],
  consciousness: [
    { name: "Thomas Nagel", note: "the private feel of experience" },
    { name: "Wittgenstein", note: "the limits of what can be said about inner life" },
    { name: "phenomenology", note: "consciousness as it appears from the inside" },
    { name: "Eric Schwitzgebel", note: "how unreliable introspection can be" }
  ],
  meaning: [
    { name: "Camus", note: "absurdity without surrender" },
    { name: "Sartre", note: "freedom as both possibility and burden" },
    { name: "Simone de Beauvoir", note: "meaning made with and against other people" },
    { name: "Rilke", note: "staying with the difficult question rather than solving it" }
  ],
  memory: [
    { name: "Proust", note: "memory arriving through objects and senses" },
    { name: "Kundera", note: "forgetting as both mercy and violence" },
    { name: "narrative identity", note: "the self as a story that keeps being edited" },
    { name: "Julian Barnes", note: "the unreliability of the version that survived" }
  ],
  art: [
    { name: "John Berger", note: "looking as an active, interested act" },
    { name: "Elaine Scarry", note: "beauty as something that asks to be shared" },
    { name: "Rilke", note: "art as a demand to change one's life, or at least notice it" },
    { name: "Donna Tartt", note: "beauty, damage, possession, and survival tangled together" }
  ],
  ethics: [
    { name: "Rawls", note: "fairness imagined from behind your own luck" },
    { name: "care ethics", note: "obligation as something close, partial, and lived" },
    { name: "Amartya Sen", note: "justice as what people are actually able to do and be" },
    { name: "moral luck", note: "how much of goodness depends on what did not happen" }
  ],
  lawpower: [
    { name: "Hart", note: "rules as social facts people recognise and use" },
    { name: "Fuller", note: "law's inner morality and the demands of legality" },
    { name: "Dworkin", note: "principle hidden inside interpretation" },
    { name: "Foucault", note: "power appearing through discipline, habits, rooms, forms" }
  ],
  relationships: [
    { name: "care ethics", note: "love as attention, burden, practice" },
    { name: "recognition theory", note: "being seen by others as part of becoming yourself" },
    { name: "Sally Rooney", note: "intimacy as conversation, misreading, class, silence" },
    { name: "Ocean Vuong", note: "tenderness that remembers the wound" }
  ],
  mountains: [
    { name: "Kant", note: "the sublime as awe mixed with safety and fear" },
    { name: "Thoreau", note: "solitude as a way of hearing thought differently" },
    { name: "Mary Oliver", note: "attention to the natural world without needing to own it" },
    { name: "eco-phenomenology", note: "the body thinking with weather, distance, ground" }
  ],
  knowledge: [
    { name: "Popper", note: "knowledge sharpened by what could prove it wrong" },
    { name: "Kuhn", note: "the frame that decides what counts as a fact" },
    { name: "fallibilism", note: "believing something while knowing belief can fail" },
    { name: "Wittgenstein", note: "meaning living in use, not floating above it" }
  ],
  ai: [
    { name: "Turing", note: "intelligence judged through conversation and behaviour" },
    { name: "Searle", note: "the gap between symbol handling and understanding" },
    { name: "functionalism", note: "mind as what the system does" },
    { name: "posthumanism", note: "personhood becoming less neat at the edges" }
  ]
};

const strayThings = [
  "the moment after a notification disappears",
  "the exact smell of an old stairwell",
  "a stranger's half-sentence overheard badly",
  "the relief of cancelling something",
  "a room that seemed to have been waiting for you",
  "a tiny envy you would prefer not to dignify",
  "the way a day can feel used before it begins",
  "the private politics of a group chat",
  "a face you made when nobody was watching",
  "the strange morality of being tired",
  "a purchase that briefly promised a new self",
  "the loneliness of doing admin",
  "the romance of a clean table",
  "a thought that felt borrowed",
  "a sentence you have outgrown but still repeat"
];

const firstSentences = [
  "I keep thinking about the smallness of the thing, which is probably why it matters.",
  "Today had the texture of something I could not quite name.",
  "Nothing dramatic happened, except that I noticed myself believing something.",
  "There is a version of this day that would make me look better, but I am less interested in that one.",
  "I was not sad exactly; I was arranged around an absence.",
  "The thought arrived disguised as irritation.",
  "For a few seconds, I felt older than my own plans.",
  "The object was ordinary enough to become suspicious.",
  "I did not know I was waiting until the waiting stopped.",
  "The day had one loose thread and I kept touching it."
];

const looseForms = [
  "a list of things that almost meant something",
  "a footnote to a feeling you do not want to over-explain",
  "a marginal note in a book you have not written",
  "a weather report from a room you spent too long in",
  "a paragraph that keeps changing its mind",
  "a field note about the species you become when tired",
  "an overheard conversation between two versions of you",
  "a museum caption for a very ordinary object",
  "a private superstition, stated seriously",
  "a letter to the day, but only the middle paragraph"
];

const bridgePhrases = [
  "without turning it into a lesson",
  "as if it were only half your thought",
  "with no obligation to arrive anywhere useful",
  "as if the thought belongs partly to someone else",
  "with enough looseness for a tangent",
  "while distrusting the neat explanation",
  "as if the object knows something but refuses to say it directly",
  "and let the mood contradict the idea",
  "without deciding too quickly whether it is beautiful or sad",
  "as if the day were a draft, not a verdict"
];

const questionFragments = [
  "What did I almost notice?",
  "What changed shape when I stopped looking straight at it?",
  "Which part of today felt rehearsed?",
  "What did I want the scene to mean, and what did it actually offer?",
  "Where did the day become slightly theatrical?",
  "What did I make more serious than it was? What did I make less serious?",
  "What did I inherit today: a rule, a fear, a taste, a silence?",
  "What would remain if I removed the explanation?",
  "What tiny thing had a philosophical aftertaste?",
  "Which thought felt true only because I was tired?"
];

const state = {
  currentPrompt: null,
  entries: []
};

const els = {
  topicSelect: document.querySelector("#topicSelect"),
  secondaryTopicSelect: document.querySelector("#secondaryTopicSelect"),
  moodSelect: document.querySelector("#moodSelect"),
  lengthSelect: document.querySelector("#lengthSelect"),
  promptStyleSelect: document.querySelector("#promptStyleSelect"),
  referenceSelect: document.querySelector("#referenceSelect"),
  promptTitle: document.querySelector("#promptTitle"),
  promptText: document.querySelector("#promptText"),
  promptFollowups: document.querySelector("#promptFollowups"),
  promptReference: document.querySelector("#promptReference"),
  topicPill: document.querySelector("#topicPill"),
  datePill: document.querySelector("#datePill"),
  generateButton: document.querySelector("#generateButton"),
  dailyButton: document.querySelector("#dailyButton"),
  copyPromptButton: document.querySelector("#copyPromptButton"),
  entryTitle: document.querySelector("#entryTitle"),
  entryText: document.querySelector("#entryText"),
  saveEntryButton: document.querySelector("#saveEntryButton"),
  clearEntryButton: document.querySelector("#clearEntryButton"),
  entriesList: document.querySelector("#entriesList"),
  searchEntries: document.querySelector("#searchEntries"),
  filterTopicSelect: document.querySelector("#filterTopicSelect"),
  exportTextButton: document.querySelector("#exportTextButton"),
  exportButton: document.querySelector("#exportButton"),
  importInput: document.querySelector("#importInput"),
  topicsGrid: document.querySelector("#topicsGrid"),
  themeToggle: document.querySelector("#themeToggle")
};

function init() {
  loadTheme();
  populateSelectors();
  renderTopics();
  loadEntries();
  generatePrompt({ daily: true });
  attachEvents();
  initialiseScrollReveals();
}

function populateSelectors() {
  topics.forEach(topic => {
    els.topicSelect.add(new Option(topic.name, topic.id));
    els.filterTopicSelect.add(new Option(topic.name, topic.name));
  });

  els.secondaryTopicSelect.add(new Option("None", "none"));
  topics.forEach(topic => els.secondaryTopicSelect.add(new Option(topic.name, topic.id)));
}

function attachEvents() {
  els.generateButton.addEventListener("click", () => generatePrompt({ daily: false }));
  els.dailyButton.addEventListener("click", () => generatePrompt({ daily: true }));
  els.copyPromptButton.addEventListener("click", copyPrompt);
  els.saveEntryButton.addEventListener("click", saveEntry);
  els.clearEntryButton.addEventListener("click", clearEntry);
  els.searchEntries.addEventListener("input", renderEntries);
  els.filterTopicSelect.addEventListener("change", renderEntries);
  els.exportTextButton.addEventListener("click", exportEntriesAsText);
  els.exportButton.addEventListener("click", exportEntries);
  els.importInput.addEventListener("change", importEntries);
  els.themeToggle.addEventListener("click", toggleTheme);

  [els.topicSelect, els.secondaryTopicSelect, els.moodSelect, els.lengthSelect, els.promptStyleSelect, els.referenceSelect].forEach(control => {
    control.addEventListener("change", () => generatePrompt({ daily: false }));
  });
}

function generatePrompt({ daily }) {
  const topic = topics.find(item => item.id === els.topicSelect.value) || topics[0];
  const secondaryValue = els.secondaryTopicSelect.value;
  const secondary = secondaryValue !== "none" && secondaryValue !== topic.id
    ? topics.find(item => item.id === secondaryValue)
    : null;
  const voice = voices[els.moodSelect.value] || voices.unforced;
  const length = els.lengthSelect.value || "medium";
  const promptStyle = els.promptStyleSelect.value || "mixed";
  const referenceMode = els.referenceSelect?.value || "subtle";
  const seedText = daily
    ? `${getDateKey()}-${topic.id}-${secondary?.id || "none"}-${els.moodSelect.value}-${length}-${promptStyle}-${referenceMode}`
    : `${Date.now()}-${Math.random()}-${topic.id}-${promptStyle}`;
  const rng = daily ? seededRandom(seedText) : Math.random;

  let prompt = buildPrompt({ topic, secondary, voice, length, promptStyle, referenceMode, rng });

  if (!daily) {
    const recent = getRecentPromptKeys();
    for (let attempt = 0; attempt < 12 && recent.includes(promptKey(prompt)); attempt += 1) {
      prompt = buildPrompt({ topic, secondary, voice, length, promptStyle, referenceMode, rng: Math.random });
    }
    rememberPrompt(prompt);
  }

  state.currentPrompt = {
    topic: topic.name,
    secondaryTopic: secondary?.name || null,
    voice: voice.label,
    length,
    promptStyle: promptStyles[prompt.shape] || promptStyles[promptStyle] || promptStyles.mixed,
    referenceMode: referenceModes[referenceMode] || referenceModes.subtle,
    title: prompt.title,
    text: prompt.text,
    followups: prompt.followups,
    reference: prompt.reference,
    generatedAt: new Date().toISOString(),
    daily
  };

  renderPrompt();
}

function buildPrompt({ topic, secondary, voice, length, promptStyle, referenceMode, rng }) {
  const shape = promptStyle === "mixed" ? pick(Object.keys(promptStyles).filter(key => key !== "mixed"), rng) : promptStyle;
  const image = pick([...topic.images, ...strayThings], rng);
  const scene = pick(strayThings, rng);
  const tension = pick(topic.tensions, rng);
  const question = pick([...topic.questions, ...questionFragments], rng);
  const bridge = pick(bridgePhrases, rng);
  const voiceLine = pick(voice.texture, rng);
  const lengthLine = pick(lengthTextures[length] || lengthTextures.medium, rng);
  const secondaryLine = secondary ? secondaryNudge(secondary, rng) : null;
  const reference = makeReference(topic, secondary, referenceMode, rng);

  const variations = {
    stray: () => ({
      title: "A loose thought to follow",
      text: `${sentenceCase(scene)}. ${question} ${sentenceCase(bridge)}.`,
      followups: compact([voiceLine, secondaryLine])
    }),
    image: () => ({
      title: cleanTitle(image),
      text: `${sentenceCase(image)}: not as a metaphor yet, just as a thing sitting there. What does it start to disturb about ${tension}?`,
      followups: compact(["Let the object stay ordinary for longer than feels natural.", secondaryLine, lengthLine])
    }),
    question: () => ({
      title: "One question, no assignment",
      text: `${question} Let the answer begin somewhere mildly irrelevant: ${scene}.`,
      followups: compact([voiceLine, secondaryLine])
    }),
    philosopher: () => ({
      title: "A companion, not a topic",
      text: `${reference ? `${reference.label} might hover near this: ${reference.note}. ` : "A philosopher may be nearby, but not in charge. "}${question} Let your own day remain the main evidence.`,
      followups: compact(["You can borrow the idea, misread it, or ignore it halfway through.", secondaryLine])
    }),
    contradiction: () => ({
      title: "The contradiction is the point",
      text: `I believe one thing about ${tension}; I behave as if I believe another. Start there, but let the contradiction stay human rather than becoming a problem to solve.`,
      followups: compact([`${sentenceCase(image)} may be part of the evidence.`, voiceLine, secondaryLine])
    }),
    memory: () => ({
      title: "A memory with a loose edge",
      text: `A memory returns, not dramatically, maybe only because of ${image}. What is it trying to revise about ${tension}?`,
      followups: compact(["The memory does not have to be reliable to be useful.", secondaryLine, lengthLine])
    }),
    sentence: () => ({
      title: "Start with this sentence",
      text: `${pick(firstSentences, rng)} Keep going from there, even if the sentence turns out to be false by the end.`,
      followups: compact([voiceLine, secondaryLine])
    }),
    form: () => ({
      title: "A slightly odd container",
      text: `Write ${pick(looseForms, rng)}. Let it brush against ${tension}, but do not force it to behave like a proper reflection.`,
      followups: compact([`${sentenceCase(image)} can appear if it wants to.`, secondaryLine])
    })
  };

  const created = (variations[shape] || variations.stray)();
  return {
    shape,
    title: created.title,
    text: created.text,
    followups: created.followups,
    reference
  };
}

function secondaryNudge(secondary, rng) {
  const fragments = [
    `${secondary.name} may enter only as a side-glance.`,
    `Let ${secondary.name.toLowerCase()} interrupt the thought once, then disappear.`,
    `Somewhere in the background: ${pick(secondary.tensions, rng)}.`,
    `The second lens is ${secondary.name.toLowerCase()}, but it does not need to win.`
  ];
  return pick(fragments, rng);
}

function makeReference(topic, secondary, mode, rng) {
  if (mode === "none") return null;

  const referenceTopic = secondary && rng() > 0.55 ? secondary : topic;
  if (mode === "school") {
    const school = pick(schoolsByTopic[referenceTopic.id] || schoolsByTopic.time, rng);
    return { label: school, note: `a possible school/thread for ${referenceTopic.name.toLowerCase()}` };
  }

  const note = pick(thinkerNotes[referenceTopic.id] || [], rng);
  if (!note) return null;

  if (mode === "thinker") return { label: note.name, note: note.note };

  const formats = [
    { label: note.name, note: note.note },
    { label: pick(schoolsByTopic[referenceTopic.id] || schoolsByTopic.time, rng), note: `a quiet background thread for ${referenceTopic.name.toLowerCase()}` },
    { label: note.name, note: `maybe useful, maybe not: ${note.note}` }
  ];
  return pick(formats, rng);
}

function renderPrompt() {
  const prompt = state.currentPrompt;
  els.promptTitle.textContent = prompt.title;
  els.promptText.textContent = prompt.text;
  els.topicPill.textContent = prompt.secondaryTopic ? `${prompt.topic} × ${prompt.secondaryTopic}` : prompt.topic;
  els.datePill.textContent = prompt.daily ? `Seeded for ${formatDate(new Date())}` : "Freshly remixed";

  els.promptReference.innerHTML = "";
  if (prompt.reference) {
    const reference = document.createElement("div");
    reference.className = "philosophy-hint";
    const label = document.createElement("span");
    label.textContent = "Possible companion";
    const text = document.createElement("p");
    text.innerHTML = `<strong>${escapeHtml(prompt.reference.label)}</strong> — ${escapeHtml(prompt.reference.note)}`;
    reference.append(label, text);
    els.promptReference.appendChild(reference);
  }

  els.promptFollowups.innerHTML = "";
  prompt.followups.forEach(line => {
    const p = document.createElement("p");
    p.textContent = line;
    els.promptFollowups.appendChild(p);
  });

  const card = document.querySelector(".prompt-card");
  card.classList.remove("prompt-fresh");
  void card.offsetWidth;
  card.classList.add("prompt-fresh");
}

function copyPrompt() {
  const prompt = state.currentPrompt;
  const bits = [prompt.title, "", prompt.text];
  if (prompt.reference) bits.push("", `Possible companion: ${prompt.reference.label} — ${prompt.reference.note}`);
  if (prompt.followups.length) bits.push("", ...prompt.followups.map(item => `• ${item}`));
  navigator.clipboard.writeText(bits.join("\n")).then(() => toast("Prompt copied"));
}

function saveEntry() {
  const body = els.entryText.value.trim();
  if (!body) {
    toast("Write a little before saving");
    return;
  }

  const entry = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    createdAt: new Date().toISOString(),
    title: els.entryTitle.value.trim() || "Untitled entry",
    body,
    prompt: state.currentPrompt
  };

  state.entries.unshift(entry);
  persistEntries();
  renderEntries();
  clearEntry({ keepPrompt: true });
  toast("Entry saved");
}

function clearEntry() {
  els.entryTitle.value = "";
  els.entryText.value = "";
}

function loadEntries() {
  try {
    state.entries = JSON.parse(localStorage.getItem("grace-notes-entries") || "[]");
  } catch {
    state.entries = [];
  }
  renderEntries();
}

function persistEntries() {
  localStorage.setItem("grace-notes-entries", JSON.stringify(state.entries));
}

function renderEntries() {
  const query = els.searchEntries.value.trim().toLowerCase();
  const topicFilter = els.filterTopicSelect.value;

  const filtered = state.entries.filter(entry => {
    const prompt = entry.prompt || {};
    const haystack = [entry.title, entry.body, prompt.title, prompt.text, prompt.topic, prompt.secondaryTopic, prompt.reference?.label, prompt.reference?.note].filter(Boolean).join(" ").toLowerCase();
    const topicMatch = topicFilter === "all" || prompt.topic === topicFilter || prompt.secondaryTopic === topicFilter;
    return topicMatch && (!query || haystack.includes(query));
  });

  els.entriesList.innerHTML = "";

  if (!filtered.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = state.entries.length ? "No entries match that filter." : "No entries saved yet.";
    els.entriesList.appendChild(empty);
    return;
  }

  filtered.forEach(entry => {
    const card = document.createElement("article");
    card.className = "entry-card";

    const meta = document.createElement("div");
    meta.className = "entry-meta";
    meta.textContent = `${formatDateTime(new Date(entry.createdAt))} · ${entry.prompt?.topic || "No topic"}`;

    const title = document.createElement("h3");
    title.textContent = entry.title;

    const prompt = document.createElement("p");
    prompt.className = "saved-prompt";
    const promptBits = [entry.prompt?.title, entry.prompt?.text].filter(Boolean).join(" — ");
    prompt.textContent = promptBits;

    const body = document.createElement("p");
    body.textContent = entry.body.length > 420 ? `${entry.body.slice(0, 420)}…` : entry.body;

    const actions = document.createElement("div");
    actions.className = "entry-actions row-actions";

    const restore = document.createElement("button");
    restore.className = "ghost-button";
    restore.type = "button";
    restore.textContent = "Open";
    restore.addEventListener("click", () => openEntry(entry));

    const remove = document.createElement("button");
    remove.className = "ghost-button danger";
    remove.type = "button";
    remove.textContent = "Delete";
    remove.addEventListener("click", () => deleteEntry(entry.id));

    actions.append(restore, remove);
    card.append(meta, title, prompt, body, actions);
    els.entriesList.appendChild(card);
  });
}

function openEntry(entry) {
  els.entryTitle.value = entry.title;
  els.entryText.value = entry.body;
  document.querySelector(".writing-section").scrollIntoView({ behavior: "smooth", block: "start" });
}

function deleteEntry(id) {
  state.entries = state.entries.filter(entry => entry.id !== id);
  persistEntries();
  renderEntries();
  toast("Entry deleted");
}

function exportEntriesAsText() {
  const topicFilter = els.filterTopicSelect.value;
  const entriesToExport = topicFilter === "all"
    ? state.entries
    : state.entries.filter(entry => entry.prompt?.topic === topicFilter || entry.prompt?.secondaryTopic === topicFilter);

  if (!entriesToExport.length) {
    toast("No entries to export");
    return;
  }

  const text = entriesToExport.map(entry => {
    const prompt = entry.prompt || {};
    const reference = prompt.reference ? `\nPossible companion: ${prompt.reference.label} — ${prompt.reference.note}` : "";
    return [
      entry.title,
      formatDateTime(new Date(entry.createdAt)),
      `Topic: ${[prompt.topic, prompt.secondaryTopic].filter(Boolean).join(" × ") || "No topic"}`,
      prompt.title ? `Prompt: ${prompt.title}` : "",
      prompt.text || "",
      reference,
      "",
      entry.body
    ].filter(Boolean).join("\n");
  }).join("\n\n------------------------------\n\n");

  downloadFile(`grace-notes-${getDateKey()}.txt`, text, "text/plain;charset=utf-8");
}

function exportEntries() {
  if (!state.entries.length) {
    toast("No entries to export");
    return;
  }
  downloadFile(`grace-notes-backup-${getDateKey()}.json`, JSON.stringify(state.entries, null, 2), "application/json");
}

function importEntries(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const imported = JSON.parse(reader.result);
      if (!Array.isArray(imported)) throw new Error("Invalid file");
      const existingIds = new Set(state.entries.map(entry => entry.id));
      const cleaned = imported
        .filter(entry => entry && entry.body && !existingIds.has(entry.id))
        .map(entry => ({ ...entry, id: entry.id || String(Date.now() + Math.random()) }));
      state.entries = [...cleaned, ...state.entries].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      persistEntries();
      renderEntries();
      toast(`${cleaned.length} entries imported`);
    } catch {
      toast("That JSON file could not be imported");
    } finally {
      els.importInput.value = "";
    }
  };
  reader.readAsText(file);
}

function renderTopics() {
  els.topicsGrid.innerHTML = "";
  topics.forEach(topic => {
    const card = document.createElement("article");
    card.className = "topic-card";

    const heading = document.createElement("h3");
    heading.textContent = topic.name;

    const description = document.createElement("p");
    description.textContent = topic.description;

    const thinkers = document.createElement("p");
    thinkers.className = "thinkers-line";
    thinkers.textContent = `Possible companions: ${(thinkerNotes[topic.id] || []).slice(0, 3).map(item => item.name).join(", ")}`;

    card.append(heading, description, thinkers);
    card.addEventListener("click", () => {
      els.topicSelect.value = topic.id;
      generatePrompt({ daily: false });
      document.querySelector("#prompter").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    els.topicsGrid.appendChild(card);
  });
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function loadTheme() {
  const stored = localStorage.getItem("grace-notes-theme");
  const theme = stored || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  document.documentElement.dataset.theme = theme;
  els.themeToggle.textContent = theme === "dark" ? "Light mode" : "Dark mode";
}

function toggleTheme() {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("grace-notes-theme", next);
  els.themeToggle.textContent = next === "dark" ? "Light mode" : "Dark mode";
}

function initialiseScrollReveals() {
  const revealEls = [...document.querySelectorAll(".reveal-on-scroll")];
  if (!window.IntersectionObserver) {
    revealEls.forEach(el => el.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => observer.observe(el));
}

function toast(message) {
  let el = document.querySelector(".toast");
  if (!el) {
    el = document.createElement("div");
    el.className = "toast";
    document.body.appendChild(el);
  }
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove("show"), 2200);
}

function getRecentPromptKeys() {
  try {
    return JSON.parse(localStorage.getItem("grace-notes-recent-prompts") || "[]");
  } catch {
    return [];
  }
}

function rememberPrompt(prompt) {
  const recent = [promptKey(prompt), ...getRecentPromptKeys()].slice(0, 20);
  localStorage.setItem("grace-notes-recent-prompts", JSON.stringify([...new Set(recent)]));
}

function promptKey(prompt) {
  return `${prompt.title}|${prompt.text}`.slice(0, 180);
}

function pick(list, rng = Math.random) {
  if (!list || !list.length) return "";
  return list[Math.floor(rng() * list.length)];
}

function compact(list) {
  return list.filter(Boolean);
}

function sentenceCase(text) {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function cleanTitle(text) {
  const withoutArticle = text.replace(/^(a|an|the)\s+/i, "");
  return sentenceCase(withoutArticle.length > 48 ? `${withoutArticle.slice(0, 45)}…` : withoutArticle);
}

function getDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDate(date) {
  return date.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" });
}

function formatDateTime(date) {
  return date.toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function seededRandom(seed) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i += 1) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return function random() {
    h += h << 13;
    h ^= h >>> 7;
    h += h << 3;
    h ^= h >>> 17;
    h += h << 5;
    return ((h >>> 0) / 4294967296);
  };
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

document.addEventListener("DOMContentLoaded", init);
