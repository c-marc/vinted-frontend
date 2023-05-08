## Features

- decent css and responsiveness
- fallback for missing avatars
- account for null filters :
  - for states
  - for requests (otherwise official backend is failing in some case)
  - in controls
- custom crazy components for filters:
  - multistate button with sequential changes
  - paired sliders : mutually dependent and can take null values
  - page navigation that depends on limit and actual page (only page / first / last page)
  - limit
- page is checked when limit is changed or when results' count changes !
- safer useEffect protected against concurrent fetching

## TODO

- redirect to publish after having been redirected to login:
  - `to` might be used with an object with the `path` and a `state` key that can be accessed with `location`.
  - there might be other patterns to do that.
- allow edit : from Offer ; use the same form ; `axios.put`...
- allow deletion
- disable searchBar...

### BIGGER CHANGES

Use React Router features:

- no need for states in forms
- use loaders and actions
- redirect and so on
- refactor to leverage nested routes / shared layout
