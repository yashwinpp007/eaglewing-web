# Mobile Hero Fix Notes

## Problem from user screenshot:
1. The hero text is being cut off at the top - the headline starts with "MEASURABLE RESULTS." visible but "INTELLIGENT CLEANING." is hidden behind the navbar
2. The "BOOK A SITE AUDIT" button overlaps with the stats bar numbers at the bottom
3. The slide dots overlap with the stats bar

## Root causes:
- The navbar is h-28 on mobile (112px tall) and the hero content has pt-40 (160px) which should be enough
- But on mobile, h-screen with all the content (label + headline + description + 2 buttons stacked) plus the stats bar at the bottom creates overflow
- The stats bar is absolute bottom-0, and the content area doesn't account for it

## Fixes applied:
1. Added max-h-[900px] on mobile to prevent hero from being too tall on very large phones
2. Reduced pt to pt-28 on mobile (pt-40 on sm+)
3. Added pb-32 on mobile to create space above the stats bar
4. Reduced headline from text-5xl to text-4xl on mobile
5. Reduced description from text-lg to text-base on mobile
6. Reduced button padding on mobile
7. Reduced stats text sizes on mobile
8. Moved slide indicators up from bottom-8 to bottom-20 to avoid stats overlap

## Wing logo fix:
- Removed black background using Python PIL/numpy
- Uploaded transparent version to CDN
- Replaced URL in all 4 components (About, Pillars, Technology, Footer)
