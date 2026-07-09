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

const promptStyles = {
  mixed: "Mixed / surprise me",
  scene: "Scene-based",
  dialogue: "Dialogue",
  memory: "Memory",
  argument: "Argument / essayish",
  body: "Body and senses",
  ethical: "Ethical",
  strangeform: "Strange form"
};

const commonScenes = [
  "a car park at dusk",
  "the quiet before a kettle boils",
  "a half-read article left open in another tab",
  "a footpath after rain",
  "a checkout line moving too slowly",
  "a room after everyone has gone",
  "a train window with your face faintly reflected in it",
  "a note you wrote and did not send",
  "a bag you keep meaning to unpack",
  "a song heard from another room",
  "a small domestic mess you suddenly found moving",
  "a menu, timetable, receipt, or map",
  "the first five minutes after waking",
  "the last light on a building",
  "a sentence you kept rereading"
];

const promptForms = [
  "a police report for a feeling",
  "a museum label for an ordinary object",
  "a weather forecast for your inner life",
  "a footnote to today",
  "a letter from your future self",
  "a field note from a species called You",
  "a small court judgment about a private rule",
  "an instruction manual for surviving this mood",
  "a travel guide to a familiar room",
  "a recipe for a mistake",
  "minutes from a meeting between your body and your mind"
];

const sentenceStarters = [
  "The thing I keep avoiding is",
  "I noticed it first when",
  "The kindest interpretation is",
  "The more honest interpretation is",
  "I would rather call it",
  "I have been mistaking",
  "Something in me still believes",
  "The day was trying to teach me",
  "I do not know whether this is wisdom or tiredness, but",
  "The evidence is thinner than I want it to be, because"
];

