(function($){
    $.fn.toggleMoreLess = function(options) {
    
    	// Settings
        var settings = $.extend({
            duration:        500,        // Dauer der Animation
            easing:          "swing",    // Easing-Effekt "swing"
            toggleAtHeight:  400	     // default toggle height, if data-attr not set
        }, options);
        


        $this = $(this);



        // initialisieren
		function init() {
			//console.log( "init!" );
			
			$this.each( function() {
			
				// Elemente
				var	elem =	$(this);
				var button = elem.find(".btn-showmoreless");
				
				// setze data-attribute falls nicht definiert
        		if (typeof elem.data('toggleatheight') == 'undefined' || elem.data('toggleatheight') === "") {
        			elem.data("toggleatheight", settings.toggleAtHeight);
        		}
        		
        		// Button beobachten
        		button.on( "click", function() {
					toggleHeight(elem, button);
				});
			
				update(elem);
			});
		}
		
        
    
        // Die eigentliche Toogle-Funktion
        function toggleHeight(elem, button) {
			
			if(elem.hasClass("is--collapsed")) {
				
				elem.animate({
					height: elem.data("originalheight") + button.outerHeight() + "px"
				},{
					duration: settings.duration,
                	easing: settings.easing,
				});
				elem.addClass("is--expanded").removeClass("is--collapsed");
				
			} else if(elem.hasClass("is--expanded")) {
				
				elem.animate({
					height: elem.data("toggleatheight")
				},{
					duration: settings.duration,
                	easing: settings.easing,
				});
				elem.addClass("is--collapsed").removeClass("is--expanded");
				
			}
		}
		
		
		// Aktualisieren (bei init oder resize)
		function update(elem) {
			//console.log( "update!" );
			
			// Elemente
			var button = elem.find(".btn-showmoreless");
			var toggleAtHeight = elem.data('toggleatheight');
			
			// 1. alles zurücksetzen
			button.addClass("hidden");
			elem.height("auto").removeClass("is--collapsed").removeClass("is--expanded");
			
			// 2. originalheight ermioteln und setzen
			elem.data( "originalheight", elem.prop("scrollHeight") );
			
			// 3. prüfen, ob wir Inhalt toggeln müssen
			if(elem.outerHeight()  > toggleAtHeight) {
				//console.log('set toggleble: ID ' + elem.prop("id"));
				button.removeClass("hidden");
				elem.addClass("is--collapsed");
				elem.height(toggleAtHeight);
			}
					
		}
		
		
		
        // update after resizing is done
        var resizeTimer;
		$(window).on('resize', function(e) {
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(function() {
				// Run code here, resizing has "stopped"
				
				$this.each( function() {
					update($(this));
				});
				
			}, 250);
		});
        
        
        
		// init aufrufen
        init();
        
        
    
        return this;
    };
})(jQuery);


(function(b) {
    window.toggleMoreLessBtn = new function() {
        var e = b(".toggleHeight")
          , f = function(a) {
            a.stopImmediatePropagation();
            a.preventDefault();
            var c = b(this);
            a = c.parents(".toggleHeight");
            a.hasClass("is--collapsed") ? (a.removeClass("is--collapsed").addClass("is--expanded"),
            a.animate({
                height: a.data("original-height") + c.outerHeight() + "px"
            }, {
                duration: 500,
                easing: "swing",
                complete: function() {
                    b(window).trigger("cp.debouncedResize")
                }
            })) : (a.addClass("is--collapsed").removeClass("is--expanded"),
            a.animate({
                height: a.data("toggle-at-height") + c.outerHeight() - 9 + "px"
            }, {
                duration: 500,
                complete: function() {
                    b(window).trigger("cp.debouncedResize")
                }
            }, "swing"),
            c = b(".cpHeader.isSticky"),
            c = c.length ? c.outerHeight() : 0,
            b("body").animate({
                scrollTop: a.offset().top - c
            }, 100))
        }
          , a = function(a) {
            a ? window.toggleMoreLessBtn.update(a, a.find("button.btn-showmoreless")) : (e = b(".toggleHeight"),
            e.each(function() {
                window.toggleMoreLessBtn.update(b(this), b(this).find("button.btn-showmoreless"))
            }))
        };
        this.revertToggleContainer = function(a) {
            a.height("auto").removeClass("is--collapsed").removeClass("is--expanded").removeClass("force--expanded").data("original-height", a.prop("scrollHeight"));
            a.find("button.btn-showmoreless").addClass("hidden")
        }
        ;
        this.update = function(a, c, e) {
            e = a.data("toggle-at-height");
            !1 === c && (c = a.find("button.btn-showmoreless"));
            a.data("original-height", a.prop("scrollHeight"));
            a.outerHeight() > e && (c.removeClass("hidden"),
            a.off("click", "button.btn-showmoreless", f).on("click", "button.btn-showmoreless", f),
            !1 === a.hasClass("force--expanded") ? a.height(e).addClass("is--collapsed") : a.height(a.data("original-height") + c.outerHeight() - 1).removeClass("is--collapsed").addClass("is--expanded"));
            b(window).trigger("cp.debouncedResize")
        }
        ;
        this.updateInnerHeight = function(a, b) {
            a.data("original-height", a.find(".boxContentWrapper").innerHeight());
            if (a.hasClass("is--expanded")) {
                if (void 0 === b || "undefined" === b)
                    b = a.find("button.btn-showmoreless");
                a.height(a.data("original-height") + b.outerHeight() - 1)
            } else
                a.hasClass("is--expanded") || a.hasClass("is--collapsed") || this.update(a, b)
        }
        ;
        this.setMoreLess = function(b) {
            a(b)
        }
        ;
        this.init = function(d) {
            "update" === d ? (e = b(".toggleHeight"),
            this.revertToggleContainer(e),
            e.each(function() {
                window.toggleMoreLessBtn.update(b(this), b(this).find("button.btn-showmoreless"))
            })) : b(window).load(function() {
                a()
            })
        }
        ;
        this.onResize = function() {
            this.init("update")
        }
    }
    ;
    window.ws30App && window.ws30App.addComponent && window.ws30App.addComponent(window.toggleMoreLessBtn)
}
)(jQuery);