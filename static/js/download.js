// shows/hides out the download button text and link based on user's platform
const el = document.getElementById('splash')

if (navigator.platform.match(/(Mac)/i)) {
  el.className = 'mac'
}

if (navigator.platform.match(/(Win)/i)) {
  el.className = 'windows'
}
