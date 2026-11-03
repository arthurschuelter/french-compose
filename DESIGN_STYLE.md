# Design style guide

Use this guide when adding or updating screens in Bon Mot. The interface should feel like a calm, tactile French-learning practice space: editorial rather than app-like, warm rather than stark, and encouraging rather than competitive.

## Visual direction

- Build a quiet composition with generous whitespace, clear alignment, and a small number of purposeful accents.
- Use warm paper surfaces, soft botanical greens, and restrained terracotta details. Avoid pure white backgrounds, saturated colors, heavy shadows, and glossy gradients.
- Prefer thin borders and softly rounded corners to strong outlines or large pill-shaped containers. Reserve pills for compact filters and labels.
- Add visual character through typography, small line icons, and simple geometric illustration. Keep decorative details subtle and relevant to learning.
- Keep content hierarchy calm and readable. Avoid dense dashboards, loud badges, and competitive or high-pressure language.

## Color tokens

Reuse these existing values from the current interface where practical:

| Purpose | Value | Use |
| --- | --- | --- |
| Ink | `#252923` | Main text |
| Muted text | `#858A80` | Descriptions and secondary labels |
| Paper | `#F9F8F3` | Main page background |
| Sidebar paper | `#F2F1E9` | Navigation background |
| Card paper | `#FFFEFA` | Cards and raised content |
| Fine line | `#E9E8E0` | Dividers and subtle borders |
| Garden green | `#536B50` | Primary accent, selected controls, links |
| Soft green | `#60765A` | Editorial emphasis |
| Terracotta | `#A8654E` | Secondary accent and occasional emphasis |

Use accent colors sparingly. Supporting icon tints may use pale peach, lilac, mint, blue, yellow, or rose backgrounds, paired with a subdued foreground color. Keep text contrast strong enough to read on each surface.

## Typography

- **DM Sans** is the interface typeface for navigation, body copy, controls, and headings.
- **Playfair Display** is an accent serif for italicized phrases, short editorial flourishes, and occasional display details. Do not use it for long passages or dense UI.
- **DM Mono** is for small metadata such as breadcrumbs, section eyebrows, categories, counts, and progress labels. Use uppercase and modest letter spacing when it helps distinguish metadata.
- Use medium or semibold weights for emphasis; avoid making every element bold. Headlines can use a lighter weight and tight tracking, with one phrase highlighted in the serif accent.
- Body copy should be muted but legible, with comfortable line height. Tiny mono labels are decorative metadata and should not carry essential instructions alone.

## Layout and components

- Use a restrained desktop frame with a persistent side navigation where the page structure benefits from it. Keep the main content in a readable, centered column with broad side margins.
- Separate major regions with fine horizontal rules instead of large blocks of color.
- Use a clear sequence: small eyebrow or breadcrumb, prominent heading, short supporting text, then the primary content or action.
- Cards should have a warm near-white surface, a fine neutral border, a modest radius (around 10px), and compact, consistent internal spacing. Keep card contents aligned and let the action or metadata sit at the bottom.
- Use simple, consistent outline icons with rounded strokes. Icons support labels and should not replace essential text.
- Buttons and filter chips should be compact and understated. A selected control may use the garden green fill with white text; inactive controls use a transparent or paper surface with a fine border.
- Use shadows only as a soft hover cue, not as the default way to separate every surface.

## Interaction and accessibility

- Keep hover feedback subtle and quick: slight elevation, a softened border color, or an accent shift. Preserve a clear keyboard focus state for every interactive element.
- Use semantic landmarks, headings in order, descriptive link and button names, and accessible labels for icon-only controls.
- Do not communicate selected, active, or status states through color alone; pair color with text, shape, or another visual cue.
- Respect `prefers-reduced-motion`. Motion should be brief and optional, never required to understand the interface.
- Maintain readable contrast, especially for muted text and small mono labels.

## Responsive behavior

- At narrow widths, collapse or simplify desktop navigation and let the main content use the available width.
- Stack split hero layouts vertically on mobile. Keep headings readable and preserve the order of heading, supporting copy, action, then illustration.
- Reduce multi-column card grids to two columns at medium widths and one column on small screens. Keep cards comfortably tappable.
- Keep filter rows usable on small screens by allowing horizontal scrolling rather than squeezing labels or wrapping them unpredictably.
- Check that footer details, breadcrumbs, and decorative artwork do not crowd or overflow the viewport.

## Keep the style coherent

When adding a new feature, reuse the existing tokens, type roles, border treatment, spacing rhythm, and interaction patterns before introducing a new visual treatment. New colors or component styles should have a clear purpose and fit the same warm, restrained editorial character.
