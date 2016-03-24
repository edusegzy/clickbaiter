"use strict"

export const numbers =
  ["7", "66", "500", "3", "4", "2", "80", "17", "99", "43"]

export const places = {
  at: ["the Recurse Center", "the Vatican", "the White House", "the UN", "the Facebook office", "the Clinton Foundation", "the Oval Office", "Whole Foods"],
  in: ["the future", "Canada", "Saudi Arabia", "France", "New Jersey", "Washington", "Russia", "Silicon Valley", "North Korea", "outer space", "Capitalist America", "our own backyards", "Mexico", "the military"]
}

export const nouns =
  {
    celebs: ["Sean Lee", "Dora Jambor", "Pope Francis", "Brad Pitt", "Bill Cosby", "Albert Einstein", "the Illuminati", "Obama", "Donald Trump", "Jesus", "Jay-Z", "Beyonce", "Bernie Sanders", "Hillary Clinton", "Bill Gates", "Tupac", "Michael Jackson", "Vladimir Putin", "Caitlyn Jenner", "Mariah Carey", "Kanye West", "Ted Cruz", "Mark Zuckerberg", "Kim Kardashian", "the CIA", "the NSA", "Michelle Obama", "Drake", "Rihanna", "the Supreme Court", "the 99%", "Florida Man", "Taylor Swift", "Bill Nye"],
    objects: {
      plural: ["shoes", "children", "aliens", "oatmeal cookies", "votes", "chairs", "celebrities", "immigrants", "toxins", "chemicals", "chemtrails", "coconuts", "Democrats", "Republicans", "humans", "dogs", "CEOs", "kids", "scientists", "iPhones", "police officers", "hypochondriacs"],
      singular: ["woman", "dad", "child", "boy", "feminist", "teenager", "kitten", "activist", "protester", "vegan", "student", "refugee", "CEO", "priest", "capitalist", "entrepreneur", "veteran", "social worker", "miracle doctor", "porn actor", "undercover cop", "baby", "taxi driver"],
      isms: ["yoga", "hypnotism", "feminism", "homophobia", "misogyny", "body odor", "the Internet", "intellectualism", "religion", "veganism", "fascism", "socialism", "addiction", "tax evasion", "fracking", "soylent", "science", "Scientology", "Mormonism", "military", "jazz", "dubstep", "social media", "the 1%", "Corporate America", "fraud"]
    }
  }

export const verbs =
  {
    past: ["signed a contract with", "made a deal with", "met with", "found out about", "embarrassed", "worked with", "exposed", "avoided", "insulted", "LIED to", "was seen with", "got caught with", "pissed off", "tricked", "came clean to", "sat next to", "had a secret meeting with"],
    gerunds: ["living", "doing yoga", "meditating", "eating kale", "doing crossfit", "voting", "smoking weed", "lying", "breathing", "making money"]
  }

export const adjectives =
  ["amazing", "Republican", "unsuspecting", "sexist", "money-hungry", "liberal", "racist", "feminist", "gay", "harmful", "toxic", "vegan", "violent", "biased", "depressed", "misogynist", "shocking", "homeless", "terrible", "evil", "miraculous", "American", "Western"]

export const siteNames =
  [
    "THETRUTH.ORG",
    "TheTruthDoctor.com",
    "SignEverySinglePetition.org",
    "YES.com"
  ]

export const titles =
  [
    ["You won't believe what happened when", nouns.celebs, verbs.past, "this", adjectives, nouns.objects.singular],
    [numbers, "things that changed the way I think about", nouns.celebs.concat(nouns.objects.plural, places.at, places.in)],
    [numbers, "things we all love about", nouns.celebs.concat(nouns.objects.plural, places.at, places.in)],
    ["The truth behind", nouns.celebs.concat(nouns.objects.plural, places.at, places.in), "and", nouns.celebs.concat(nouns.objects.plural, places.at, places.in)],
    ["What really happened with the", nouns.objects.singular, "at", places.at],
    ["Scientists just discovered that", nouns.objects.plural, "are actually", adjectives, "- here's the proof"],
    ["Reports show that", nouns.objects.isms, "is secretly", adjectives, "- and the numbers don't lie"],
    ["Here's what happened when", nouns.celebs, verbs.past, nouns.celebs],
    [numbers, "reasons why researchers are saying NO to", nouns.objects.plural],
    ["Can being", adjectives, "actually change your life?", "True stories from", nouns.celebs],
    ["Has", nouns.objects.isms.concat(places.at, places.in), "actually been rooted in", nouns.objects.isms, "all along?"],
    ["I had no idea that", places.at.concat(places.in), "was actually", adjectives, "... until this happened."],
    ["What's really going on behind the scenes at", places.at],
    [nouns.celebs, "finally admits to being", adjectives, "- what?!"],
    ["This", adjectives, nouns.objects.singular, "will make you cry."],
    [places.at.concat(places.in), "is nothing but", nouns.objects.plural, "and", nouns.objects.plural, "- according to", nouns.celebs],
    ["Lifehack: 1 weird thing that all", adjectives, "people do" ],
    ["Why everyone's talking about", nouns.objects.plural, "and", nouns.objects.isms],
    ["I didn't understand", nouns.objects.isms.concat(nouns.objects.plural), "until I met", nouns.celebs, " - EXCLUSIVE"],
    ["\"I can no longer deny my affiliation with", nouns.objects.isms, ",\" says", nouns.celebs],
    ["The secret to", verbs.gerunds, "while still being", adjectives]
  ]

export const descriptions =
  [
    "You'll be stunned.",
    "You won't believe it.",
    "Just wow.",
    "How can this be possible?",
    "... and why all of your friends are talking about it.",
    "... and why it's trending on Twitter.",
    "Whaaaaat?!",
    "Seriously, this is crazy.",
    "How is this still happening?",
    "Prepare to have your mind blown.",
    "How is nobody talking about this?",
    "What the media ISN\'T telling us.",
    "Yep, this is real.",
    "How is this real?",
    "I couldn't believe it."
  ]