(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("ed80d67b-a440-4318-a0b8-c8c8b13753ef");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ed80d67b-a440-4318-a0b8-c8c8b13753ef' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.3.3.min.js": "dM3QQsP+wXdHg42wTqW85BjZQdLNNIXqlPw/BgKoExPmTG7ZLML4EGqLMfqHT6ON", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.3.min.js": "8x57I4YuIfu8XyZfFo0XVr2WAT8EK4rh/uDe3wF7YuW2FNUSNEpJbsPaB1nJ2fz2", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.3.min.js": "3QTqdz9LyAm2i0sG5XTePsHec3UHWwVsrOL68SYRoAXsafvfAyqtQ+h440+qIBhS"};
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.3.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.3.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"de1c283a-41fd-445d-ba53-d054534bc88d":{"defs":[],"roots":{"references":[{"attributes":{"formatter":{"id":"1523"},"major_label_policy":{"id":"1522"},"ticker":{"id":"1491"}},"id":"1490","type":"LinearAxis"},{"attributes":{},"id":"1526","type":"UnionRenderers"},{"attributes":{},"id":"1547","type":"Selection"},{"attributes":{"source":{"id":"1512"}},"id":"1517","type":"CDSView"},{"attributes":{"bottom":{"expr":{"id":"1510"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1511"}},"x":{"field":"indices"}},"id":"1532","type":"VBar"},{"attributes":{"source":{"id":"1530"}},"id":"1535","type":"CDSView"},{"attributes":{},"id":"1527","type":"Selection"},{"attributes":{"fields":["unique"]},"id":"1510","type":"Stack"},{"attributes":{"data":{"duplicate":[101,98,40,18,9,15,6,6,10,4,7,5,5,9,8,2,10,8,6,4,5,4,4,2,1,1,1,2,2,4,4,1,5,2,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],"unique":[169,83,94,36,40,20,25,22,17,22,18,16,16,6,6,11,2,4,5,6,5,6,6,8,9,8,8,7,7,5,5,7,2,5,5]},"selected":{"id":"1547"},"selection_policy":{"id":"1546"}},"id":"1530","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1500","type":"BoxAnnotation"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1516"}]},"id":"1529","type":"LegendItem"},{"attributes":{},"id":"1494","type":"PanTool"},{"attributes":{},"id":"1546","type":"UnionRenderers"},{"attributes":{},"id":"1478","type":"DataRange1d"},{"attributes":{},"id":"1523","type":"BasicTickFormatter"},{"attributes":{},"id":"1495","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"1486"}],"center":[{"id":"1489"},{"id":"1493"},{"id":"1528"}],"left":[{"id":"1490"}],"renderers":[{"id":"1516"},{"id":"1534"}],"title":{"id":"1476"},"toolbar":{"id":"1501"},"width":900,"x_range":{"id":"1478"},"x_scale":{"id":"1482"},"y_range":{"id":"1480"},"y_scale":{"id":"1484"}},"id":"1475","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1520","type":"BasicTickFormatter"},{"attributes":{"fields":["unique"]},"id":"1509","type":"Stack"},{"attributes":{"overlay":{"id":"1500"}},"id":"1496","type":"BoxZoomTool"},{"attributes":{"bottom":{"expr":{"id":"1508"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1509"}},"x":{"field":"indices"}},"id":"1515","type":"VBar"},{"attributes":{},"id":"1480","type":"DataRange1d"},{"attributes":{},"id":"1519","type":"AllLabels"},{"attributes":{},"id":"1497","type":"SaveTool"},{"attributes":{"items":[{"id":"1529"},{"id":"1548"}]},"id":"1528","type":"Legend"},{"attributes":{"text":"Top referrers"},"id":"1476","type":"Title"},{"attributes":{},"id":"1522","type":"AllLabels"},{"attributes":{},"id":"1482","type":"LinearScale"},{"attributes":{},"id":"1498","type":"ResetTool"},{"attributes":{"bottom":{"expr":{"id":"1508"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1509"}},"x":{"field":"indices"}},"id":"1514","type":"VBar"},{"attributes":{"data":{"duplicate":[101,98,40,18,9,15,6,6,10,4,7,5,5,9,8,2,10,8,6,4,5,4,4,2,1,1,1,2,2,4,4,1,5,2,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],"unique":[169,83,94,36,40,20,25,22,17,22,18,16,16,6,6,11,2,4,5,6,5,6,6,8,9,8,8,7,7,5,5,7,2,5,5]},"selected":{"id":"1527"},"selection_policy":{"id":"1526"}},"id":"1512","type":"ColumnDataSource"},{"attributes":{},"id":"1499","type":"HelpTool"},{"attributes":{"fields":[]},"id":"1508","type":"Stack"},{"attributes":{"active_multi":null,"tools":[{"id":"1494"},{"id":"1495"},{"id":"1496"},{"id":"1497"},{"id":"1498"},{"id":"1499"}]},"id":"1501","type":"Toolbar"},{"attributes":{"data_source":{"id":"1512"},"glyph":{"id":"1514"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1515"},"view":{"id":"1517"}},"id":"1516","type":"GlyphRenderer"},{"attributes":{},"id":"1484","type":"LinearScale"},{"attributes":{"axis":{"id":"1490"},"dimension":1,"ticker":null},"id":"1493","type":"Grid"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1534"}]},"id":"1548","type":"LegendItem"},{"attributes":{"formatter":{"id":"1520"},"major_label_orientation":0.75,"major_label_overrides":{"0":"Google","1":"github.com","10":"pypi.org","11":"docs.microsoft.com","12":"classroom.udacity.com","13":"gitter.im","14":"aiforpeople.org","15":"kdnuggets.com","16":"opendatascience.com","17":"linkedin.com","18":"statics.teams.cdn.office.net","19":"DuckDuckGo","2":"fairlearn.org","20":"engineering.linkedin.com","21":"up-for-grabs.net","22":"ai.googleblog.com","23":"towardsdatascience.com","24":"venturebeat.com","25":"fairlearn.github.io","26":"medium.com","27":"anaconda.com","28":"t.co","29":"paperswithcode.com","3":"mybuild.microsoft.com","30":"madewithml.com","31":"azure.microsoft.com","32":"com.google.android.gm","33":"goodfirstissues.com","34":"infoworld.com","4":"finance.yahoo.com","5":"Bing","6":"sparkaisummit.com","7":"event.on24.com","8":"microsoft.com","9":"mail.google.com"},"major_label_policy":{"id":"1519"},"ticker":{"id":"1549"}},"id":"1486","type":"LinearAxis"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]},"id":"1549","type":"FixedTicker"},{"attributes":{"fields":["unique","duplicate"]},"id":"1511","type":"Stack"},{"attributes":{},"id":"1491","type":"BasicTicker"},{"attributes":{"axis":{"id":"1486"},"ticker":null},"id":"1489","type":"Grid"},{"attributes":{"bottom":{"expr":{"id":"1510"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1511"}},"x":{"field":"indices"}},"id":"1533","type":"VBar"},{"attributes":{"data_source":{"id":"1530"},"glyph":{"id":"1532"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1533"},"view":{"id":"1535"}},"id":"1534","type":"GlyphRenderer"}],"root_ids":["1475"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"de1c283a-41fd-445d-ba53-d054534bc88d","root_ids":["1475"],"roots":{"1475":"ed80d67b-a440-4318-a0b8-c8c8b13753ef"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();