import gutil from 'gulp-util'

module.exports = function(){

  if (gutil.env.p) {
	  return true
  }else {
		return false
	}

}
