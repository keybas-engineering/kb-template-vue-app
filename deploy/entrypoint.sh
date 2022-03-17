#!/bin/sh

# Shell script to replace environment variables with their value in compiled Vue code.
# This script changes the file contents; running it more than once will have no effect.
# If you make a change to the environment variables, you must recreate the container
# from the pristine image.
# See: https://stackoverflow.com/a/57928031

# List all variables starting with VUE_APP_
# See: https://unix.stackexchange.com/a/111627
VARIABLES=`set | grep "^VUE_APP_.*=" | cut -f 1 -d '='`
ROOT_DIR=/app

echo Replacing env variables
echo "  Variables:" $VARIABLES
# HTML and JS files
for file in $ROOT_DIR/index.html $ROOT_DIR/js/app.*.js;
do
  echo "  Processing $file ...";
  for variable in $VARIABLES;
  do
    eval value="\$$variable"
    sed -i 's|process.env.'${variable}'|"'${value}'"|g' $file
    sed -i 's|Object({[^}]*}).'${variable}'|"'${value}'"|g' $file
    sed -i 's|{[^}]*}.'${variable}')|"'${value}'")|g' $file
  done
done
# JS .map files
for file in $ROOT_DIR/js/app.*.js.map;
do
  echo "  Processing $file ...";
  for variable in $VARIABLES;
  do
    eval value="\$$variable"
    sed -i 's|process.env.'${variable}'|\\"'${value}'\\"|g' $file
    sed -i 's|Object({[^}]*}).'${variable}'|\\"'${value}'\\"|g' $file
  done
done
echo "Done!"

# Call the entrypoint defined by the base nginx image
# See: https://docs.docker.com/engine/reference/builder/#exec-form-entrypoint-example
echo "Starting nginx:" $@
exec /docker-entrypoint.sh "$@"