const promptTemplates = [
  {
    style: "scene",
    create: ({ topic, secondary, mood, length, rng }) => {
      const image = pick(topic.images, rng);
      const scene = pick(commonScenes, rng);
      const tension = pick(topic.tensions, rng);
      return {
        title: "Start with a scene, not an idea",
        text: `Begin inside ${withArticle(scene)}. Do not explain the day yet. Let ${withArticle(image)} enter the scene, then ask what it reveals about ${tension}.`,
        followups: [
          "Write the first paragraph as if it belongs in a novel rather than a diary.",
          secondary ? `Then let ${secondary.name.toLowerCase()} quietly change the meaning of the scene.` : "Only after the scene is clear, let the philosophical thought appear.",
          pick(lengthGuides[length], rng),
          pick(mood.closers, rng)
        ]
      };
    }
  },
  {
    style: "scene",
    create: ({ topic, secondary, mood, length, rng }) => {
      const image = pick(topic.images, rng);
      const question = pick(topic.questions, rng);
      return {
        title: `Begin with ${withArticle(image)}`,
        text: `Begin with ${withArticle(image)}, but make it do something unexpected. It might accuse you, comfort you, bore you, or make the whole day look slightly different. Then answer: ${question}`,
        followups: [
          secondary ? `Let ${secondary.name.toLowerCase()} arrive halfway through as a second light source.` : mood.instruction,
          "Keep the entry close to things you could touch, hear, or misremember.",
          pick(lengthGuides[length], rng)
        ]
      };
    }
  },
  {
    style: "scene",
    create: ({ topic, secondary, mood, length, rng }) => {
      const scene = pick(commonScenes, rng);
      const tension = pick(topic.tensions, rng);
      const thinker = pick(topic.thinkers, rng);
      return {
        title: "The ordinary object became suspicious",
        text: `Choose ${withArticle(scene)} and treat it as suspicious evidence. What is it evidence of: ${tension}, or something else entirely?`,
        followups: [
          `Let ${thinker} be wrong about one detail of your day.`,
          secondary ? `Use ${secondary.name.toLowerCase()} as a counter-reading.` : "Do not let the object become a neat symbol too quickly.",
          pick(mood.closers, rng)
        ]
      };
    }
  },
  {
    style: "dialogue",
    create: ({ topic, secondary, mood, length, rng }) => {
      const question = pick(topic.questions, rng);
      const image = pick(topic.images, rng);
      return {
        title: "A conversation you did not have",
        text: `Write the conversation you almost had today, but let the unsaid thing ask the first question: “${question}”`,
        followups: [
          `Give one speaker ${withArticle(image)} to look at instead of making eye contact.`,
          secondary ? `Let the conversation accidentally drift into ${secondary.name.toLowerCase()}.` : "Let both people be partly right and partly self-protective.",
          mood.instruction,
          pick(lengthGuides[length], rng)
        ]
      };
    }
  },
  {
    style: "dialogue",
    create: ({ topic, secondary, mood, length, rng }) => {
      const thinker = pick(topic.thinkers, rng);
      const tension = pick(topic.tensions, rng);
      return {
        title: "Interview your mood",
        text: `Stage a brief interview with your mood. You are allowed to be sceptical. Ask it what it knows about ${tension} that your more sensible self keeps missing.`,
        followups: [
          `At some point, let ${thinker} interrupt with a question that is annoying but useful.`,
          secondary ? `Ask the mood what it thinks of ${secondary.name.toLowerCase()}.` : "Give the mood one concrete habit, like checking the time or straightening a sleeve.",
          pick(mood.closers, rng)
        ]
      };
    }
  },
  {
    style: "dialogue",
    create: ({ topic, secondary, mood, length, rng }) => {
      const image = pick(topic.images, rng);
      const question = pick(topic.questions, rng);
      return {
        title: "Let the object speak first",
        text: `Imagine ${withArticle(image)} could leave you a voice note. What would it say about the way you moved through today?`,
        followups: [
          `Reply to it honestly, then ask: ${question}`,
          secondary ? `The object should misunderstand ${secondary.name.toLowerCase()} in a revealing way.` : "Keep it intimate rather than whimsical.",
          pick(lengthGuides[length], rng)
        ]
      };
    }
  },
  {
    style: "memory",
    create: ({ topic, secondary, mood, length, rng }) => {
      const tension = pick(topic.tensions, rng);
      const scene = pick(commonScenes, rng);
      return {
        title: "An older memory changed colour",
        text: `Find a memory that returned today, even faintly. Put it beside ${withArticle(scene)}. What changes when you read the memory through ${tension}?`,
        followups: [
          "Write one paragraph from the point of view of who you were then.",
          "Write one paragraph from the point of view of who you are now.",
          secondary ? `Then ask what ${secondary.name.toLowerCase()} helps you forgive, or refuses to forgive.` : mood.instruction,
          pick(mood.closers, rng)
        ]
      };
    }
  },
  {
    style: "memory",
    create: ({ topic, secondary, mood, length, rng }) => {
      const question = pick(topic.questions, rng);
      return {
        title: "The biographer gets it wrong",
        text: `Imagine a future biographer trying to explain you from today’s evidence. What would they get completely wrong?`,
        followups: [
          `Correct them by answering: ${question}`,
          secondary ? `Let one correction involve ${secondary.name.toLowerCase()}.` : "Include one small fact that would look meaningless to anyone else.",
          pick(lengthGuides[length], rng)
        ]
      };
    }
  },
  {
    style: "memory",
    create: ({ topic, secondary, mood, length, rng }) => {
      const image = pick(topic.images, rng);
      const tension = pick(topic.tensions, rng);
      return {
        title: "A message from an old self",
        text: `Write a note from an old version of you who has just found ${withArticle(image)}. What does that version misunderstand about ${tension}?`,
        followups: [
          "Do not make the old self foolish. Make them limited, tender, or overconfident in a recognisable way.",
          secondary ? `Let your present self answer using ${secondary.name.toLowerCase()} as a lens.` : pick(mood.closers, rng),
          pick(lengthGuides[length], rng)
        ]
      };
    }
  },
  {
    style: "argument",
    create: ({ topic, secondary, mood, length, rng }) => {
      const tension = pick(topic.tensions, rng);
      const thinker = pick(topic.thinkers, rng);
      const image = pick(topic.images, rng);
      return {
        title: "The hidden argument of the day",
        text: `Assume today was secretly making an argument about ${tension}. What evidence did it offer, and what did it conveniently leave out?`,
        followups: [
          `Use ${withArticle(image)} as your first piece of evidence.`,
          `Imagine ${thinker} disagreeing with your interpretation.`,
          secondary ? `Then let ${secondary.name.toLowerCase()} complicate your conclusion.` : "End by separating evidence from mood.",
          pick(lengthGuides[length], rng)
        ]
      };
    }
  },
  {
    style: "argument",
    create: ({ topic, secondary, mood, length, rng }) => {
      const starter = pick(sentenceStarters, rng);
      const question = pick(topic.questions, rng);
      return {
        title: "Seven sentences, no ornament",
        text: `Write seven sentences. Start the first with: “${starter}...” Make each sentence answer, resist, or revise the one before it.`,
        followups: [
          `The fourth sentence must ask: ${question}`,
          secondary ? `The sixth sentence must bring in ${secondary.name.toLowerCase()} without sounding academic.` : "The sixth sentence must admit what you still do not know.",
          pick(mood.closers, rng)
        ]
      };
    }
  },
  {
    style: "argument",
    create: ({ topic, secondary, mood, length, rng }) => {
      const tension = pick(topic.tensions, rng);
      const question = pick(topic.questions, rng);
      return {
        title: "Thesis, objection, revision",
        text: `Make one claim about ${tension}. Then argue against yourself using something that actually happened today, not a hypothetical.`,
        followups: [
          `Somewhere in the entry, answer: ${question}`,
          secondary ? `Use ${secondary.name.toLowerCase()} for the revision, not the first claim.` : "Let the revised claim be smaller and truer than the first one.",
          pick(lengthGuides[length], rng)
        ]
      };
    }
  },
  {
    style: "body",
    create: ({ topic, secondary, mood, length, rng }) => {
      const tension = pick(topic.tensions, rng);
      return {
        title: "What your body noticed first",
        text: `Before writing what you thought, write what your body seemed to know today: where it tightened, rushed, softened, resisted, or went quiet. How did that bodily knowledge change ${tension}?`,
        followups: [
          "Use one bodily detail that feels almost too small to include.",
          secondary ? `Then ask whether ${secondary.name.toLowerCase()} makes that detail more or less intelligible.` : mood.instruction,
          pick(mood.closers, rng)
        ]
      };
    }
  },
  {
    style: "body",
    create: ({ topic, secondary, mood, length, rng }) => {
      const scene = pick(commonScenes, rng);
      const image = pick(topic.images, rng);
      return {
        title: "Five senses, one problem",
        text: `Describe ${withArticle(scene)} through five senses, even if you have to invent one slightly. Then let one detail become the problem: ${withArticle(image)}.`,
        followups: [
          "Do not explain the metaphor until the second half.",
          secondary ? `Let ${secondary.name.toLowerCase()} disturb the sensory account.` : "Ask what attention changes when it stops trying to be impressive.",
          pick(lengthGuides[length], rng)
        ]
      };
    }
  },
  {
    style: "body",
    create: ({ topic, secondary, mood, length, rng }) => {
      const question = pick(topic.questions, rng);
      return {
        title: "The body is a witness",
        text: `Treat your body as a witness giving careful testimony about today. What did it see that your mind tried to narrate away?`,
        followups: [
          `Cross-examine it with this question: ${question}`,
          secondary ? `Ask whether ${secondary.name.toLowerCase()} changes what counts as evidence.` : "Let the testimony remain a little incomplete.",
          pick(mood.closers, rng)
        ]
      };
    }
  },
  {
    style: "ethical",
    create: ({ topic, secondary, mood, length, rng }) => {
      const tension = pick(topic.tensions, rng);
      const image = pick(topic.images, rng);
      return {
        title: "The day on trial",
        text: `Put the day on trial for what it did to you, or what you did inside it. The charge concerns ${tension}.`,
        followups: [
          `Exhibit A is ${withArticle(image)}.`,
          "Let the defence make the most generous argument it can.",
          secondary ? `Let ${secondary.name.toLowerCase()} write the judgment.` : "Do not make the judgment harsher than the evidence allows.",
          pick(lengthGuides[length], rng)
        ]
      };
    }
  },
  {
    style: "ethical",
    create: ({ topic, secondary, mood, length, rng }) => {
      const question = pick(topic.questions, rng);
      const thinker = pick(topic.thinkers, rng);
      return {
        title: "A private obligation",
        text: `Write about a small obligation you felt today: to reply, apologise, resist, help, remember, stay quiet, or look away. What made it small? What made it not small?`,
        followups: [
          `Answer: ${question}`,
          `Let ${thinker} notice the part you wanted to skip.`,
          secondary ? `Now pass the obligation through ${secondary.name.toLowerCase()}.` : pick(mood.closers, rng)
        ]
      };
    }
  },
  {
    style: "ethical",
    create: ({ topic, secondary, mood, length, rng }) => {
      const tension = pick(topic.tensions, rng);
      return {
        title: "The rule you obeyed without naming",
        text: `Name one rule you seemed to obey today. Was it chosen, inherited, convenient, kind, cowardly, protective, or just familiar?`,
        followups: [
          `Test the rule against this tension: ${tension}.`,
          secondary ? `Ask what ${secondary.name.toLowerCase()} exposes about the rule.` : "Write the rule again in plainer language.",
          pick(lengthGuides[length], rng)
        ]
      };
    }
  },
  {
    style: "strangeform",
    create: ({ topic, secondary, mood, length, rng }) => {
      const form = pick(promptForms, rng);
      const tension = pick(topic.tensions, rng);
      const image = pick(topic.images, rng);
      return {
        title: sentenceCase(form),
        text: `Write today as ${form}. It must include ${withArticle(image)} and a problem involving ${tension}.`,
        followups: [
          "Let the form do some of the thinking for you.",
          secondary ? `Smuggle ${secondary.name.toLowerCase()} in as a subplot.` : "Keep one line oddly funny if the mood allows it.",
          pick(mood.closers, rng)
        ]
      };
    }
  },
  {
    style: "strangeform",
    create: ({ topic, secondary, mood, length, rng }) => {
      const question = pick(topic.questions, rng);
      return {
        title: "A map of the invisible thing",
        text: `Draw, describe, or imagine a map of something invisible from today: a worry, a longing, an argument, a silence, a rule, a memory. Where is the dangerous part? Where is the false shortcut?`,
        followups: [
          `Somewhere on the map, write this question: ${question}`,
          secondary ? `Add ${secondary.name.toLowerCase()} as a weather system moving across the map.` : "Name one place on the map that you are not ready to visit yet.",
          pick(lengthGuides[length], rng)
        ]
      };
    }
  },
  {
    style: "strangeform",
    create: ({ topic, secondary, mood, length, rng }) => {
      const image = pick(topic.images, rng);
      const thinker = pick(topic.thinkers, rng);
      return {
        title: "Instructions for a feeling",
        text: `Write an instruction manual for a feeling you had today. The manual must include a warning, a maintenance note, and one illustration: ${withArticle(image)}.`,
        followups: [
          `Add a note from ${thinker} in the margin.`,
          secondary ? `The troubleshooting section should accidentally reveal something about ${secondary.name.toLowerCase()}.` : "The final instruction should be useful but slightly embarrassing.",
          pick(mood.closers, rng)
        ]
      };
    }
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
  promptStyleSelect: document.querySelector("#promptStyleSelect"),
  promptTitle: document.querySelector("#promptTitle"),
  promptText: document.querySelector("#promptText"),
  promptFollowups: document.querySelector("#promptFollowups"),
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
    const option = new Option(topic.name, topic.id);
    els.topicSelect.add(option);
    els.filterTopicSelect.add(new Option(topic.name, topic.name));
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
  els.copyPromptButton.addEventListener("click", copyPrompt);
  els.saveEntryButton.addEventListener("click", saveEntry);
  els.clearEntryButton.addEventListener("click", clearEntry);
  els.searchEntries.addEventListener("input", renderEntries);
  els.filterTopicSelect.addEventListener("change", renderEntries);
  els.exportTextButton.addEventListener("click", exportEntriesAsText);
  els.exportButton.addEventListener("click", exportEntries);
  els.importInput.addEventListener("change", importEntries);
  els.themeToggle.addEventListener("click", toggleTheme);

  [els.topicSelect, els.secondaryTopicSelect, els.moodSelect, els.lengthSelect, els.promptStyleSelect].forEach(control => {
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
  const promptStyle = els.promptStyleSelect.value || "mixed";
  const seedText = daily
    ? `${getDateKey()}-${topic.id}-${secondary?.id || "none"}-${els.moodSelect.value}-${length}-${promptStyle}`
    : `${Date.now()}-${Math.random()}-${topic.id}-${promptStyle}`;
  const rng = daily ? seededRandom(seedText) : Math.random;
  const availableTemplates = promptStyle === "mixed"
    ? promptTemplates
    : promptTemplates.filter(template => template.style === promptStyle);

  let selectedTemplate = pick(availableTemplates.length ? availableTemplates : promptTemplates, rng);
  let prompt = selectedTemplate.create({ topic, secondary, mood, length, rng });

  if (!daily) {
    const recent = getRecentPromptKeys();
    for (let attempt = 0; attempt < 8 && recent.includes(promptKey(prompt)); attempt += 1) {
      selectedTemplate = pick(availableTemplates.length ? availableTemplates : promptTemplates, Math.random);
      prompt = selectedTemplate.create({ topic, secondary, mood, length, rng: Math.random });
    }
    rememberPrompt(prompt);
  }

  state.currentPrompt = {
    topic: topic.name,
    secondaryTopic: secondary?.name || null,
    mood: els.moodSelect.options[els.moodSelect.selectedIndex].text,
    length,
    promptStyle: promptStyles[promptStyle] || promptStyles.mixed,
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

  const card = document.querySelector(".prompt-card");
  card.classList.remove("prompt-fresh");
  void card.offsetWidth;
  card.classList.add("prompt-fresh");
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
  const selectedTopic = els.filterTopicSelect.value;
  const entries = state.entries.filter(entry => {
    const entryTopic = entry.prompt?.topic || "";
    const topicMatches = selectedTopic === "all" || entryTopic === selectedTopic;
    const haystack = [
      entry.title,
      entry.body,
      entry.prompt?.title,
      entry.prompt?.text,
      entry.prompt?.topic,
      entry.prompt?.secondaryTopic
    ].join(" ").toLowerCase();
    return topicMatches && haystack.includes(query);
  });

  els.entriesList.innerHTML = "";
  if (!entries.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = state.entries.length ? "No entries match that filter." : "No saved entries yet. Your first one can be tiny.";
    els.entriesList.appendChild(empty);
    return;
  }

  entries.forEach(entry => {
    const card = document.createElement("article");
    card.className = "entry-card";
    const topicLabel = entry.prompt?.secondaryTopic
      ? `${entry.prompt.topic} × ${entry.prompt.secondaryTopic}`
      : entry.prompt?.topic || "No topic";
    card.innerHTML = `
      <div class="entry-card-header">
        <div>
          <h3>${escapeHtml(entry.title)}</h3>
          <p class="entry-date">${escapeHtml(topicLabel)} · ${formatDateTime(new Date(entry.createdAt))}</p>
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

function exportEntriesAsText() {
  if (!state.entries.length) {
    toast("No entries to export yet");
    return;
  }

  const lines = state.entries.map(entry => {
    const prompt = entry.prompt || {};
    const topicLine = prompt.secondaryTopic
      ? `${prompt.topic} × ${prompt.secondaryTopic}`
      : prompt.topic || "No topic recorded";
    const followups = Array.isArray(prompt.followups) && prompt.followups.length
      ? `\nFollow-ups:\n${prompt.followups.map(item => `- ${item}`).join("\n")}`
      : "";

    return [
      "============================================================",
      entry.title || "Untitled entry",
      formatDateTime(new Date(entry.createdAt)),
      `Topic: ${topicLine}`,
      "",
      "Prompt:",
      prompt.text || "Prompt unavailable",
      followups,
      "",
      "Entry:",
      entry.body || ""
    ].join("\n");
  });

  downloadFile(
    lines.join("\n\n"),
    `grace-notes-entries-${getDateKey()}.txt`,
    "text/plain;charset=utf-8"
  );
}

function exportEntries() {
  const payload = {
    exportedAt: new Date().toISOString(),
    app: "Grace Notes",
    entries: state.entries
  };
  downloadFile(
    JSON.stringify(payload, null, 2),
    `grace-notes-entries-${getDateKey()}.json`,
    "application/json"
  );
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

function downloadFile(content, filename, type) {
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

function initialiseScrollReveals() {
  const items = document.querySelectorAll(".reveal-on-scroll");
  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach(item => item.classList.add("is-visible"));
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

  items.forEach(item => observer.observe(item));
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

function withArticle(phrase) {
  const clean = String(phrase || "").trim();
  if (!clean) return clean;

  // Some image fragments already contain their own determiner, are plural,
  // or work better as uncountable material. This prevents phrases like
  // "an a museum postcard" or "a wet socks".
  const lower = clean.toLowerCase();
  const noArticleStarters = [
    "a ",
    "an ",
    "the ",
    "your ",
    "my ",
    "our ",
    "this ",
    "that ",
    "these ",
    "those ",
    "someone ",
    "something ",
    "two ",
    "some "
  ];
  const noArticlePhrases = new Set([
    "dust on a bookshelf",
    "light moving across a wall",
    "orange light on rock",
    "wet socks",
    "clouds moving over a ridge",
    "crossed-out working"
  ]);

  if (noArticleStarters.some(starter => lower.startsWith(starter)) || noArticlePhrases.has(lower)) {
    return clean;
  }

  const article = /^[aeiou]/i.test(clean) ? "an" : "a";
  return `${article} ${clean}`;
}


function promptKey(prompt) {
  return `${prompt.title}|${prompt.text}`.toLowerCase().replace(/\s+/g, " ").slice(0, 220);
}

function getRecentPromptKeys() {
  try {
    return JSON.parse(localStorage.getItem("graceNotesRecentPromptKeys") || "[]");
  } catch {
    return [];
  }
}

function rememberPrompt(prompt) {
  const recent = getRecentPromptKeys();
  const next = [promptKey(prompt), ...recent.filter(key => key !== promptKey(prompt))].slice(0, 35);
  localStorage.setItem("graceNotesRecentPromptKeys", JSON.stringify(next));
}

function sentenceCase(value) {
  const text = String(value || "").trim();
  if (!text) return text;
  return text.charAt(0).toUpperCase() + text.slice(1);
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
