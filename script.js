const topics = [
  {
    id: "time",
    name: "Time & mortality",
    description: "Finitude, delay, ageing, ordinary days, the weird pressure of time passing.",
    thinkers: ["Augustine", "Bergson", "Kundera", "Julian Barnes", "Annie Dillard"],
    schools: ["phenomenology", "existentialism", "the philosophy of time", "memento mori", "the ordinary sublime"],
    tensions: [
      "the life you are living and the life you keep rehearsing",
      "what can be measured and what can only be felt",
      "urgency and drift",
      "memory and decay",
      "routine and the panic of time passing"
    ],
    images: ["half-finished tea", "a calendar notification", "a late train", "a jacket you forgot you owned", "light moving across a wall", "a receipt in an old bag"],
    fragments: [
      "Time did not pass today so much as rearrange the furniture.",
      "The day had the texture of something already becoming memory.",
      "Something small kept insisting it was not small."
    ]
  },
  {
    id: "consciousness",
    name: "Consciousness & selfhood",
    description: "Mind, body, inwardness, attention, and the strangeness of being a person at all.",
    thinkers: ["Thomas Nagel", "Wittgenstein", "Sartre", "Iris Murdoch", "Eric Schwitzgebel"],
    schools: ["phenomenology", "ordinary language philosophy", "existentialism", "embodied cognition", "introspection scepticism"],
    tensions: [
      "the private mind and the public face",
      "being a body and having a body",
      "introspection and self-deception",
      "what you feel and what you can say about it",
      "habit and agency"
    ],
    images: ["your reflection in a dark window", "a cursor blinking on a blank page", "a hand resting on a desk", "a song stuck in your head", "a room you entered and forgot why"],
    fragments: [
      "I was present, but not in the simple way that sounds.",
      "The mind had its own weather system today.",
      "A body can be honest before a thought is."
    ]
  },
  {
    id: "meaning",
    name: "Meaning, nihilism & survival",
    description: "Existential doubt, low motivation, courage, absurdity, small reasons to continue.",
    thinkers: ["Camus", "Sartre", "Simone de Beauvoir", "Rilke", "Kierkegaard"],
    schools: ["existentialism", "absurdism", "nihilism", "stoicism", "romantic melancholy"],
    tensions: [
      "surviving and living",
      "freedom and exhaustion",
      "meaninglessness and tenderness",
      "performing the expected actions and wanting a life",
      "despair and stubbornness"
    ],
    images: ["the blue glow of a phone at night", "a dish left in the sink", "a bus stop", "a supermarket aisle", "a door closed too quietly"],
    fragments: [
      "I kept going, which is not the same as being convinced.",
      "The absurd did not arrive dramatically. It arrived in the sink.",
      "There was no revelation, just the minor bravery of continuing."
    ]
  },
  {
    id: "memory",
    name: "Memory & narrative",
    description: "The stories we make from the past, the unreliability of memory, and the self as a draft.",
    thinkers: ["Proust", "Julian Barnes", "Milan Kundera", "Toni Morrison", "Walter Benjamin"],
    schools: ["narrative identity", "hermeneutics", "psychoanalysis", "nostalgia studies", "memory scepticism"],
    tensions: [
      "what happened and what the memory wants it to mean",
      "nostalgia and evidence",
      "forgetting and forgiveness",
      "the person you were and the person you keep editing",
      "private memory and family mythology"
    ],
    images: ["an old message thread", "a childhood photo", "a song from a previous version of your life", "a familiar street", "a drawer full of paper"],
    fragments: [
      "A memory changed its clothes and pretended to be new.",
      "The past was less gone than inconveniently alive.",
      "I am not sure whether I remembered it or improved it."
    ]
  },
  {
    id: "art",
    name: "Art, beauty & attention",
    description: "Paintings, books, music, beauty, obsession, and what attention can rescue.",
    thinkers: ["Donna Tartt", "Elaine Scarry", "John Berger", "Rilke", "Susan Sontag"],
    schools: ["aesthetics", "romanticism", "the sublime", "close looking", "art as consolation"],
    tensions: [
      "beauty and possession",
      "attention and grief",
      "pleasure and seriousness",
      "the tiny part standing in for the whole",
      "loving something and wanting to keep it safe"
    ],
    images: ["a painting glimpsed in passing", "a chord resolving", "dust on a bookshelf", "a museum postcard", "a sentence you wanted to underline twice"],
    fragments: [
      "Beauty felt less like an answer than a wound with good lighting.",
      "I noticed one thing properly and the day became harder to dismiss.",
      "A small object briefly held up the whole world."
    ]
  },
  {
    id: "ethics",
    name: "Ethics, fairness & responsibility",
    description: "Justice, obligation, complicity, fairness, and the moral weight of ordinary choices.",
    thinkers: ["Rawls", "Nozick", "Amartya Sen", "Iris Marion Young", "Ursula Le Guin"],
    schools: ["liberal egalitarianism", "care ethics", "virtue ethics", "utilitarianism", "feminist political theory"],
    tensions: [
      "fairness and luck",
      "what you owe people and what you can bear to owe them",
      "principles and messy facts",
      "comfort and responsibility",
      "kindness and justice"
    ],
    images: ["a bill split unevenly", "a seat offered on public transport", "a comment you did not make", "a form asking the wrong question", "a queue moving badly"],
    fragments: [
      "Fairness was not as clean as the rule made it sound.",
      "A tiny unfairness sat in the corner like a cat.",
      "I could feel the moral problem before I could describe it."
    ]
  },
  {
    id: "lawpower",
    name: "Law, power & legitimacy",
    description: "Rules, secrecy, institutions, discipline, legitimacy, resistance, and the language of authority.",
    thinkers: ["Hart", "Fuller", "Dworkin", "Foucault", "Robert Cover"],
    schools: ["legal positivism", "natural law", "law as interpretation", "disciplinary power", "legal pluralism"],
    tensions: [
      "law as rule and law as story",
      "authority and consent",
      "secrecy and accountability",
      "obedience and interpretation",
      "discipline and freedom"
    ],
    images: ["a locked door", "a policy document", "a signature line", "a camera in a hallway", "a rule everyone follows without reading"],
    fragments: [
      "The rule was not loud. That was its advantage.",
      "Power appeared as procedure and hoped no one would notice.",
      "Something official-looking changed the temperature of the room."
    ]
  },
  {
    id: "relationships",
    name: "Love, friendship & family",
    description: "Intimacy, loneliness, tenderness, resentment, and the people who make us legible.",
    thinkers: ["Sally Rooney", "Ann Patchett", "Toni Morrison", "Ocean Vuong", "bell hooks"],
    schools: ["care ethics", "relational selfhood", "attachment theory", "feminist ethics", "the ethics of attention"],
    tensions: [
      "being known and being trapped by being known",
      "care and resentment",
      "dependence and pride",
      "love as attention and love as interpretation",
      "what families remember and what they pretend not to"
    ],
    images: ["a message left on read", "two mugs in the sink", "a familiar laugh in another room", "a childhood argument", "someone saving you a seat"],
    fragments: [
      "Being understood is sometimes a comfort and sometimes a small prison.",
      "Love appeared today as inconvenience, which is rude but common.",
      "Someone knew the old version of me and I was not sure whether to be grateful."
    ]
  },
  {
    id: "mountains",
    name: "Mountains, solitude & the sublime",
    description: "Hiking, scale, silence, weather, alpenglow, and thinking better when the world gets larger.",
    thinkers: ["Kant", "Thoreau", "Mary Oliver", "Rebecca Solnit", "Nan Shepherd"],
    schools: ["the sublime", "romanticism", "nature writing", "stoicism", "environmental phenomenology"],
    tensions: [
      "smallness and freedom",
      "awe and fear",
      "solitude and loneliness",
      "the body struggling and the mind clearing",
      "beauty and indifference"
    ],
    images: ["orange light on rock", "wet socks", "a trail marker", "clouds moving over a ridge", "a packed lunch eaten with cold hands"],
    fragments: [
      "The mountain refused to become a metaphor, which made it more useful.",
      "Scale can be merciful. It makes the self less noisy.",
      "The weather had better arguments than I did."
    ]
  },
  {
    id: "knowledge",
    name: "Knowledge, failure & uncertainty",
    description: "Failure as feedback, models, assumptions, error, and the dignity of changing your mind.",
    thinkers: ["Kuhn", "Popper", "Wittgenstein", "Mary Midgley", "a mathematician with a wrong proof and good coffee"],
    schools: ["fallibilism", "pragmatism", "philosophy of science", "ordinary language philosophy", "epistemic humility"],
    tensions: [
      "failure and knowledge",
      "models and reality",
      "confidence and humility",
      "being wrong and being careless",
      "evidence and wishful thinking"
    ],
    images: ["crossed-out working", "a spreadsheet with one suspicious number", "a draft covered in comments", "a map that is slightly wrong", "a calculator left open"],
    fragments: [
      "The mistake had information in it, unfortunately.",
      "A model failed in the place where reality had been patiently waiting.",
      "I wanted certainty. The day offered a better question instead."
    ]
  },
  {
    id: "ai",
    name: "AI, minds & strange futures",
    description: "Artificial minds, moral status, simulation, automation, and the uncanny edges of personhood.",
    thinkers: ["Alan Turing", "Ted Chiang", "Eric Schwitzgebel", "Donna Haraway", "Greg Egan"],
    schools: ["functionalism", "posthumanism", "philosophy of mind", "simulation theory", "ethics of technology"],
    tensions: [
      "intelligence and understanding",
      "simulation and experience",
      "convenience and dependency",
      "tool and companion",
      "what sounds human and what feels human"
    ],
    images: ["an autocomplete suggestion", "a blinking cursor", "a generated image with the wrong hands", "a voice note transcribed badly", "a machine waiting for a prompt"],
    fragments: [
      "The machine sounded almost human, which made the human part harder to locate.",
      "I outsourced a thought and then missed the labour of having it.",
      "Something can imitate care without needing sleep. I am not sure what to do with that."
    ]
  }
];

