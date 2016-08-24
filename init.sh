REPO="git@github.com:NuCivic/react-dashboard-boilerplate.git"
TAG="remotes/origin/0.3.0-candidate"

# Clone the react dashboard boilerplate app.
echo "- Cloning boilerplate application."
git clone ${REPO} ./app

# Install app.
echo "- Installing boilerplate application."
cd ./app
git checkout $TAG
npm install
if [[ $? -ne 0 ]]; then
  echo "ERROR: npm install failed"
  exit 1
fi

# Delete not needed dirs and files
rm -rf .git
rm .gitignore
