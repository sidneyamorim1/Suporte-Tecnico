---
name: Suporte Técnico Integrado
colors:
  surface: '#fbf8fa'
  surface-dim: '#dcd9db'
  surface-bright: '#fbf8fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f4'
  surface-container: '#f0edef'
  surface-container-high: '#eae7e9'
  surface-container-highest: '#e4e2e3'
  on-surface: '#1b1b1d'
  on-surface-variant: '#45474c'
  inverse-surface: '#303032'
  inverse-on-surface: '#f3f0f2'
  outline: '#75777d'
  outline-variant: '#c5c6cd'
  surface-tint: '#545f73'
  primary: '#091426'
  on-primary: '#ffffff'
  primary-container: '#1e293b'
  on-primary-container: '#8590a6'
  inverse-primary: '#bcc7de'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#1e1200'
  on-tertiary: '#ffffff'
  tertiary-container: '#35260c'
  on-tertiary-container: '#a38c6a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e3fb'
  primary-fixed-dim: '#bcc7de'
  on-primary-fixed: '#111c2d'
  on-primary-fixed-variant: '#3c475a'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#fadfb8'
  tertiary-fixed-dim: '#ddc39d'
  on-tertiary-fixed: '#271902'
  on-tertiary-fixed-variant: '#564427'
  background: '#fbf8fa'
  on-background: '#1b1b1d'
  surface-variant: '#e4e2e3'
typography:
  display:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1440px
  gutter: 24px
  margin-mobile: 16px
  sidebar-width: 260px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 24px
---

## Brand & Style
The brand personality is rooted in reliability, efficiency, and technical precision. The design system targets facility managers and technical support staff who require a high-density, low-friction interface to manage complex infrastructure tasks.

The visual style follows a **Corporate / Modern** aesthetic with a focus on data clarity and functional hierarchy. It utilizes a systematic approach to information density, ensuring that high volumes of tickets and equipment data remain legible and actionable. The interface emphasizes structural stability through clean lines, generous white space within data containers, and a refined professional tone.

## Colors
The palette is led by **Deep Navy (#1e293b)**, used for structural navigation and primary branding elements to convey authority. The background uses a soft **Light Gray (#f1f5f9)** to reduce eye strain during long shifts and to allow cards to pop visually.

Functional color application is critical for this system:
- **IT (TI):** Vivid blue for digital infrastructure.
- **Elétrica:** Amber/Yellow for power systems.
- **Predial:** Green for general maintenance and building health.
- **Crítico:** Bold red reserved exclusively for high-priority outages or safety risks.
- **Neutral/Secondary:** Slate grays for metadata and secondary iconography.

## Typography
This design system utilizes **Inter** for its exceptional legibility in data-heavy environments and its neutral, modern tone. 

- **Hierarchy:** Use `headline-md` for card titles and `body-md` for standard table row data.
- **Data Labels:** `label-md` should be used for small headers within equipment details, utilizing a slight uppercase transform for distinction.
- **Localization:** All typography must support Portuguese (Brazil) diacritics without clipping, ensuring adequate line-height for characters like "Ç" and "Ã".

## Layout & Spacing
The layout follows a **Fixed Grid** model for desktop dashboards to maintain a consistent viewing experience for data tables. 

- **Sidebar:** A persistent left-hand navigation (260px) in Deep Navy.
- **Main Content:** A 12-column grid with 24px gutters.
- **Responsive Behavior:** 
    - **Desktop (>1024px):** 12 columns, fixed sidebar.
    - **Tablet (768px - 1023px):** 6 columns, collapsible sidebar, 24px margins.
    - **Mobile (<767px):** 4 columns, bottom navigation or "hamburger" menu, 16px margins. 
- **Rhythm:** Use an 8px base unit for all internal component padding and spacing (8, 16, 24, 32, 48).

## Elevation & Depth
To maintain a professional and clean aesthetic, depth is achieved through **Tonal Layers** and **Low-contrast Outlines** rather than heavy shadows.

- **Level 0 (Background):** Surface color `#f1f5f9`.
- **Level 1 (Cards/Tables):** White background (`#ffffff`) with a 1px border of `#e2e8f0`. No shadow.
- **Level 2 (Hover/Active):** Very subtle ambient shadow (4px blur, 2% opacity) to indicate interactivity on clickable cards.
- **Modals:** High elevation with a 12px blur shadow and a 40% opacity backdrop overlay to focus user attention on critical inputs.

## Shapes
The shape language is **Soft** and restrained. 
- **Standard UI Elements:** 0.25rem (4px) radius for buttons, input fields, and checkboxes to maintain a precise, technical feel.
- **Cards & Large Containers:** 0.5rem (8px) radius to provide a slight visual softening against the rigid grid.
- **Badges/Status Tags:** Fully rounded (pill-shaped) to distinguish them from functional buttons.

## Components

### Buttons & Inputs
- **Primary Action:** Solid Deep Navy (`#1e293b`) with white text.
- **Secondary Action:** Outlined with `#e2e8f0` and `#1e293b` text.
- **Inputs:** White background, 1px border `#cbd5e1`. On focus, use a 2px blue ring.

### Data Tables & Lists
- **Header:** Light gray background (`#f8fafc`), semi-bold labels.
- **Rows:** 1px bottom border only. Hover state uses a very light tint of blue (`#f1f5f9`).
- **Interactive Badges:** Use semantic colors from Section 2. Text should be high-contrast (e.g., dark red text on light red background for "Crítico").

### Cards
- **Summary Cards:** Used at the top of dashboards for KPIs (Total Chamados, Pendentes, Em Atraso).
- **Structure:** Simple header, large display number, and a small sparkline or trend indicator.

### Status Indicators (Tags)
- **Aberto:** Blue border/text.
- **Em Andamento:** Amber border/text.
- **Concluído:** Green border/text.
- **Cancelado:** Gray border/text.

### Feedback
- **Toasts:** Positioned top-right for system confirmations (e.g., "Chamado atualizado com sucesso").