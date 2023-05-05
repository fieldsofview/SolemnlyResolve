# Solemnly Resolve

This document contains notes on the design, implementation and enhancements of the Solemnly Resolve web application.

## Deployment

* The game is hosted as website in Linode server
* It's at `/var/www/html/solemnly_resolve`
	- branch `master`
	- Update code by `git pull origin feat-kn` (currently)
* Access to is password-protected by .sraccess file in /etc/nginx


## TODO

### TASKS
[ ] Merge `feat-kn` with `master`
[ ] Rename `master` to `main`
[ ] Index for category is different; handle this better for PROGRESS BAR
[ ] Issue with coins number in Firefox

## IMPLEMENTATION

* CURRENT 
	- landing page for the app is `page1.html`
	- `scenarios.html` -> a starting **SCENARIO** is randomly generated
	- `main.html` -> there are multiple **SITUATION** to browse
	- in each **SITUATION** page:
		^ players can give consensus
		^ players can give coins
	- SITUATIONS are populated by `data.js` file in the main folder
	- `initEverything` function in `gamelogic.js` initialises everything
		^ 

* PLANNED
	- Path changes
		^ ="resources -> ="../resources
		^ 'resources -> '../resources
		^ ="data -> ="../data
		^ ="files -> ="../files
		^ ="images -> ="../images
		^ href="/images -> href="../images
		^ "./gamelogic.js" -> "../scripts/gamelogic.js"
	- 

## Enhancements


### Multi-language Support

#### Kannada

* "font-family: 'Tunga';"

### Dynamic Scenarios and Situations

* `page4.html`
	- add a dropdown for scenario
