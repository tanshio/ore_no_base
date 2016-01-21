gulp         = require 'gulp'

$            = require('gulp-load-plugins')()

settings     = require '../../config/config.json'

# hologram     = require 'gulp-hologram'
# outputPath   = 'styleguide'

#****************************
# 6. StyleGuide
#****************************

# gulp.task 'style', ['scss','js'], ()->
#   configGlob = './styleguide/hologram_config.yml';
#   gulp.src( configGlob )
#     .pipe(hologram());
#   .on 'end' , reload

# gulp.task 'styleguide', ['styleguide:static', 'styleguide:generate', 'styleguide:applystyles']
