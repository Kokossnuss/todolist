# Packages and their installations for developement

yarn create strapi-app TodoBackend --ts  //select quickstart

 npm init vue@latest  //Project name: ... VueForntend
                        √ Package name: ... vuefrontend
                        √ Add TypeScript? ...  Yes
                        √ Add JSX Support? ... No 
                        √ Add Vue Router for Single Page Application development? ... No 
                        √ Add Pinia for state management? ... No 
                        √ Add Vitest for Unit Testing? ... No 
                        √ Add an End-to-End Testing Solution? » No
                        √ Add ESLint for code quality? ... No 
                        √ Add Prettier for code formatting? ... No 

npm install --save axios vue-axios 

in TodoBackend/.env change Port to PORT=8082
then console in cd TodoBackend; yarn run build