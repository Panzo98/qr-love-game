# QR Love Game

Interaktivna romantična igra koja se koristi uz fizičku A5 svesku i mali prijenosni termalni printer. Korisnica skenira QR kodove iz sveske, čita poruke na telefonu, printa nove QR naljepnice i lijepi ih u svesku.

## Kako radi

1. Otvori svesku na prvoj stranici
2. Skeniraj QR kod telefonom - otvara se pitanje sa 3 opcije
3. Izaberi odgovor - dobijaš reakciju i tekst
4. Isprintaj QR naljepnice za sljedeću karticu
5. Zalijepi naljepnice u svesku i nastavi

## Lokalno pokretanje

```bash
npm install
npm start
```

Otvori `http://localhost:3000/preview` za pregled svih kartica.

## Deploy na Render

1. Push-aj kod na GitHub repo
2. Na [render.com](https://render.com) kreiraj novi Web Service
3. Poveži GitHub repo
4. Render će automatski detektovati `render.yaml` konfiguraciju
5. Dodaj environment varijablu `BASE_URL` sa tvojim Render URL-om (npr. `https://qr-love-game.onrender.com`)
6. Deploy!

## Konfiguracija

### .env varijable

| Varijabla | Opis | Default |
|-----------|------|---------|
| `BASE_URL` | Puni URL aplikacije (koristi se za QR kodove) | `http://localhost:3000` |
| `PORT` | Port na kojem sluša server | `3000` |

### Dodavanje nove kartice

Otvori `config/gameData.js` i dodaj novi objekat u `cards` niz:

```javascript
{
  id: "31",
  chapter: "Poglavlje 11",
  intro: "Uvodna poruka...",
  question: "Tvoje pitanje?",
  choiceOrder: ["funny", "emotional", "flirty"],
  responses: {
    emotional: { label: "Opcija", reaction: "Reakcija", text: "Tekst..." },
    flirty:    { label: "Opcija", reaction: "Reakcija", text: "Tekst..." },
    funny:     { label: "Opcija", reaction: "Reakcija", text: "Tekst..." }
  },
  nextCardId: "32"  // ili null za finale
}
```

### Promjena choiceOrder

`choiceOrder` kontroliše koji slot (1/2/3) je koji ton. Mijenjaj ga po karticama za raznolikost:

- `["emotional", "flirty", "funny"]` - slot 1=emotional, 2=flirty, 3=funny
- `["funny", "emotional", "flirty"]` - slot 1=funny, 2=emotional, 3=flirty

### Regenerisanje QR kodova

Promijeni `BASE_URL` u `.env` - svi QR kodovi će automatski koristiti novi URL. QR kodovi se generišu dinamički pri svakom requestu (sa in-memory cache za performanse).

## Rute

| Ruta | Opis |
|------|------|
| `GET /q/:id` | Pitanje sa 3 opcije |
| `GET /a/:id/:slot` | Odgovor (slot 0/1/2) |
| `GET /print/:id` | Print-ready PNG sa 3 QR koda |
| `GET /preview` | Debug pregled svih kartica |

## Print specifikacije

- 640x300px PNG, optimizirano za 80mm termalni printer @ 203 DPI
- 3 QR koda horizontalno sa brojevima 1, 2, 3
- Čisto crno-bijelo (bez anti-aliasing sivih tonova)
- QR error correction level M, 160x160px po kodu
