# Styling Guide

These are notes on how I analyzed the expected layout and style. And what I decided to go with.

## Fonts

- Maison Neue (weight: lower than regular ; ninja font says som custom "book" weight)
- or Arial for CTA button
- fs 12px is frequent and could be used as default

## Border-radius

- mostly 5px, sometimes 4 or 3

## General container

- approached with a `max-width: min(1280px, 95svw)`

## Header

- height 65px
- padding 10px 0
- flex with gap 60px (allow search bar to fill ?)
- fs: 12px (default)

## Hero

### Hero card

- position absolute top 75px
- h 270px, w 410px
- padding 25px
- h1: 34px -> 2rem
- btn CTA: Arial 16px

## CardSmall

- w 235px
- header and footer: padding 10px
- header avatar: h 25px
- img: h 360px
- fs 12px
- price: fs 14px

## CardBig

- h 605, w 400
- padding: 40px
- price: fs 24px (1.5rem)
- desc: fs 14px (0.9rem)
- avatar: h50px
- details: 2 cols 50/50

## Auth Forms

- centered
- h1: fs 24px
- a "pas encore inscrit": fs 12px (0.75rem)

## Publish

- full width
- label: fs 16px
- fieldset: margin 20px 0
- elements:
  - padding: 25px;
  - border-bottom
  - 2 columns 50/50
- submit is right bottom

## Some decisions

Border-radius:

- fixed to 5 for consistency
- except for Hero card that asks for sharper corners

Font-size:

- used a higher size in header

### Ressources

For CSS Sliders:

- w3schools
- "smashing-magazine" (need to search)
- [CSS for sliders](https://uxplanet.org/how-to-create-a-range-slider-using-html-css-6112fe9346e4)

For file input:

- [MDN ::file-selector-button](https://developer.mozilla.org/en-US/docs/Web/CSS/::file-selector-button)
- <https://nikitahl.com/custom-styled-input-type-file>