const voiceNotes = {
  unforced: [
    "Let it wander without proving anything.",
    "No need to make the thought useful.",
    "A tangent is allowed to become the main thing."
  ],
  literary: [
    "Stay close to the image until it starts thinking for you.",
    "Let the sentence be a little more alive than tidy.",
    "Notice the texture before the lesson."
  ],
  analytical: [
    "You can make a claim, then quietly ruin it with evidence.",
    "Let one contradiction remain visible.",
    "A half-argument is enough if it is honest."
  ],
  strange: [
    "Take the odd comparison seriously for a few lines.",
    "Let the day become slightly uncanny.",
    "Follow the weird thought past the point where it becomes embarrassing."
  ],
  tender: [
    "Be exact, but not cruel.",
    "Let the entry make room for mercy without becoming sentimental.",
    "Do not solve the feeling too quickly."
  ]
};

const lengthDrifts = {
  short: [
    "A few lines is enough.",
    "Write the thought before it learns manners.",
    "Stop before it becomes an assignment."
  ],
  medium: [
    "Let one scene, one feeling, and one stray idea share the page.",
    "Move from the concrete thing to the larger thought only when it happens naturally.",
    "Let the entry change its mind once."
  ],
  long: [
    "Circle the thought from a few angles: scene, memory, objection, desire.",
    "Return to the first image near the end and see if it has shifted.",
    "Let the entry sprawl a little. That is part of the point."
  ]
};

