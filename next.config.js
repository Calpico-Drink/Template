const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const PWA = true

const MainExports = {
  
}

if (PWA) {
	MainExports.pwa = {
    	dest: 'public',
    	runtimeCaching,
	}
	
	module.exports = withPWA(MainExports)
} else {
	module.exports = MainExports
}