## Features

- decent css and responsiveness
- fallback for missing avatars and consistent display
- account for null filters :
  - for states
  - for requests (otherwise official backend is failing in some case)
  - in controls
- custom crazy components for filters:
  - multistate button with sequential changes
  - paired sliders : mutually dependent and can take null values
  - page navigation that depends on limit and actual page (only page / first / last page)
  - limit
- page is checked, invalidated and corrected when limit is changed or when results' count changes !
- safer useEffect to protect against concurrent fetching (I think that might happen, with very slow network or fast typing in the searchbar...)

## TODO

- allow editing :
  - `axios.put`...
  - from the Offer route
  - share the same form than publish... but no required attribute; and either send only the changes or pre-populate the form with current data (pb with picture)
- allow deletion
- but official backend allows destructive operations from any user...
- disable searchBar...

### BIGGER CHANGES

Use React Router features:

- no need for states in forms
- use loaders and actions
- when appropriate, redirect instead of navigate
- refactor to leverage nested routes / shared layout:
  - signup/login
  - publish/update (use from)
