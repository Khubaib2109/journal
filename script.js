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

const moods = {
  tender: {
    instruction: "Write gently, as if explaining something delicate to a person you still want to become.",
    closers: [
      "End with one sentence of mercy toward yourself.",
      "End by naming one thing that does not need to be solved tonight.",
      "End with a tiny image rather than a conclusion."
    ]
  },
  analytical: {
    instruction: "Make one claim, test it against the day, then admit where it breaks down.",
    closers: [
      "End by revising your first claim.",
      "End with the objection you cannot quite answer.",
      "End by separating evidence from mood."
    ]
  },
  literary: {
    instruction: "Start with a concrete image and let the thought grow out of it slowly.",
    closers: [
      "End on a sensory detail.",
      "End with a sentence you would underline in a novel.",
      "End before the thought becomes too clean."
    ]
  },
  strange: {
    instruction: "Let the prompt become slightly absurd, then take the absurdity seriously.",
    closers: [
      "End with the weirdest true sentence you can write.",
      "End by asking what an alien would misunderstand.",
      "End with a rule for living that may or may not be a joke."
    ]
  },
  plain: {
    instruction: "Write plainly. No performance. Just the thought, the scene, and what it did to you.",
    closers: [
      "End with what you actually think.",
      "End with what you need next.",
      "End with one honest sentence."
    ]
  }
};

const lengthGuides = {
  five: [
    "Write for five minutes without backspacing.",
    "Choose one sentence from the entry and make it sharper.",
    "Stop while it still feels alive."
  ],
  fifteen: [
    "Write one scene, one argument, and one contradiction.",
    "Let the entry have a turn: begin somewhere ordinary, then let the ordinary become philosophical.",
    "Spend the final two minutes asking what you avoided saying."
  ],
  long: [
    "Divide the entry into three movements: the scene, the philosophical problem, and the personal cost.",
    "Let yourself contradict yourself without tidying it too early.",
    "Return to the opening image at the end and see if it has changed."
  ]
};

