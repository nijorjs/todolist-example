import "nijor"; // Import the Nijor core library
import App from 'App.nijor'; // Import the App.nijor component
App.init('app'); // Initialize the App component with name 'app'. We are initializing it with 'app' as our index.html file has <app></app> in body.
App.run(); // Run the component. The <app></app> in the index.html will get replaced by the content inside the App.nijor component.