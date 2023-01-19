# image-processing-api
A simple placeholder API, the first allows you to place images into your frontend with the size set via URL parameters (and additional stylization if you choose) for rapid prototyping. The second use case is as a library to serve properly scaled versions of your images to the front end to reduce page load size.


### Resize Image Endpoint
- Run `npm start`
- http://localhost:3000/api/images?filename=encenadaport&width=400&height=400

![processed-image](https://user-images.githubusercontent.com/50827537/211627030-e34be1d4-89a2-4da1-8c73-a051fded2bbc.PNG)


### Error Page on wrong Image Endpoint
- Run `npm start`
- http://localhost:3000/api/images?filename=encehnadaport&width=400&height=400

![test-error](https://user-images.githubusercontent.com/50827537/211627056-54ff6628-384b-4c15-a910-602bea426bf6.PNG)


### Running Tests
- Run `npm test`

![running tests](https://user-images.githubusercontent.com/50827537/211627070-1a4f8ea0-2da5-4e88-a4e0-7af5ff20b01c.PNG)


## Author
- Matembu Emmanuel Dominic
