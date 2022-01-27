## Project set up
* Crated project with **npx-create-react-app**
* Added **SASS** package
* Added an **.env** file with the API configuration

## APP flow
The app starts with an empty query. 

By default, if the query is empty the app fetch the trending gifs.

When the user search for a query the app fetch the gifs based on the query.

If there are no results for the query, a message is shown. (ErrorMessage component)

If there is an issue with the server, a message is shown. (ErrorMessage component)

