echo "***gateway microservice***"
cd gateway
npm run build

echo "***gui microservice***"
cd ../gui
npm run build

# echo "***log microservice***"
# cd ../log
# npm run build

echo "***login microservice***"
cd ../login
npm run build

echo "***meeting microservice***"
cd ../meeting
npm run build

echo "***user microservice***"
cd ../user