const promptShapes = {
  stray: {
    label: "Stray thought",
    make: ({ topic, secondary, rng }) => {
      const fragment = pick(topic.fragments, rng);
      const tension = pick(topic.tensions, rng);
      const extra = secondary ? ` It may or may not have something to do with ${secondary.name.toLowerCase()}.` : "";
      return {
        title: "A stray thought",
        text: `${fragment} Let that sentence drift toward ${tension}.${extra}`
      };
    }
  },
  image: {
    label: "Object / scene",
    make: ({ topic, secondary, rng }) => {
      const image = pick(topic.images, rng);
      const tension = pick(topic.tensions, rng);
      const extra = secondary ? ` Somewhere in the background, ${secondary.name.toLowerCase()} is quietly interfering.` : "";
      return {
        title: `Begin with ${image}`,
        text: `Begin with ${image}. Do not explain it immediately. Let it sit there until it starts suggesting something about ${tension}.${extra}`
      };
    }
  },
  question: {
    label: "Loose question",
    make: ({ topic, secondary, rng }) => {
      const tension = pick(topic.tensions, rng);
      const extra = secondary ? ` What changes if the question is secretly also about ${secondary.name.toLowerCase()}?` : "";
      return {
        title: "A question with no duty to behave",
        text: `What did today do to your sense of ${tension}?${extra}`
      };
    }
  },
  philosopher: {
    label: "Philosopher spark",
    make: ({ topic, secondary, rng }) => {
      const thinker = pick(topic.thinkers, rng);
      const image = pick(topic.images, rng);
      const tension = pick(topic.tensions, rng);
      const extra = secondary ? ` Another shelf in the room: ${secondary.name.toLowerCase()}.` : "";
      return {
        title: `A small argument with ${thinker}`,
        text: `${thinker} is allowed into the room, but only as a slightly annoying guest. Start with ${image}, then let the thought brush against ${tension}.${extra}`
      };
    }
  },
  contradiction: {
    label: "Contradiction",
    make: ({ topic, secondary, rng }) => {
      const tension = pick(topic.tensions, rng);
      const fragment = pick(topic.fragments, rng);
      const extra = secondary ? ` Let ${secondary.name.toLowerCase()} make the contradiction worse rather than neater.` : "";
      return {
        title: "The contradiction can stay",
        text: `${fragment} Write from inside the contradiction between ${tension}.${extra}`
      };
    }
  },
  memory: {
    label: "Memory glimmer",
    make: ({ topic, secondary, rng }) => {
      const image = pick(topic.images, rng);
      const tension = pick(topic.tensions, rng);
      const extra = secondary ? ` It may lead, oddly, toward ${secondary.name.toLowerCase()}.` : "";
      return {
        title: "A memory glimmer",
        text: `Something today reminded you of ${image}, even if the connection is flimsy. Follow the flimsy connection toward ${tension}.${extra}`
      };
    }
  },
  sentence: {
    label: "First sentence",
    make: ({ topic, secondary, rng }) => {
      const fragment = pick(topic.fragments, rng);
      const extra = secondary ? ` At some point, let ${secondary.name.toLowerCase()} enter through a side door.` : "";
      return {
        title: "First sentence",
        text: `${fragment}${extra}`
      };
    }
  },
  form: {
    label: "Odd form",
    make: ({ topic, secondary, rng }) => {
      const forms = [
        "a weather report for the inside of your head",
        "a museum label for one ordinary object from today",
        "a footnote to a sentence you did not say",
        "a field note from a very confused anthropologist observing your day",
        "a tiny court judgment about a feeling",
        "a postcard from a future self who is being evasive",
        "a list of things that were almost thoughts"
      ];
      const form = pick(forms, rng);
      const tension = pick(topic.tensions, rng);
      const extra = secondary ? ` If it wants to wander toward ${secondary.name.toLowerCase()}, let it.` : "";
      return {
        title: "Odd form",
        text: `Write ${form}. Let it accidentally reveal something about ${tension}.${extra}`
      };
    }
  }
};

