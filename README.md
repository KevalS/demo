# Qatalog Frontend Interview - take home task

## The Task

For this exercise we would like you to build a small 2 page application. 

This application is intended to allow organizations some very light-weight theming capabilities inside Qatalog. 

The application will consist of the following:

### Page 1: Settings

Elements:
* A select dropdown that lets user choose an organization from the data structure listed in "The Data" below
* A button labelled "Reset"
* A button labelled "Apply Theme"
* A link at the bottom of the page labelled "Your homepage"

User requirements:
1. When clicking "Apply Theme" the background of the site should change to reflect the background image specified in the `organizations` data structure. (See "The data" below)
1. When clicking "Reset" 
	1. The background should reset back to white
	1. The select dropdown should reset back to 'choose an organization'
1. Clicking on "Your Homepage" should direct the user to the "Homepage" page (see below)
1. The "Your homepage" link should be centered at the bottom of the viewport.

### Page 2: Homepage

Elements:
* An `<h1>` that reads "Welcome to the $ORGANIZATION_NAME homepage"
* A link at the bottom labelled "Back to settings"

User requirements:
1. $ORGANIZATION_NAME should be the name of the org chosen in the select dropdown on the "settings" page
	1. When $ORGANIZATION_NAME is missing, it should default to "Qatalog"
1. The background on this page should reflect the background chosen in the select dropdown on the "settings" page
1. The H1 should be vertically and horizontally centered
1. The "Back to settings" link should be centered at the bottom of the viewport.

## The data
The data structure is contained in `orgs.json` in the root of this repo. For simplicity's sake, feel free to hardcode/inline it into your application. For this application assume the following:

* `org_name` == Organization Name
* `background_image` == the background image to apply as their "theme"

## The Look and Feel

Please use this Figma file as a guide for the site's look and feel:

https://www.figma.com/file/D0SQ9AxL5SZwEgAsJNyp3Y/FE-Interview-Mock?node-id=0%3A1

If you're unfamiliar with Figma, please know that under the top left "F"
dropdown there are multiple pages. This should give you a general
feeling how the site should look with/without a company theme.

## Requirements

1. Please setup your IDE to use the .eslintrc in the project root for linting conventions.  
	 If you do not have eslint already installed, you can install it as a local npx module as per here: https://eslint.org/docs/user-guide/getting-started

2. We are a React shop that uses Redux and Context. However, do not feel obligated to using React if you’d prefer another approach! We simply ask that you discuss your choices in `SOLUTION.md`

3. The application should work correctly in the latest Chrome; don’t worry about cross-browser compatibility. 

4. We expect this exercise to take less than 1h. Once you’ve reached an hour working on this exercise, please stop! At that point, please outline any additional work you would have done in `SOLUTION.md`

5. Once you’ve completed the exercise, please submit a PR to this repo, tagging `@leo-mendoza-qatalog` in the description. In your PR, please provide a video or set of screenshots showing the working application.


# Acknowledgements

Company background patterns courtesy of
    [www.subtlepatterns.com](https://www.subtlepatterns.com)
