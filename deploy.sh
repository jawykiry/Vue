rm -rf dist
yarn build
cd dist
git init
git add .
git commit -m "2002.11.30"
git branch -M main
git remote add origin git@github.com:jawykiry/vue-website.git
git push -f -u origin main
cd -
echo "https://jawykiry.github.io/vue-website/#/"
