reactsrap
bootstrap
leaflet, OpenStreetMap
react-leaflet

Geolocation API
ip API

# Guest Map

- App detects users laocation (from browser or IP)
- Guests of the website can leave a message
- A pin will be added to the map with the users location and message

## TODO

- [x] create-react-app
- [x] install react-leaflet
- [x] Get a map on the page!
- [x] Get the user's location
  - [x] with the browser (Used Geolocation API)
  - [x] with their IP using an API (Used ipapi)
- [x] Show a pin at the users location
- [x] Show a form to submit a message
  - when form is submitted - POST /message
- [x] Setup server with create-express-api:
- [x] Add monk and joi
- [x] POST /messages
  - latitude
  - longitude
  - name
  - message
  - datetime
- [ ] When the page loads get all messages
  - [ ] GET /messages
- [ ] Add pins to the map
- [ ] Click a pin to see the message
- DEPLOY!
  - http://guestma.app

## Stretch

- [ ] Login
- [ ] Users have their own guest map with their own markers and unique url
- [ ] Allow user to drag pin
