Šitas paketas prideda automatinį straipsnių publikavimą iš Decap (admin) į realius puslapius.

Ką daro:
- Įjungia Eleventy build (Netlify build → publish _site)
- Straipsniai iš content/straipsniai/*.md tampa puslapiais /straipsniai/<slug>/
- Sukuria sąrašą /straipsniai/

Kaip įsidėti:
- GitHub repo → Add file → Upload files
- Įkelk šitus failus į repo šaknį
- Netlify automatiškai perbuildins