const promptTemplates = [
  ({ topic, secondary, mood, length, rng }) => {
    const image = pick(topic.images, rng);
    const tension = pick(topic.tensions, rng);
    const thinker = pick(topic.thinkers, rng);
    const question = pick(topic.questions, rng);
    const secondLine = secondary ? `Then pass the same moment through ${secondary.name.toLowerCase()}: what changes?` : `Let ${thinker} sit beside the thought without turning the entry into an essay.`;
    return {
      title: `Begin with ${articleFor(image)} ${image}`,
      text: `Begin with ${articleFor(image)} ${image}. Use it to think about ${tension}. ${question}`,
      followups: [secondLine, mood.instruction, pick(lengthGuides[length], rng), pick(mood.closers, rng)]
    };
  },
  ({ topic, secondary, mood, length, rng }) => {
    const tension = pick(topic.tensions, rng);
    const thinker = pick(topic.thinkers, rng);
    const image = pick(topic.images, rng);
    const secondaryBit = secondary ? ` Bring in ${secondary.name.toLowerCase()} only when the first topic starts to feel too easy.` : "";
    return {
      title: `The hidden argument of the day`,
      text: `Assume today was secretly making an argument about ${tension}. What evidence did it offer? What did it leave out?`,
      followups: [
        `Use ${articleFor(image)} ${image} as your first piece of evidence.`,
        `Imagine ${thinker} disagreeing with your interpretation.${secondaryBit}`,
        mood.instruction,
        pick(lengthGuides[length], rng)
      ]
    };
  },
  ({ topic, secondary, mood, length, rng }) => {
    const question = pick(topic.questions, rng);
    const image = pick(topic.images, rng);
    const thinker = pick(topic.thinkers, rng);
    return {
      title: `A letter from the question`,
      text: `Write a letter from this question to yourself: “${question}” Let it be kind, accusatory, funny, or badly timed.`,
      followups: [
        `It should mention ${articleFor(image)} ${image}.`,
        secondary ? `It should also misunderstand something about ${secondary.name.toLowerCase()}.` : `It can borrow one habit of mind from ${thinker}.`,
        mood.instruction,
        pick(mood.closers, rng)
      ]
    };
  },
  ({ topic, secondary, mood, length, rng }) => {
    const tension = pick(topic.tensions, rng);
    const question = pick(topic.questions, rng);
    const secondaryBit = secondary ? `, especially when seen through ${secondary.name.toLowerCase()}` : "";
    return {
      title: `The rule underneath the mood`,
      text: `Name the rule you seemed to be living by today${secondaryBit}. Was it chosen, inherited, convenient, or just quietly obeyed?`,
      followups: [
        `Test that rule against this tension: ${tension}.`,
        `Then answer the less tidy question: ${question}`,
        mood.instruction,
        pick(lengthGuides[length], rng)
      ]
    };
  },
  ({ topic, secondary, mood, length, rng }) => {
    const image = pick(topic.images, rng);
    const tension = pick(topic.tensions, rng);
    const thinker = pick(topic.thinkers, rng);
    return {
      title: `Make the small thing stand for the whole`,
      text: `Choose ${articleFor(image)} ${image}. Look at it hard enough that it starts to stand in for the whole day. What does it reveal about ${tension}?`,
      followups: [
        `Do not begin with a grand claim. Begin with what was physically there.`,
        secondary ? `Halfway through, let ${secondary.name.toLowerCase()} interrupt the scene.` : `Halfway through, let ${thinker} ask an inconvenient question.`,
        mood.instruction,
        pick(mood.closers, rng)
      ]
    };
  },
  ({ topic, secondary, mood, length, rng }) => {
    const question = pick(topic.questions, rng);
    const tension = pick(topic.tensions, rng);
    return {
      title: `A useful failure`,
      text: `Write about something today that did not resolve properly. Treat the failure as information about ${tension}, not as a verdict on you.`,
      followups: [
        `Ask: ${question}`,
        secondary ? `Then ask what ${secondary.name.toLowerCase()} makes visible that the first topic hides.` : "Separate what happened from the story your mind immediately made about it.",
        mood.instruction,
        pick(lengthGuides[length], rng)
      ]
    };
  }
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
  promptTitle: document.querySelector("#promptTitle"),
  promptText: document.querySelector("#promptText"),
  promptFollowups: document.querySelector("#promptFollowups"),
  topicPill: document.querySelector("#topicPill"),
  datePill: document.querySelector("#datePill"),
  generateButton: document.querySelector("#generateButton"),
  dailyButton: document.querySelector("#dailyButton"),
  todaysPromptButton: document.querySelector("#todaysPromptButton"),
  copyPromptButton: document.querySelector("#copyPromptButton"),
  entryTitle: document.querySelector("#entryTitle"),
  entryText: document.querySelector("#entryText"),
  saveEntryButton: document.querySelector("#saveEntryButton"),
  clearEntryButton: document.querySelector("#clearEntryButton"),
  entriesList: document.querySelector("#entriesList"),
  searchEntries: document.querySelector("#searchEntries"),
  exportButton: document.querySelector("#exportButton"),
  importInput: document.querySelector("#importInput"),
  topicsGrid: document.querySelector("#topicsGrid"),
  themeToggle: document.querySelector("#themeToggle"),
  samplePrompt: document.querySelector("#samplePrompt")
};

function init() {
  loadTheme();
  populateSelectors();
  renderTopics();
  loadEntries();
  const openingSeed = seededRandom(getDateKey() + "opening");
  els.samplePrompt.textContent = pick(topics.flatMap(topic => topic.questions), openingSeed);
  generatePrompt({ daily: true });
  attachEvents();
}

function populateSelectors() {
  topics.forEach(topic => {
    const option = new Option(topic.name, topic.id);
    els.topicSelect.add(option);
  });

  els.secondaryTopicSelect.add(new Option("None", "none"));
  topics.forEach(topic => {
    const option = new Option(topic.name, topic.id);
    els.secondaryTopicSelect.add(option);
  });
}

