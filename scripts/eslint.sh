echo "***gateway microservice***"
cd gateway
npm run lint

# echo "***log microservice***"
# cd ../log
# npm run lint

echo "***login microservice***"
cd ../login
npm run lint

echo "***meeting microservice***"
cd ../meeting
npm run lint

echo "***user microservice***"
cd ../user
npm run lint
