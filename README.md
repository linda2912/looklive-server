# LookLive server

The project you're looking at is an [express.js](http://expressjs.com) project. You'll use it to get set up a development environment where you're
going to optimize the way this project works. In it's current state, the css is messy, the rendering isn't modern and
overall the product is boring and not efficient. It's up to you to fix this and improve it.

## Getting started

### Step 1 - clone the repo
Github provides some instructions for this and we're assuming that you know how to clone this repo. If you're not sure,
don't hesitate to raise your hand now and ask.

### Step 2 - install dependencies
In order to run the server you'll need to install express.js and it's dependencies. In order to do this, open up a 
terminal and navigate to your project folder (for example `cd ~/Projects/looklive-server`). When you've done this, type
this command to run the instal:

```
npm install
```

That should get you setup.

### Step 3 - running the server
To run the server, stay at the 'root' of your project folder and type:

```
npm start
```

That will get the server to run on port 3000. If you go to [http://localhost:3000](http://localhost:3000) in your browser
you should see an overview page.

## The api

This project comes with a simple API. All you need to know for now is that there's three endpoints:

* `/api/feed/` <- returns a feed of appearances
* `/api/appearance/:uuid` <- returns a single appearance, more detailed than in the feed. Replace `:uuid` with the 
appearance id.
* `/api/product/:uuid` <- returns a single product, including similar and bargain products. Replace `:uuid` with the 
product id.

The API returns JSON (for now).

# Performance

### Start performance
![start](/readmeImg/Home_0start.png)

### Semantic & efficient HTML 
* Unnecessary HTML elements deleted
* Unnecessary google font's deleted

Results:
![start](/readmeImg/Home_1afterHtml.png)
``` 
 Loading    - 8ms     
 Scripting  - 33ms    
 Rendering  + 33ms    
 Painting   - 14ms

 Total      - 22ms
```

### Optimized CSS
* Flexbox instead of float
* Minimized selectors
* Header img minimized to 90kb
* Img srcset added to the header img
* Icons changes to SVG

Results:
![start](/readmeImg/Home_2afterCss.png)
```
Loading      - 11ms
Scripting    + 1ms
Rendering    - 38ms
Painting     + 1ms

Total        - 47ms
```

### jQuery
* jQuery replaced by Javascript Vanilla 

Results:
![start](/readmeImg/Home_4afterJquery.png)
```
Loading      - 5ms
Scripting    - 100ms
Rendering    + 3ms
Painting     - 2ms
```

### Optimize CSS animation with the will-change property

I added some different animations like this:

```
.shows{
    animation: shows 2s cubic-bezier(.58,1.84,.83,.67);
}

@keyframes shows {
    0% {
        transform: translateY(-100vw);
    }
    60% {
        transform: translateY(0);
    }
}

```

*Tested on an 3G network*

Results:
![transforms](/readmeImg/nowillchange.png)

I used the ``` will-change ``` property

```
.shows{
    animation: shows 2s cubic-bezier(.58,1.84,.83,.67);
    will-change: transform;
}

@keyframes shows {
    0% {
        transform: translateY(-100vw);
    }
    60% {
        transform: translateY(0);
    }
}
```
*Tested on an 3G network*

Results:

![will-change](/readmeImg/willchange.png)
```
Loading      - 3ms
Scripting    - 14ms
Rendering    - 9ms
Painting     - 7ms
```


###Conclusion

```
Semantic & efficient HTML                                - 22ms
Optimized css                                            - 47ms
jQuery replaced by Javascript Vanilla                    - 104ms
Optimize CSS animation with the will-change property     - 33ms

Total win                                                - 206ms  
```

### Service Worker implemented

[looklive online](http://188.166.4.224:3000/)

*Tested on an 4G network*

Results without Service Worker:
![without service worker](/readmeImg/zonderSW.png)

Results with Service Worker for the first time:
![Results with Service Worker for the first time](/readmeImg/metSW1.png)

Results with Service Worker for the second time (Service Worker saved html, css, app.js, header imgage, logo)
![Results with Service Worker for the second time] (/readmeImg/metSW2.png)

### Conclusion

```
Without Service Worker load time:                                       12s
With Service Worker for the first time(nothing saved) load time:        16s
With Service Worker for the second time(everything saved) load time:    2.63s!!
```




















