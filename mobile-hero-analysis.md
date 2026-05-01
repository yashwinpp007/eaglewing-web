# Mobile Hero Banner — Honest Analysis

## Current Layout (at 393px wide, ~850px tall mobile screen):

### Vertical Space Budget:
- Total hero height: 850px (max-h-[850px])
- Navbar height: h-28 = 112px (fixed, overlays hero)
- Content top padding: pt-28 = 112px (to clear navbar)
- Content bottom padding: pb-32 = 128px
- Stats bar at bottom: ~80px (absolute bottom-0)
- Slide indicators: absolute bottom-20 = 80px from bottom

### Available content area:
- 850px - 112px (top pad) - 128px (bottom pad) = 610px for content
- But stats bar overlaps from bottom: 80px
- So real visible area between content end and stats: 850 - 112 - content_height - 80 = gap

### Content stack (approximate heights on mobile):
- Label row: ~24px
- mb-4: 16px
- Headline (2 lines at text-4xl): ~100px
- mb-4: 16px
- Description (3-4 lines at text-base): ~80px
- mb-6: 24px
- Two buttons stacked (flex-col): ~96px
- TOTAL: ~356px

### The REAL Problems:

1. **Background image barely visible**: The gradient overlays are very heavy:
   - `from-black/85 via-black/60 to-black/30` (left-to-right)
   - `from-black/80 via-transparent to-black/20` (bottom-to-top)
   - Plus `carbon-pattern opacity-30`
   - On a 393px screen, the "to-black/30" right side is barely visible because the content takes up most of the width
   - Result: The background image is almost completely obscured on mobile

2. **Content is left-aligned but takes full width on mobile**: With px-4 (16px each side), the content max-w-2xl (672px) exceeds the 393px viewport, so it fills the entire width. This means the background image has NO breathing room to show through.

3. **Crowded feeling**: The text, description, and two stacked buttons fill most of the vertical space. Combined with heavy dark overlays, it feels like a dark text block rather than a hero with a beautiful background image.

4. **Alignment**: The content uses `flex items-center` (vertically centered) but with pt-28 and pb-32, the center point is shifted. The visual center doesn't feel natural.

## Recommendations:

1. **Reduce overlay darkness on mobile** — make the gradient lighter so the image shows through more
2. **Consider hiding the description on mobile** — just show headline + buttons
3. **Reduce navbar height on mobile** — h-28 (112px) is very tall for mobile; h-20 (80px) would be better
4. **Make the hero taller on mobile** — remove the max-h-[850px] cap, let it be 100svh
5. **Center-align content on mobile** — instead of left-aligned, center it for better balance
6. **Reduce button sizes on mobile** — they're taking too much space
