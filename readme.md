# Bootstrap e Vite
Repository per le lezioni su Bootstrap, SASS e Vite

## Clonare il repository
```bash
git clone https://github.com/AlexGrottola/BootstrapVite.git
```

## Installare le dipendenze
```bash
npm install
```

## Personalizzare il progetto
Personalizza il progetto con i files presenti nella cartella src

## Visualizza il progetto sul browser creando un server live
```bash
npm run start
```

## Crea la cartella per andare online
```bash
npm run build
```

## Visualizza il progetto finale con il server live di produzione
```bash
npm run serve
```

## Deploying della cartella dist su GitHub Pages
Assicurati che la cartella 'dist' non sia esclusa da '.gitignore'

### Aggiungo la cartella dist al branch main
```bash
git add dist && git commit -m "aggiungo la sottocartella dist"
```
### Uso subtree push per inviarla alla  `gh-pages` branch on GitHub.
```bash
git subtree push --prefix dist origin gh-pages
```