function attachEvents() {
  els.generateButton.addEventListener("click", () => generatePrompt({ daily: false }));
  els.dailyButton.addEventListener("click", () => generatePrompt({ daily: true }));
  els.todaysPromptButton.addEventListener("click", () => {
    generatePrompt({ daily: true });
    document.querySelector("#prompter").scrollIntoView({ behavior: "smooth" });
  });
  els.copyPromptButton.addEventListener("click", copyPrompt);
  els.saveEntryButton.addEventListener("click", saveEntry);
  els.clearEntryButton.addEventListener("click", clearEntry);
  els.searchEntries.addEventListener("input", renderEntries);
  els.exportButton.addEventListener("click", exportEntries);
  els.importInput.addEventListener("change", importEntries);
  els.themeToggle.addEventListener("click", toggleTheme);

  [els.topicSelect, els.secondaryTopicSelect, els.moodSelect, els.lengthSelect].forEach(control => {
    control.addEventListener("change", () => generatePrompt({ daily: false }));
  });
}

function generatePrompt({ daily }) {
  const topic = topics.find(item => item.id === els.topicSelect.value) || topics[0];
  const secondaryValue = els.secondaryTopicSelect.value;
  const secondary = secondaryValue !== "none" && secondaryValue !== topic.id
    ? topics.find(item => item.id === secondaryValue)
    : null;
  const mood = moods[els.moodSelect.value] || moods.tender;
  const length = els.lengthSelect.value;
  const seedText = daily
    ? `${getDateKey()}-${topic.id}-${secondary?.id || "none"}-${els.moodSelect.value}-${length}`
    : `${Date.now()}-${Math.random()}-${topic.id}`;
  const rng = daily ? seededRandom(seedText) : Math.random;
  const template = pick(promptTemplates, rng);
  const prompt = template({ topic, secondary, mood, length, rng });

  state.currentPrompt = {
    topic: topic.name,
    secondaryTopic: secondary?.name || null,
    mood: els.moodSelect.options[els.moodSelect.selectedIndex].text,
    length,
    title: prompt.title,
    text: prompt.text,
    followups: prompt.followups,
    generatedAt: new Date().toISOString(),
    daily
  };

  renderPrompt();
}

function renderPrompt() {
  const prompt = state.currentPrompt;
  els.promptTitle.textContent = prompt.title;
  els.promptText.textContent = prompt.text;
  els.topicPill.textContent = prompt.secondaryTopic ? `${prompt.topic} × ${prompt.secondaryTopic}` : prompt.topic;
  els.datePill.textContent = prompt.daily ? `Seeded for ${formatDate(new Date())}` : "Freshly remixed";
  els.promptFollowups.innerHTML = "";
  prompt.followups.forEach(line => {
    const p = document.createElement("p");
    p.textContent = line;
    els.promptFollowups.appendChild(p);
  });
}

function copyPrompt() {
  const prompt = state.currentPrompt;
  const text = `${prompt.title}\n\n${prompt.text}\n\n${prompt.followups.map(item => `• ${item}`).join("\n")}`;
  navigator.clipboard.writeText(text).then(() => toast("Prompt copied"));
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
  clearEntry(false);
  toast("Entry saved in this browser");
}

function clearEntry(showToast = true) {
  els.entryTitle.value = "";
  els.entryText.value = "";
  if (showToast) toast("Entry cleared");
}

function loadEntries() {
  try {
    state.entries = JSON.parse(localStorage.getItem("graceNotesEntries") || "[]");
  } catch {
    state.entries = [];
  }
  renderEntries();
}

function persistEntries() {
  localStorage.setItem("graceNotesEntries", JSON.stringify(state.entries));
}

function renderEntries() {
  const query = els.searchEntries.value.trim().toLowerCase();
  const entries = state.entries.filter(entry => {
    const haystack = [entry.title, entry.body, entry.prompt?.text, entry.prompt?.topic, entry.prompt?.secondaryTopic].join(" ").toLowerCase();
    return haystack.includes(query);
  });

  els.entriesList.innerHTML = "";
  if (!entries.length) {
    const empty = document.createElement("p");
    empty.className = "hero-text";
    empty.textContent = state.entries.length ? "No entries match that search." : "No saved entries yet. Your first one can be tiny.";
    els.entriesList.appendChild(empty);
    return;
  }

  entries.forEach(entry => {
    const card = document.createElement("article");
    card.className = "entry-card";
    card.innerHTML = `
      <div class="entry-card-header">
        <div>
          <h3>${escapeHtml(entry.title)}</h3>
          <p class="entry-date">${formatDateTime(new Date(entry.createdAt))}</p>
        </div>
        <button class="delete-button" type="button" aria-label="Delete entry" data-delete="${entry.id}">Delete</button>
      </div>
      <p class="entry-prompt">${escapeHtml(entry.prompt?.text || "Prompt unavailable")}</p>
      <p>${escapeHtml(truncate(entry.body, 420))}</p>
    `;
    els.entriesList.appendChild(card);
  });

  document.querySelectorAll("[data-delete]").forEach(button => {
    button.addEventListener("click", event => {
      const id = event.currentTarget.getAttribute("data-delete");
      state.entries = state.entries.filter(entry => entry.id !== id);
      persistEntries();
      renderEntries();
      toast("Entry deleted");
    });
  });
}

