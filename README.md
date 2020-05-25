# jquery.toggleMoreLess.js

- include jquery
- include jquery.toggleMoreLess.js



### Your HTML

- add Selector ".toggleHeight"
- optional add data-attribute "data-toggleatheight"
- add Buttons

```html

<!-- add Selector .toggleHeight and optional data-toggleatheight -->
<div class="some-container-classes toggleHeight" data-toggleatheight="200">

  <!-- add botton(s) -->
  <button class="btn btn-showmoreless hidden"><span class="showMoreTxt">Lesen Sie mehr</span><span class="showLessTxt">Weniger anzeigen</span></button>

  <!-- Your Content as usual -->
  <h2>Your content here</h2>
  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>

</div>

```



### Your JS

```javascript
(function($){
    // use $ here safely

    $(function() {
    	console.log( "document ready!" );
    	
    	// use defaulte and/or data-attr	
    	$('.toggleHeight').toggleMoreLess();
      
      // OR
    	
    	// set options - Note: toggleAtHeight will be overwritten with data-attr if set
    	$('.toggleHeight').toggleMoreLess({
    	    duration:        500,       // Dauer der Animation, standard: 500
          easing:          "swing",    // Easing-Effekt, standard:  "swing"
          toggleAtHeight:  400	     // Höhe in px, standard 400, can be overwritten with data-attr
    	});
   
    });
})(jQuery);
```



### Your CSS

```css
/* ================================ 
   mandatory styles
   ================================ */ 
.toggleHeight {
	overflow: hidden;
	position: relative;
}
.btn-showmoreless {
	position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 9; /* change to your needs */ 
}
.btn-showmoreless.hidden {
	display: none;
}
.toggleHeight .btn-showmoreless .showLessTxt {
    display: none;
}
.toggleHeight .btn-showmoreless .showMoreTxt {
	display: block;
}
.toggleHeight.is--expanded .btn-showmoreless .showMoreTxt {
    display: none;
}
.toggleHeight.is--expanded .btn-showmoreless .showLessTxt {
    display: block;
}

/* ================================ 
   styles to be adapted
   ================================ */ 

.some-container-classes {
	padding: 10px;
	border: 1px solid #000;
}
.btn-showmoreless {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9;
    
    background: transparent;
    background: linear-gradient(to bottom,  rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%); 
    
    color: red;
    font-size: 18px;
    text-align: center;
    border: 0;

    padding-top: 45px;
    padding-bottom: 13px;
    outline: 0;
}

.btn-showmoreless .showMoreTxt:after {
	content: " \2193";
}
.btn-showmoreless .showLessTxt:after {
	content: " \2191";
}


```

