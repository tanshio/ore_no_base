import fs from 'fs'

module.exports = function(){

	try {
	  if (fs.statSync('www')) {
    return true
	  }
	} catch (e) {
		return false
	}

}
