# Build TS
npm install -g typescript
cd ./task
npm install
tsc 
cd ../

# Create extension
npm i -g tfx-cli
tfx extension create --manifest-globs vss-extension.json

# > Original Upload from https://marketplace.visualstudio.com/manage/publishers/hey24sheep