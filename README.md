# Vinted Frontend

My version.

## Interesting Features

- decent css with attention for responsiveness and accessibilty (label/hover/focus)
- fallback for missing avatars and consistent display
- account for `null` filters ( (otherwise we're not fetching all offers : this is visible in the front demo))
  - for states
  - for requests
  - in controls
- custom crazy funny components for filters:
  - multistate button with sequential changes
  - paired sliders : mutually dependent and can take `null` values
  - page navigation that depends on limit and actual page (only page / first / last page)
  - limit results
- page number is checked, invalidated and corrected when limit is changed or when results' count changes !
- safer useEffect to protect against concurrent fetching (I think that might happen, with very slow network and/or fast typing in the searchbar...)
- catches as many errors as possible, silently (weird data) or explicitly (when fetching or submitting) with helpful messages
- some css deep-diving with range (see filters) and file inputs (see publish; EDIT overwritten for improved appearance)
- leverage drag and drop native API for picture input
- shield the "/payment" route: redirect if not auth **but also** if the route is not visited with the appropriate payload (location states) which means we didn't buy. Tried a different approach for redirecting.

## TODO

Rewrite auth to store more info or fetch user data when loading the app:

- we need more info about the user: this is required for Stripe; this could be convenient for other need.

Chooose a pattern for navigation:

- I like how a ternary in the Route component can intercept and not even render the route. But more complex operation are difficult (ex: redirect and forward payload; multiple conditionnal redirections)
- The same problems happen in the JSX in the component
- need to validate the useEffect approach I tried...

Add routes:

- allow editing :
  - `axios.put`...
  - from the Offer route
  - share the same form than publish... but no required attribute; and either send only the changes or pre-populate the form with current data (pb with picture) ?
- allow deletion
- but :

  - official backend allows destructive operations from any authenticated user...
  - implementation might be unefficient and confusing without leveraging other coding patterns (token and id would have to be passed down on every route)
  - ideas : provide auth via useContext

Disable searchBar... (it's not causing any trouble but it's a little bit weird to have it on other routes)

Use helper to prefix id (in forms, when using sibling labels, they are required ; but at some point, there might be repetition: "email", "password" in different forms)...

### BIGGER CHANGES

Use React Router features:

- no need for systematic states in forms
- use loaders and actions
- when appropriate, redirect instead of navigate
- refactor to leverage nested routes / shared layout:
  - signup/login
  - publish/update (how much could they share)
