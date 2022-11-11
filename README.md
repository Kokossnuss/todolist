# Packages and their installations for developement

yarn create strapi-app TodoBackend --ts  //select quickstart

 npm init vue@latest  //Project name: ... TodoFrontend
                        √ Package name: ... todofrontend
                        √ Add TypeScript? ... No / Yes
                        √ Add JSX Support? ... No / Yes
                        √ Add Vue Router for Single Page Application development? ... No / Yes
                        √ Add Pinia for state management? ... No / Yes
                        √ Add Vitest for Unit Testing? ... No / Yes
                        √ Add an End-to-End Testing Solution? » No
                        √ Add ESLint for code quality? ... No / Yes
                        √ Add Prettier for code formatting? ... No / Yes 

npm install --save axios vue-axios 

in TodoBackend/.env change Port to PORT=8082
then console in cd TodoBackend; yarn run build