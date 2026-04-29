# Next.js Conversion Guide

This project has been converted from a static HTML site to a Next.js application.

## Project Structure

```
tcimarketingsite/
├── app/
│   ├── components/       # Reusable React components
│   │   ├── Navbar.tsx
│   │   └── Scripts.tsx
│   ├── styles/          # CSS files
│   │   └── globals.css  # Main stylesheet (copied from site.css)
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── public/
│   └── img/            # All images (copied from img/)
├── package.json         # Next.js dependencies
├── next.config.js       # Next.js configuration
└── tsconfig.json        # TypeScript configuration
```

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Start production server:**
   ```bash
   npm start
   ```

## Conversion Status

### ✅ Completed
- Next.js project structure initialized
- Package.json with dependencies
- Basic layout and routing setup
- Navbar component created
- Scripts component (FAQ, scroll functionality)
- Images moved to public/img/
- CSS moved to app/styles/globals.css
- Main page structure created

### 🔄 In Progress
- Complete conversion of index.html to app/page.tsx
- All sections need to be converted to React components

### 📋 TODO
- Convert careers.html to app/careers/page.tsx
- Convert home.html to app/home/page.tsx
- Convert lca-notices.html to app/lca-notices/page.tsx
- Convert tci_itrack.html to app/itrack/page.tsx
- Create Footer component
- Create reusable section components
- Complete all page content conversions
- Test all functionality

## Key Changes from HTML to Next.js

1. **Routing**: HTML files → Next.js pages in `app/` directory
   - `index.html` → `app/page.tsx`
   - `careers.html` → `app/careers/page.tsx`
   - `home.html` → `app/home/page.tsx`

2. **Images**: Use Next.js `Image` component
   ```tsx
   // Before: <img src="./img/logo.png" />
   // After: <Image src="/img/logo.png" width={100} height={50} />
   ```

3. **Links**: Use Next.js `Link` component
   ```tsx
   // Before: <a href="./careers.html">Careers</a>
   // After: <Link href="/careers">Careers</Link>
   ```

4. **Scripts**: Converted to React `useEffect` hooks in `Scripts.tsx`

5. **CSS**: Moved to `app/styles/globals.css` and imported in layout

## Next Steps

To complete the conversion:

1. **Convert remaining pages:**
   - Copy HTML content from each `.html` file
   - Convert to React/TSX format
   - Replace `<img>` with `<Image>`
   - Replace `<a>` with `<Link>`
   - Move to appropriate `app/[page]/page.tsx`

2. **Create reusable components:**
   - Footer component
   - Section components (Hero, About, Solutions, etc.)
   - Modal components

3. **Test functionality:**
   - FAQ accordion
   - Navbar scroll behavior
   - All links and navigation
   - Forms and modals

## Notes

- The site is configured for static export (`output: 'export'`) for Azure Static Web Apps compatibility
- Bootstrap is included via CDN in the layout
- All existing CSS classes are preserved
- Image optimization is disabled for static export compatibility