function exportEntries() {
  const payload = {
    exportedAt: new Date().toISOString(),
    app: "Grace Notes",
    entries: state.entries
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `grace-notes-entries-${getDateKey()}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function importEntries(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      const importedEntries = Array.isArray(parsed) ? parsed : parsed.entries;
      if (!Array.isArray(importedEntries)) throw new Error("Invalid entries file");
      const existingIds = new Set(state.entries.map(entry => entry.id));
      const normalised = importedEntries
        .filter(entry => entry && entry.body)
        .map(entry => ({ ...entry, id: entry.id || String(Date.now() + Math.random()) }))
        .filter(entry => !existingIds.has(entry.id));
      state.entries = [...normalised, ...state.entries].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      persistEntries();
      renderEntries();
      toast(`Imported ${normalised.length} entries`);
    } catch {
      toast("Could not import that file");
    }
  };
  reader.readAsText(file);
  event.target.value = "";
}

function renderTopics() {
  topics.forEach(topic => {
    const card = document.createElement("article");
    card.className = "topic-card";
    card.innerHTML = `
      <h3>${escapeHtml(topic.name)}</h3>
      <p>${escapeHtml(topic.description)}</p>
      <button class="ghost-button" type="button" data-topic="${topic.id}">Use this shelf</button>
    `;
    els.topicsGrid.appendChild(card);
  });

  document.querySelectorAll("[data-topic]").forEach(button => {
    button.addEventListener("click", event => {
      els.topicSelect.value = event.currentTarget.getAttribute("data-topic");
      generatePrompt({ daily: false });
      document.querySelector("#prompter").scrollIntoView({ behavior: "smooth" });
    });
  });
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("graceNotesTheme", isDark ? "dark" : "light");
  els.themeToggle.textContent = isDark ? "Light mode" : "Dark mode";
}

function loadTheme() {
  const saved = localStorage.getItem("graceNotesTheme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const useDark = saved ? saved === "dark" : prefersDark;
  document.body.classList.toggle("dark", useDark);
  els.themeToggle.textContent = useDark ? "Light mode" : "Dark mode";
}

function pick(array, rng = Math.random) {
  return array[Math.floor(rng() * array.length)];
}

function seededRandom(seedText) {
  let seed = 2166136261;
  for (let i = 0; i < seedText.length; i += 1) {
    seed ^= seedText.charCodeAt(i);
    seed = Math.imul(seed, 16777619);
  }
  return function random() {
    seed += 0x6D2B79F5;
    let t = seed;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function getDateKey() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDate(date) {
  return date.toLocaleDateString(undefined, { weekday: "long", month: "short", day: "numeric" });
}

function formatDateTime(date) {
  return date.toLocaleString(undefined, { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" });
}

function truncate(text, max) {
  return text.length > max ? `${text.slice(0, max).trim()}…` : text;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function articleFor(phrase) {
  return /^[aeiou]/i.test(phrase) ? "an" : "a";
}

function toast(message) {
  const existing = document.querySelector(".toast");
  if (existing) existing.remove();
  const toastEl = document.createElement("div");
  toastEl.className = "toast";
  toastEl.textContent = message;
  document.body.appendChild(toastEl);
  requestAnimationFrame(() => toastEl.classList.add("show"));
  setTimeout(() => {
    toastEl.classList.remove("show");
    setTimeout(() => toastEl.remove(), 180);
  }, 1800);
}

init();