const STORAGE = {
  entries: "graceNotesEntries",
  theme: "graceNotesTheme",
  recentPrompts: "graceNotesRecentPrompts"
};

const state = {
  currentPrompt: null,
  entries: []
};

const els = {};

function cacheElements() {
  [
    "topicSelect",
    "secondaryTopicSelect",
    "moodSelect",
    "lengthSelect",
    "promptStyleSelect",
    "referenceSelect",
    "filterTopicSelect",
    "promptTitle",
    "promptText",
    "promptReference",
    "promptFollowups",
    "topicPill",
    "datePill",
    "generateButton",
    "dailyButton",
    "copyPromptButton",
    "entryTitle",
    "entryText",
    "saveEntryButton",
    "clearEntryButton",
    "entriesList",
    "searchEntries",
    "exportTextButton",
    "exportButton",
    "importInput",
    "topicsGrid",
    "themeToggle"
  ].forEach(id => {
    els[id] = document.getElementById(id);
  });
}

function init() {
  cacheElements();
  populateSelectors();
  loadTheme();
  loadEntries();
  renderTopics();
  attachEvents();
  setupRevealAnimation();
  generatePrompt({ daily: true });
}

function populateSelectors() {
  if (els.topicSelect) {
    els.topicSelect.innerHTML = "";
    topics.forEach(topic => els.topicSelect.add(new Option(topic.name, topic.id)));
  }

  if (els.secondaryTopicSelect) {
    els.secondaryTopicSelect.innerHTML = "";
    els.secondaryTopicSelect.add(new Option("None", "none"));
    topics.forEach(topic => els.secondaryTopicSelect.add(new Option(topic.name, topic.id)));
  }

  if (els.filterTopicSelect) {
    els.filterTopicSelect.innerHTML = "";
    els.filterTopicSelect.add(new Option("All topics", "all"));
    topics.forEach(topic => els.filterTopicSelect.add(new Option(topic.name, topic.name)));
  }
}

