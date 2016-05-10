REPO="git@github.com:NuCivic/react-dashboard-boilerplate.git"
DASH=${PWD##*/}

# rename files
echo "- Renaming Module files to $DASH";
mv react_dashboard.info $DASH.info
mv react_dashboard.module $DASH.module

# rename function calls
echo "- Renaming function calls to $DASH";
perl -p -i -e "s/react_dashboard/$DASH/g" ./$DASH.module

# Clone the react dashboard boilerplate app.
echo "- Cloning boilerplate application."
git clone ${REPO} ./app

# Install app.
echo "- Installing boilerplate application."
cd ./app
npm install
if [[ $? -ne 0 ]]; then
  echo "ERROR: npm install failed"
  exit 1
fi

# Delete not needed dirs and files
rm -rf .git
rm .gitignore
