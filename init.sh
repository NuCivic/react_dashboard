EXAMPLE_REPO="git@github.com:NuCivic/react-dashboard-example.git"

# Clone the react dashboard example app.
echo "- Cloning example application."
git clone ${EXAMPLE_REPO} ./app

# Install app.
echo "- Installing example application."
cd ./app
npm install
if [[ $? -ne 0 ]]; then
  echo "ERROR: npm install failed"
  exit 1
fi