function attachEvents() {
  on(els.generateButton, "click", () => generatePrompt({ daily: false }));
  on(els.dailyButton, "click", () => generatePrompt({ daily: true }));
  on(els.copyPromptButton, "click", copyPrompt);
  on(els.saveEntryButton, "click", saveEntry);
  on(els.clearEntryButton, "click", () => clearEntry(true));
  on(els.searchEntries, "input", renderEntries);
  on(els.filterTopicSelect, "change", renderEntries);
  on(els.exportTextButton, "click", exportEntriesAsText);
  on(els.exportButton, "click", exportEntriesAsJson);
  on(els.importInput, "change", importEntries);
  on(els.themeToggle, "click", toggleTheme);

  [
    els.topicSelect,
    els.secondaryTopicSelect,
    els.moodSelect,
    els.lengthSelect,
    els.promptStyleSelect,
    els.referenceSelect
  ].forEach(control => {
    on(control, "change", () => generatePrompt({ daily: false }));
    on(control, "input", () => generatePrompt({ daily: false }));
  });
}

function generatePrompt({ daily = false } = {}) {
  const topic = getTopicById(els.topicSelect?.value) || topics[0];
  const secondaryValue = els.secondaryTopicSelect?.value || "none";
  const secondary = secondaryValue !== "none" && secondaryValue !== topic.id ? getTopicById(secondaryValue) : null;
  const voice = els.moodSelect?.value || "unforced";
  const length = els.lengthSelect?.value || "medium";
  const selectedShape = els.promptStyleSelect?.value || "mixed";
  const referenceMode = els.referenceSelect?.value || "subtle";
  const seedText = daily
    ? `${getDateKey()}-${topic.id}-${secondary?.id || "none"}-${voice}-${length}-${selectedShape}-${referenceMode}`
    : `${Date.now()}-${Math.random()}-${topic.id}-${selectedShape}`;
  const rng = daily ? seededRandom(seedText) : Math.random;
  const shapeKey = selectedShape === "mixed" ? pick(Object.keys(promptShapes), rng) : selectedShape;
  const shape = promptShapes[shapeKey] || promptShapes.stray;
  const rawPrompt = shape.make({ topic, secondary, rng });
  const reference = buildReference({ topic, secondary, mode: referenceMode, rng });
  const notes = buildLooseNotes({ topic, secondary, voice, length, rng });

  state.currentPrompt = {
    id: makeId(rawPrompt.text),
    topic: topic.name,
    topicId: topic.id,
    secondaryTopic: secondary?.name || null,
    secondaryTopicId: secondary?.id || null,
    voice,
    length,
    shape: shape.label,
    title: rawPrompt.title,
    text: rawPrompt.text,
    reference,
    notes,
    generatedAt: new Date().toISOString(),
    daily
  };

  rememberPrompt(state.currentPrompt.id);
  renderPrompt();
}

function buildReference({ topic, secondary, mode, rng }) {
  if (mode === "none") return "";

  if (mode === "school") {
    const school = pick(topic.schools, rng);
    const secondSchool = secondary ? `; ${pick(secondary.schools, rng)} might make it stranger` : "";
    return `Possible companion: ${school}${secondSchool}.`;
  }

  if (mode === "thinker") {
    const thinker = pick(topic.thinkers, rng);
    const secondThinker = secondary ? `, perhaps interrupted by ${pick(secondary.thinkers, rng)}` : "";
    return `Possible companion: ${thinker}${secondThinker}.`;
  }

  const options = [
    `Possible companion: ${pick(topic.thinkers, rng)} if you want a shadow in the room.`,
    `Possible companion: ${pick(topic.schools, rng)}, but only lightly.`,
    secondary ? `Possible companion: the friction between ${topic.name.toLowerCase()} and ${secondary.name.toLowerCase()}.` : `Possible companion: ${pick(topic.thinkers, rng)} disagreeing from the margins.`
  ];
  return pick(options, rng);
}

function buildLooseNotes({ topic, secondary, voice, length, rng }) {
  const notes = [pick(voiceNotes[voice] || voiceNotes.unforced, rng), pick(lengthDrifts[length] || lengthDrifts.medium, rng)];
  if (secondary && rng() > 0.45) {
    notes.push(`Let ${secondary.name.toLowerCase()} appear as a side door rather than a second assignment.`);
  } else if (rng() > 0.58) {
    notes.push(`One possible drift: ${pick(topic.tensions, rng)}.`);
  }
  return notes;
}

