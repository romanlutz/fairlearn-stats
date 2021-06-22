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
    
      
      
    
      var element = document.getElementById("59e92265-af6f-4fc2-8fe0-d8ec702dabf4");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '59e92265-af6f-4fc2-8fe0-d8ec702dabf4' but no matching script tag was found.")
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
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.3.1.min.js": "YF85VygJKMVnHE+lLv2AM93Vbstr0yo2TbIu5v8se5Rq3UQAUmcuh4aaJwNlpKwa", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.1.min.js": "KKuas3gevv3PvrlkyCMzffFeaMq5we/a2QsP5AUoS3mJ0jmaCL7jirFJN3GoE/lM", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.1.min.js": "MK/uFc3YT18pkvvXRl66tTHjP0/dxoSH2e/eiNMFIguKlun2+WVqaPTWmUy/zvh4"};
    
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
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.3.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.1.min.js"];
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
                    
                  var docs_json = '{"a5b62938-c1ed-4be4-b297-8871ed478ac4":{"defs":[],"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1420","type":"BoxAnnotation"},{"attributes":{"active_multi":null,"tools":[{"id":"1414"},{"id":"1415"},{"id":"1416"},{"id":"1417"},{"id":"1418"},{"id":"1419"}]},"id":"1421","type":"Toolbar"},{"attributes":{},"id":"1414","type":"PanTool"},{"attributes":{"data":{"duplicate":[113,98,116,18,9,13,6,23,6,17,11,4,4,8,5,7,7,5,2,1,5,4,3,2,1,2,3,2,4,6,1,5,2,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],"unique":[245,94,71,36,40,19,25,7,22,11,15,22,21,13,16,10,6,8,10,9,5,6,7,8,8,7,6,7,5,3,7,2,5,5]},"selected":{"id":"1466"},"selection_policy":{"id":"1467"}},"id":"1450","type":"ColumnDataSource"},{"attributes":{"items":[{"id":"1449"},{"id":"1468"}]},"id":"1448","type":"Legend"},{"attributes":{},"id":"1415","type":"WheelZoomTool"},{"attributes":{},"id":"1440","type":"AllLabels"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1436"}]},"id":"1449","type":"LegendItem"},{"attributes":{},"id":"1444","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"1450"},"glyph":{"id":"1452"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1453"},"view":{"id":"1455"}},"id":"1454","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"1420"}},"id":"1416","type":"BoxZoomTool"},{"attributes":{"fields":["unique"]},"id":"1430","type":"Stack"},{"attributes":{},"id":"1398","type":"DataRange1d"},{"attributes":{},"id":"1417","type":"SaveTool"},{"attributes":{},"id":"1402","type":"LinearScale"},{"attributes":{},"id":"1418","type":"ResetTool"},{"attributes":{"source":{"id":"1450"}},"id":"1455","type":"CDSView"},{"attributes":{},"id":"1441","type":"BasicTickFormatter"},{"attributes":{"fields":["unique","duplicate"]},"id":"1431","type":"Stack"},{"attributes":{"data_source":{"id":"1432"},"glyph":{"id":"1434"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1435"},"view":{"id":"1437"}},"id":"1436","type":"GlyphRenderer"},{"attributes":{},"id":"1419","type":"HelpTool"},{"attributes":{},"id":"1404","type":"LinearScale"},{"attributes":{"formatter":{"id":"1441"},"major_label_orientation":0.75,"major_label_overrides":{"0":"Google","1":"fairlearn.org","10":"opendatascience.com","11":"mail.google.com","12":"t.co","13":"Bing","14":"classroom.udacity.com","15":"paperswithcode.com","16":"DuckDuckGo","17":"up-for-grabs.net","18":"kdnuggets.com","19":"medium.com","2":"github.com","20":"engineering.linkedin.com","21":"ai.googleblog.com","22":"linkedin.com","23":"towardsdatascience.com","24":"fairlearn.github.io","25":"microsoft.com","26":"pypi.org","27":"anaconda.com","28":"madewithml.com","29":"aiforpeople.org","3":"mybuild.microsoft.com","30":"azure.microsoft.com","31":"com.google.android.gm","32":"goodfirstissues.com","33":"infoworld.com","4":"finance.yahoo.com","5":"docs.microsoft.com","6":"sparkaisummit.com","7":"gitter.im","8":"event.on24.com","9":"statics.teams.cdn.office.net"},"major_label_policy":{"id":"1440"},"ticker":{"id":"1469"}},"id":"1406","type":"LinearAxis"},{"attributes":{"bottom":{"expr":{"id":"1428"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1429"}},"x":{"field":"indices"}},"id":"1434","type":"VBar"},{"attributes":{},"id":"1411","type":"BasicTicker"},{"attributes":{"fields":[]},"id":"1428","type":"Stack"},{"attributes":{"fields":["unique"]},"id":"1429","type":"Stack"},{"attributes":{"axis":{"id":"1406"},"ticker":null},"id":"1409","type":"Grid"},{"attributes":{"bottom":{"expr":{"id":"1430"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1431"}},"x":{"field":"indices"}},"id":"1452","type":"VBar"},{"attributes":{"data":{"duplicate":[113,98,116,18,9,13,6,23,6,17,11,4,4,8,5,7,7,5,2,1,5,4,3,2,1,2,3,2,4,6,1,5,2,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],"unique":[245,94,71,36,40,19,25,7,22,11,15,22,21,13,16,10,6,8,10,9,5,6,7,8,8,7,6,7,5,3,7,2,5,5]},"selected":{"id":"1446"},"selection_policy":{"id":"1447"}},"id":"1432","type":"ColumnDataSource"},{"attributes":{},"id":"1467","type":"UnionRenderers"},{"attributes":{"axis":{"id":"1410"},"dimension":1,"ticker":null},"id":"1413","type":"Grid"},{"attributes":{"formatter":{"id":"1444"},"major_label_policy":{"id":"1443"},"ticker":{"id":"1411"}},"id":"1410","type":"LinearAxis"},{"attributes":{"bottom":{"expr":{"id":"1428"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1429"}},"x":{"field":"indices"}},"id":"1435","type":"VBar"},{"attributes":{},"id":"1447","type":"UnionRenderers"},{"attributes":{"source":{"id":"1432"}},"id":"1437","type":"CDSView"},{"attributes":{},"id":"1466","type":"Selection"},{"attributes":{},"id":"1443","type":"AllLabels"},{"attributes":{},"id":"1400","type":"DataRange1d"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1454"}]},"id":"1468","type":"LegendItem"},{"attributes":{},"id":"1446","type":"Selection"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]},"id":"1469","type":"FixedTicker"},{"attributes":{"below":[{"id":"1406"}],"center":[{"id":"1409"},{"id":"1413"},{"id":"1448"}],"left":[{"id":"1410"}],"renderers":[{"id":"1436"},{"id":"1454"}],"title":{"id":"1396"},"toolbar":{"id":"1421"},"width":900,"x_range":{"id":"1398"},"x_scale":{"id":"1402"},"y_range":{"id":"1400"},"y_scale":{"id":"1404"}},"id":"1395","subtype":"Figure","type":"Plot"},{"attributes":{"bottom":{"expr":{"id":"1430"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1431"}},"x":{"field":"indices"}},"id":"1453","type":"VBar"},{"attributes":{"text":"Top referrers"},"id":"1396","type":"Title"}],"root_ids":["1395"]},"title":"Bokeh Application","version":"2.3.1"}}';
                  var render_items = [{"docid":"a5b62938-c1ed-4be4-b297-8871ed478ac4","root_ids":["1395"],"roots":{"1395":"59e92265-af6f-4fc2-8fe0-d8ec702dabf4"}}];
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