# Vinted Frontend

My version.

## Features

- decent css with attention for responsiveness and accessibilty (label/hover/focus)
- fallback for missing avatars and consistent display
- account for `null` filters :
  - for states
  - for requests (otherwise official backend is failing in some case)
  - in controls
- custom crazy components for filters:
  - multistate button with sequential changes
  - paired sliders : mutually dependent and can take `null` values
  - page navigation that depends on limit and actual page (only page / first / last page)
  - limit results
- page number is checked, invalidated and corrected when limit is changed or when results' count changes !
- safer useEffect to protect against concurrent fetching (I think that might happen, with very slow network and/or fast typing in the searchbar...)
- catches as many errors as possible, silently (weird data) or explicitly (when fetching or submitting) with helpful messages
- some css deep-diving with range (see filters) and file inputs (see publish; EDIT overwritten)
- leverage drag and drop native API for picture input

## TODO

Add routes:

- allow editing :
  - `axios.put`...
  - from the Offer route
  - share the same form than publish... but no required attribute; and either send only the changes or pre-populate the form with current data (pb with picture) ?
- allow deletion
- but :

  - official backend allows destructive operations from any authenticated user...
  - implementation might be unefficient and confusing without leveraging other coding patterns (token would have to be passed down on every route)
  - ideas : provide auth via useContext

- disable searchBar... (it's not causing any trouble but it's a little bit weird to have it on other routes)

### BIGGER CHANGES

Use React Router features:

- no need for states in forms
- use loaders and actions
- when appropriate, redirect instead of navigate
- refactor to leverage nested routes / shared layout:
  - signup/login
  - publish/update (use from)