function renderPrompt() {
  const prompt = state.currentPrompt;
  if (!prompt) return;

  const card = document.querySelector(".prompt-card");
  card?.classList.remove("is-changing");
  void card?.offsetWidth;
  card?.classList.add("is-changing");

  if (els.promptTitle) els.promptTitle.textContent = prompt.title;
  if (els.promptText) els.promptText.textContent = prompt.text;
  if (els.topicPill) els.topicPill.textContent = prompt.secondaryTopic ? `${prompt.topic} × ${prompt.secondaryTopic}` : prompt.topic;
  if (els.datePill) els.datePill.textContent = prompt.daily ? `Today · ${formatDate(new Date())}` : "Fresh remix";

  if (els.promptReference) {
    els.promptReference.innerHTML = "";
    if (prompt.reference) {
      const p = document.createElement("p");
      p.className = "prompt-reference";
      p.textContent = prompt.reference;
      els.promptReference.appendChild(p);
    }
  }

  if (els.promptFollowups) {
    els.promptFollowups.innerHTML = "";
    prompt.notes.forEach(note => {
      const p = document.createElement("p");
      p.textContent = note;
      els.promptFollowups.appendChild(p);
    });
  }
}

function copyPrompt() {
  const prompt = state.currentPrompt;
  if (!prompt) return;
  const pieces = [prompt.title, "", prompt.text];
  if (prompt.reference) pieces.push("", prompt.reference);
  if (prompt.notes?.length) pieces.push("", ...prompt.notes.map(note => `• ${note}`));
  navigator.clipboard?.writeText(pieces.join("\n")).then(
    () => toast("Prompt copied"),
    () => toast("Could not copy prompt")
  );
}

function saveEntry() {
  const body = els.entryText?.value.trim() || "";
  if (!body) {
    toast("Write a little before saving");
    return;
  }

  const entry = {
    id: window.crypto?.randomUUID ? window.crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
    createdAt: new Date().toISOString(),
    title: els.entryTitle?.value.trim() || "Untitled entry",
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
  if (els.entryTitle) els.entryTitle.value = "";
  if (els.entryText) els.entryText.value = "";
  if (showToast) toast("Entry cleared");
}

function loadEntries() {
  try {
    state.entries = JSON.parse(localStorage.getItem(STORAGE.entries) || "[]");
    if (!Array.isArray(state.entries)) state.entries = [];
  } catch {
    state.entries = [];
  }
  renderEntries();
}

function persistEntries() {
  localStorage.setItem(STORAGE.entries, JSON.stringify(state.entries));
}

function renderEntries() {
  if (!els.entriesList) return;
  const query = els.searchEntries?.value.trim().toLowerCase() || "";
  const selectedTopic = els.filterTopicSelect?.value || "all";

  const entries = state.entries.filter(entry => {
    const prompt = entry.prompt || {};
    const haystack = [
      entry.title,
      entry.body,
      prompt.text,
      prompt.title,
      prompt.topic,
      prompt.secondaryTopic,
      prompt.reference,
      ...(prompt.notes || [])
    ].join(" ").toLowerCase();
    const matchesSearch = !query || haystack.includes(query);
    const matchesTopic = selectedTopic === "all" || prompt.topic === selectedTopic || prompt.secondaryTopic === selectedTopic;
    return matchesSearch && matchesTopic;
  });

  els.entriesList.innerHTML = "";
  if (!entries.length) {
    const empty = document.createElement("p");
    empty.className = "hero-text";
    empty.textContent = state.entries.length ? "No entries match that filter." : "No saved entries yet. Your first one can be tiny.";
    els.entriesList.appendChild(empty);
    return;
  }

  entries.forEach(entry => {
    const card = document.createElement("article");
    card.className = "entry-card";
    const prompt = entry.prompt || {};
    card.innerHTML = `
      <div class="entry-card-header">
        <div>
          <h3>${escapeHtml(entry.title || "Untitled entry")}</h3>
          <p class="entry-date">${escapeHtml(formatDateTime(new Date(entry.createdAt || Date.now())))}</p>
        </div>
        <button class="delete-button" type="button" aria-label="Delete entry" data-delete="${escapeHtml(entry.id)}">Delete</button>
      </div>
      <p class="entry-prompt">${escapeHtml(prompt.text || "Prompt unavailable")}</p>
      <p>${escapeHtml(truncate(entry.body || "", 420))}</p>
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

function exportEntriesAsText() {
  if (!state.entries.length) {
    toast("No entries to export yet");
    return;
  }

  const text = state.entries.map(entry => {
    const prompt = entry.prompt || {};
    const header = [
      `# ${entry.title || "Untitled entry"}`,
      `Date: ${formatDateTime(new Date(entry.createdAt || Date.now()))}`,
      prompt.topic ? `Topic: ${prompt.secondaryTopic ? `${prompt.topic} × ${prompt.secondaryTopic}` : prompt.topic}` : "",
      prompt.text ? `Prompt: ${prompt.text}` : "",
      prompt.reference ? prompt.reference : ""
    ].filter(Boolean).join("\n");
    return `${header}\n\n${entry.body || ""}`;
  }).join("\n\n---\n\n");

  downloadFile(`grace-notes-entries-${getDateKey()}.txt`, text, "text/plain;charset=utf-8");
}

