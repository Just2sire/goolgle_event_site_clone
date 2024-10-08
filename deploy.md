How to Deploy A React app?
Step 1. Create the GitHub repository first by doing the following steps:

Click on the + sign near the profile and click on the New Repository.


 

Giving the name to the Repository.


 

Clicking on the Create repository and executing the following commands which will be shown just after clicking on the create repository on your VS code terminal.

git init
git add .
git commit -m "first commit"
git branch -M main
And then enter the following command in which we have to replace the <username> with the username of your GitHub account and the <rep Name> with the name of the repository which you have created.

git remote add origin https://github.com/<username>/<rep Name>.git
For example, git remote add origin https://github.com/vishalWaghmode/TextEdit.git

And, then enter the following commands which will push the react application to the above repository

git push -u origin main
And, then refresh the GitHub site and you will get to see the uploaded code.

Step 2. Adding the GitHub Pages dependency packages

The gh-pages package allows us to publish the build file of our application into a gh-pages branch on GitHub, where we are going to host our application. Install the gh-pages dependency using npm :

npm install gh-pages --save-dev
Step 3. Adding the properties to the package.json file

The package.json file is been configured so that we can point the GitHub repository to where our react app is been deployed. The first property we have to add is at the top of the package.json file which will be given the name “homepage“, and the value for it will be in the following format:

"homepage": "https://<Username>.github.io/<Repository-name>"
Example: “homepage”: “https://vishalWaghmode.github.io/Textutil”

Then we will add “deploy” and “predeploy “properties in the script field with the following values:

"scripts":{
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist" 
}   

 

Step 4. Pushing the code updates to the GitHub repository and finally deploying the application

For pushing the updates which we have done in the code we can use the following commands:

git add .
git commit -m "commit"
git push
And now finally deploy the application using the following command in the terminal:

npm run deploy
This command will publish your application on the branch named gh-pages and can be opened by the link given in the homepage property written in the package.json file.

Step 5. View the deployed app on GitHub

Now, to view the link for opening the application we will go on the GitHub and click on Settings then at the left of the settings we can see the code and automation where the pages field will be present, just clicking it we will get the following interface where the link will be provided.


Note: If the link does not come then just wait for 2-3 minutes and then again refresh the browser and then click on the link again on it.