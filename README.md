## Purple Bricks Technical Test
This is my submission for a front-end developer position at Purple Bricks.  The submission took me 5 hours and includes a build process for minified CSS and JS as well as a configuration for a dev server.  

To run the project simply pull or download this project and then run `npm install` from the project root and then run `npm run dev` to spin up the dev server, then navigate to `http://localhost:1337`.

### Note 
There is no inline message for the input price box as I used regex to match a pattern against the input when the value changes.  This then formats the number to be stored as an integer in the component state but will render the value to the input box as a comma separated string

### Compatability
I tested this in IE Edge and Chrome (latest), then I used the IE Edge emulator to test IE 8, 9, 10, 11, Safari and Firefox. 

### Notable improvements
Due to the time constraints there are several things that I would do differently with more time: 

    - Each 'Widget' section uses a header with a collapse button on it, this was introduced later as the brief made it sound like each section should be collapsable but the PSD didn't have a hide button for each section.   I would create another React component called 'Header' inside of the 'Widget' folder that accepts a title prop and a boolean to determine if a hide button should be shown.

    - The Dropify module currently operates on a per case basis for each DOM node (there is one instance of Dropify for each widget).  Although the memory profile is low it would be a significant optimization to allow Dropify to handle multiple DOM nodes and have a shared instance attached to the container which is passed own through props (alternatively if we attached this to redux we could map it to dispatch so its easily accessible in sub components)

    - Given the time constraints I only finished writing UI tests for two components, if I had more time I would have written a suite of tests for each component, the existing tests can be ran via `npm run test`

    - I would refactor all of the SASS code.  Although it works it isn't as moduler as it could be.  I would create a separate SASS file for each widget so that all of the widget styles aren't tied up inside of one widget file.  This would be easier to maintain and will be compiled to a minified bundle anyway.