function exportEntriesAsJson() {
  const payload = {
    exportedAt: new Date().toISOString(),
    app: "Grace Notes",
    entries: state.entries
  };
  downloadFile(`grace-notes-entries-${getDateKey()}.json`, JSON.stringify(payload, null, 2), "application/json;charset=utf-8");
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
        .map(entry => ({ ...entry, id: entry.id || `${Date.now()}-${Math.random()}` }))
        .filter(entry => !existingIds.has(entry.id));
      state.entries = [...normalised, ...state.entries].sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
      persistEntries();
      renderEntries();
      toast(`Imported ${normalised.length} entries`);
    } catch {
      toast("Could not import that JSON file");
    }
  };
  reader.readAsText(file);
  event.target.value = "";
}

function renderTopics() {
  if (!els.topicsGrid) return;
  els.topicsGrid.innerHTML = "";
  topics.forEach(topic => {
    const card = document.createElement("article");
    card.className = "topic-card";
    card.innerHTML = `
      <h3>${escapeHtml(topic.name)}</h3>
      <p>${escapeHtml(topic.description)}</p>
      <button class="ghost-button" type="button" data-topic="${escapeHtml(topic.id)}">Use this shelf</button>
    `;
    els.topicsGrid.appendChild(card);
  });

  document.querySelectorAll("[data-topic]").forEach(button => {
    button.addEventListener("click", event => {
      if (els.topicSelect) els.topicSelect.value = event.currentTarget.getAttribute("data-topic");
      generatePrompt({ daily: false });
      document.querySelector("#prompter")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function setupRevealAnimation() {
  const targets = document.querySelectorAll(".reveal-on-scroll");
  if (!targets.length || !("IntersectionObserver" in window)) {
    targets.forEach(target => target.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(target => observer.observe(target));
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem(STORAGE.theme, isDark ? "dark" : "light");
  if (els.themeToggle) els.themeToggle.textContent = isDark ? "Light mode" : "Dark mode";
}

function loadTheme() {
  const saved = localStorage.getItem(STORAGE.theme);
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  const useDark = saved ? saved === "dark" : prefersDark;
  document.body.classList.toggle("dark", useDark);
  if (els.themeToggle) els.themeToggle.textContent = useDark ? "Light mode" : "Dark mode";
}

function rememberPrompt(id) {
  try {
    const recent = JSON.parse(localStorage.getItem(STORAGE.recentPrompts) || "[]");
    const next = [id, ...recent.filter(item => item !== id)].slice(0, 30);
    localStorage.setItem(STORAGE.recentPrompts, JSON.stringify(next));
  } catch {
    localStorage.setItem(STORAGE.recentPrompts, JSON.stringify([id]));
  }
}

function getTopicById(id) {
  return topics.find(topic => topic.id === id);
}

function on(element, event, handler) {
  if (element) element.addEventListener(event, handler);
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

function makeId(text) {
  let hash = 0;
  for (let i = 0; i < text.length; i += 1) {
    hash = Math.imul(31, hash) + text.charCodeAt(i) | 0;
  }
  return String(hash >>> 0);
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

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
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

document.addEventListener("DOMContentLoaded", init);
