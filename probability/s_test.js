scenarios["test"] = {
  "overview": [
    "<h2>PROBABILITY ILLUSTRATOR: TEST</h2>",
    "Demonstrating what you can put into a scenario...",
    "<p/>",
    "A scenario has an overall description (this text), and a set of views ('options') that you can select.",
    "Each option you define becomes a button which the user can click.  The intent is that each option lets you see",
    "a variant of the probability being demonstrated, like different populations within the sample.",
    "<p/>",
    "An 'event' comprises a set of 'stacked' probabilities, i.e. a 10% chance of A, followed by a 20% chance of a",
    "special case of A called B.  So there is a 2% chance of B, and an 8% chance of A when we exclude B.  So if there",
    "were 100 squares, 8 would be for A and 2 for B.  To illustrate, there might be a 10% chance that I am wearing",
    "boots, and if I am wearing boots there is a 20% chance that they are of a certain brand.",
    "(Multiple sub-events are not supported at this time.)",
    "<p/>",
    "Multiple events can be defined and are assumed to be exclusive of one another.  That is, no provision is made for",
    "two separate events co-occurring.  So it is best when demonstrating multiple events that at least one be low",
    "probability to provide more accurate results."
  ],

  "options": [
    {
      "button_label": "Option 1",
      "default": 1,
      "title": "Demonstration",
      "events": [
        {"names": ["a 1% chance", "a 1 in 4 probability within that", "a 10% likelihood"], "probs": [0.01, 0.25, 0.1], "colors": ["cyan", "green", "orange"]},
        {"names": ["an unrelated 1 in 250 event"], "probs": [0.004], "colors": ["blue"]}
      ]
    }
  ]
}
