## About

Property Management Tool to help property owners manage their properties by storing documents and tracking maintenance requests. This repo is for the front end.

[BackEnd](https://github.com/wghile/PM-Tool-Express)

Built with React + Vite, JavaScript, Axios, HTML, CSS

## How to Use

- Currently user authentication is not set up, so users can click on the 'PMT' logo at the top of the application to navigate to the start page
- The start page is where the user can view their properties, edit, and add new properties
- To see more information on the property the user will click on the property name for the list and the user will be redirected to that property's dashboard. The Dashboard has 3 "pages":
  1. Dashboard Home Page - simple display of address
  2. Service Requests - track maintenance requests
  3. Document Center - store and upload pertinent documents
- To return to list of properties users can simply click on 'Exit Dashboard'
- Users can remove a property and all of its information by navigating to the Settings in the Dashboard and click delete to remove that property
- Also from the Settings drop down menu, users can "log out"

## Features for Future Enhancements

- User Authentication
- Add a refresh button to display documents after changes are made (low) or figure out how to have documents automatically render with updates (high)
- Add phonebook to store contacts using Map/Dictionaries

## Challenges

- Connecting front end to back end
- Difficulty finding free API to display property information.. would've loved to use an API to get image of property, size, property value, etc to display on the dashboard. For now just have property address and stock photo of house.
- Unable to add documents for a property unless I restart node.js. Not sure why this is and need to troubleshoot

## Resources

- Pop Ups and Menu: https://www.geeksforgeeks.org/how-to-create-popup-box-in-reactjs/, https://www.npmjs.com/package/reactjs-popup

- Troubleshooting Pop Ups (this resource helped me realize that the parent pop up component had default closing attributes which is why child pop up component functions were not working): https://stackoverflow.com/questions/71435229/facing-quite-strange-issue-in-popup-closing-in-react-method-is-getting-called-b

- Overriding Inline Styling: https://stackoverflow.com/questions/16813220/how-can-i-override-inline-styles-with-external-css

- Fixing endpoint connections (MERN Stack Tutorial): https://www.youtube.com/watch?v=-42K44A1oMA

- React + Axios: https://www.freecodecamp.org/news/how-to-use-axios-with-react/#how-to-make-a-get-request

- Adding an array of objects as one of the model's properties: https://www.dctacademy.com/blog/storing-an-array-of-objects-in-a-mongoose-field-a-guide#:~:text=To%20store%20an%20array%20of,const%20schema%20%3D%20new%20mongoose.

- External link without defined route: https://stackoverflow.com/questions/73829505/how-can-i-route-to-an-external-link-without-appending-to-current-link
