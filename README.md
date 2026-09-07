# Ian Kit Capunong — Personal Website

A one-page portfolio built with **Next.js 15 (App Router)**, **TypeScript** and
**Tailwind CSS v4**. Strictly black and white, fully responsive, with a light /
dark toggle that is a straight inversion of the same two colours.

---

## Adding a Vercel project

Everything lives in one file: [`src/data/projects.ts`](src/data/projects.ts).

1. Deploy the project on Vercel and copy its URL.
2. Screenshot the live site and save it to `public/projects/` (1280×800 works
   well — the gallery crops to 16:10 from the top).
3. Open `src/data/projects.ts` and paste a new object at the **top** of the
   `projects` array:

   ```ts
   {
     title: "My New App",
     description: "What it does, in one line.",
     url: "https://my-new-app.vercel.app",
     image: "/projects/my-new-app.jpg",
     category: "Client Websites",
     year: "2026",
   },
   ```

4. Save. The gallery updates itself.

Notes:

- `image` is optional — without it the tile shows a plain label instead.
- `repo` is optional — leave it out and the "Code" link disappears.
- The whole tile links to the deployment and opens in a new tab.
- `projectsIndexUrl` at the bottom of the file powers the "All deployments"
  link in the card header.

### Refreshing the screenshots

The thumbnails are ordinary JPEGs in `public/projects/`. Replace a file with a
newer screenshot of the same name and the gallery picks it up — no code change.

## Editing your details

[`src/data/site.ts`](src/data/site.ts) holds the rest: name, roles (the
typewriter line), tagline, bio, contact details, social links, skills,
education and experience. Change the data, not the components.

## Running it

On Windows, double-click `dev.bat` — it handles the space in the folder name.
From a terminal, quote the path:

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Deploying to Vercel

```bash
npm i -g vercel
vercel           # preview deployment
vercel --prod    # production
```

Or push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new)
— Next.js is detected automatically, no configuration needed.

## Structure

A bento-style card resume — profile header, then paired cards, then full-width
blocks:

```
src/
  app/
    layout.tsx      metadata + no-flash theme script
    page.tsx        the card layout / section order
    globals.css     colour tokens + reveal animation
  components/
    ProfileHeader.tsx      photo, name, location, role
    AboutCard.tsx          |  ExperienceCard.tsx        (row 1)
    TechStackCard.tsx      |  CertificationsCard.tsx    (row 2)
    ProjectsCard.tsx       full-width screenshot gallery
    FooterCard.tsx         Goals / Social / Contact / contact methods
    GalleryCard.tsx        photo strip, hidden while empty
    Card.tsx               shared card shell
    Icon.tsx               inline SVG icon set
    Reveal.tsx             scroll-in animation
    ThemeToggle.tsx        floating top-right
  data/
    projects.ts     ← add Vercel links here
    site.ts         ← everything else
public/
  Iankit.jpg        profile photo
  projects/         one screenshot per project in the gallery
  cert1.png, html.jpg, css.jpg, javascript.jpg   certificates
```

## Optional extras

**"View Resume" button** — hidden until you set it. Drop `resume.pdf` into
`public/`, then in `src/data/site.ts` set `resumeUrl: "/resume.pdf"`.

**Gallery strip** — hidden while empty. Put images in `public/gallery/` and
list them in `site.ts`:

```ts
export const gallery: string[] = ["/gallery/1.jpg", "/gallery/2.jpg"];
```

**Certifications** — each row in `certifications` opens its `image` in a modal.
Remove the `image` field and the row becomes plain text.

## Colour rule

Only two colours exist, defined in `src/app/globals.css`:

```css
:root { --bg: #ffffff; --fg: #000000; --page: #f4f4f4; --card: #ffffff; --tint: #ebebeb; }
.dark { --bg: #000000; --fg: #ffffff; --page: #000000; --card: #0b0b0b; --tint: #141414; }
```

`--page`, `--card` and `--tint` are neutral greys mixed from those two — they
give the cards their edge against the background. No hue is used anywhere;

every other shade is black or white at reduced opacity.
