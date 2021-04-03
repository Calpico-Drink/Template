const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const PWA = true

let Exports = {
	env: {
		
	}
}

if (PWA) {
	Exports.pwa = {
    	dest: 'public',
    	runtimeCaching,
	}
	Exports.env.isPWA = true
	module.exports = withPWA(Exports)
} else {
	Exports.env.isPWA = false
	module.exports = Exports
}