# How to setup React Router

This walkthrough adds scaffolding for a multi-page app with a header-bar using **react-router** and **&lt;BrowserRouter&gt;**.

Start with the completed [react1](https://github.com/davetemplin/react1) app.

```
$ npm install react-router-dom --save
$ npm install @types/react-router-dom --save-dev
```


## Edit `index.html` to add Bootstrap4 to the &lt;head&gt; *(optional)*
```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" crossorigin="anonymous"></script>
```


## Add file `src/components/HomePage.tsx`
```js
import * as React from 'react';
import { Link } from 'react-router-dom';

export default () => 
    <div className="jumbotron">
        <h1>Home</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
    </div>
```


## Add file `src/components/AboutPage.tsx`
```js
import * as React from 'react';

export default () => 
    <div className="mt-4">
        <h1>About</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
    </div>
```


## Add file `src/components/HeaderBar.tsx`
```js
import * as React from 'react';
import { Link } from 'react-router-dom';

export default () => 
    <nav>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="about">About</Link>
    </nav>
```

## Add file `src/components/App.tsx`
```js
import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import HeaderBar from './HeaderBar';

export default () => 
    <BrowserRouter>
        <div className="container">
            <HeaderBar />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/about' component={AboutPage} />
            </Switch>
        </div>
    </BrowserRouter>
```




## Replace file `src/index.tsx`
```jsx
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('app')
);
```

Navigate to http://localhost:3000 to view the **Home** page. Use the nav-bar to navigate to the **About** page, or navigate to http://localhost:3000/about.


## References
* [React Router Tutorial Example From Scratch by Krunal](https://appdividend.com/2017/09/12/react-router-tutorial-example-scratch/)