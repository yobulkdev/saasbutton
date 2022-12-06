## saascsvbutton

This is a Sample Button application which simulates a CSV button addition process in a typical SaaS application.
A SaaS application has to do 3 things to embedd the CSV button in your main application.

1.Import yoembed NPM package.
2.Update the `templateID` created through YoBulk backend application,Running in a separate port.
3.Update the `yoHostUrl` with the endpoint url where the YoBulk backend application is running.

*Example in App.js

````json
import { YoButton } from "yoembed";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>This is my SAAS</h2>
      <hr />
      <br />
      <YoButton
        templateId={"638ed1b1269efc76eb3faf4b"}
        yoHostUrl={"http://localhost:3000"}
      />
    </div>
  );
}
````
## Building and Running Sample CSV button App
````bash
git@github.com:yobulkdev/saascsvbutton.git
cd yobulksaas 
yarn install
yarn start
````




