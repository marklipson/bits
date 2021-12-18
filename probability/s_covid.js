function _mk_scenario(range, p1, p2, dflt=0) {
    return {
      "button_label": "Age " + range,
      "default": dflt,
      "title": "In 2021, for someone age " + range + ", the odds of...",
      "events": [
        {"names": ["dying of covid"], "probs": [1/p2], "colors": ["#b02020"]},
        {"names": ["dying of some other cause"], "probs": [1/p1 - 1/p2], "colors": ["#ffa050"]}
      ]
    }
}

scenarios["covid"] = {
  "overview": [
  "<h2>PROBABILITY ILLUSTRATOR: COVID</h2>",
  "Probabilities are hard to imagine.  This page attempts to illustrate them and let you interact a little",
  "to get a feel for them.  This particular example is based on data from 2021 and shows the odds of people",
  "in different age ranges dying from Covid versus other causes.",
  "<h3>How to use it</h3>",
  "<ul>",
  "    <li>Click on different age ranges on the right to see statistics for that sub-population.</li>",
  "    <li>The red dot(s) represent(s) death by Covid and the orange dots represent death by any other cause.</li>",
  "    <li>Death, in this case, technically means the probability of a person having died in the year 2021,",
  "        but one can imagine it applying to 2022 as well and being a sort of roulette wheel of doom.</li>",
  "    <li>The 'try once' button spins the roulette wheel of doom, i.e. it picks a square at random.</li>",
  "    <li>The 'try harder' button keeps picking squares at random until it hits a colored square.</li>",
  "</ul>",
  "<h3>Technical Notes</h3>",
  "<ul>",
  "    <li>All data is gathered from public sources.  The notebook where the probabilities were derived,",
  "        and links to those sources is <a href='covid_death_rate.ipynb'>here</a> (population data <a href='us_pop_by_age.csv'>here</a>).</li>",
  "    <li>Any errors or misrepresentations on this page are my own unintentional mistakes.</li>",
  "    <li>The grid for 0-18 year olds is extremely dense because of the small probabilities involved, so it",
  "        doesn't look great and I suggest starting with something else.  If you look hard, though, you",
  "        will see one very small dark red dot, and a scattering of orange dots.</li>",
  "</ul>",
  "<h3>Ethical Notes</h3>",
  "<ul>",
  "    <li>If learning more about statistics makes public policy or a person's behavior better, then",
  "    woo hoo!!!</li>",
  "    <li>If learning more about statistics makes public policy or a person's behavior worse, then I",
  "    sincerely apologize and beg forgiveness.</li>",
  "    <li>I also apologize if you do not share my unrefined sense of humor about the idea of a 'roulette wheel of doom'.</li>",
  "</ul>"
  ],

  "options": [
      _mk_scenario("85+",   7.78, 76.2),
      _mk_scenario("75-85", 21.5, 161),
      _mk_scenario("65-75", 48.7, 318),
      _mk_scenario("50-65", 116, 695),
      _mk_scenario("40-50", 293, 1760),
      _mk_scenario("30-40", 480, 4481, 1),
      _mk_scenario("18-30", 888, 16285),
      _mk_scenario("0-18",  2370, 159823)
  ]
}