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
    
      
      
    
      var element = document.getElementById("ca02331f-b4a4-4991-b52b-3fa876d2169e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ca02331f-b4a4-4991-b52b-3fa876d2169e' but no matching script tag was found.")
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
                    
                  var docs_json = '{"3f7d2a7e-0bee-4db5-85a3-b130d13d8389":{"defs":[],"roots":{"references":[{"attributes":{"source":{"id":"1427"}},"id":"1432","type":"CDSView"},{"attributes":{},"id":"1399","type":"LinearScale"},{"attributes":{"bottom":{"expr":{"id":"1423"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1424"}},"x":{"field":"indices"}},"id":"1430","type":"VBar"},{"attributes":{"fields":["unique","duplicate"]},"id":"1426","type":"Stack"},{"attributes":{},"id":"1414","type":"HelpTool"},{"attributes":{"text":"Top referrers"},"id":"1391","type":"Title"},{"attributes":{},"id":"1413","type":"ResetTool"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]},"id":"1464","type":"FixedTicker"},{"attributes":{},"id":"1395","type":"DataRange1d"},{"attributes":{"fields":[]},"id":"1423","type":"Stack"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1449"}]},"id":"1463","type":"LegendItem"},{"attributes":{"bottom":{"expr":{"id":"1425"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1426"}},"x":{"field":"indices"}},"id":"1447","type":"VBar"},{"attributes":{"fields":["unique"]},"id":"1425","type":"Stack"},{"attributes":{"formatter":{"id":"1438"},"major_label_orientation":0.75,"major_label_overrides":{"0":"Google","1":"github.com","10":"mail.google.com","11":"t.co","12":"classroom.udacity.com","13":"kdnuggets.com","14":"DuckDuckGo","15":"up-for-grabs.net","16":"gitter.im","17":"paperswithcode.com","18":"microsoft.com","19":"anaconda.com","2":"fairlearn.org","20":"engineering.linkedin.com","21":"ai.googleblog.com","22":"linkedin.com","23":"fairlearn.github.io","24":"Bing","25":"medium.com","26":"statics.teams.cdn.office.net","27":"madewithml.com","28":"azure.microsoft.com","29":"com.google.android.gm","3":"mybuild.microsoft.com","30":"infoworld.com","4":"finance.yahoo.com","5":"pypi.org","6":"docs.microsoft.com","7":"sparkaisummit.com","8":"event.on24.com","9":"opendatascience.com"},"major_label_policy":{"id":"1437"},"ticker":{"id":"1464"}},"id":"1401","type":"LinearAxis"},{"attributes":{"below":[{"id":"1401"}],"center":[{"id":"1404"},{"id":"1408"},{"id":"1443"}],"left":[{"id":"1405"}],"renderers":[{"id":"1431"},{"id":"1449"}],"title":{"id":"1391"},"toolbar":{"id":"1416"},"width":900,"x_range":{"id":"1393"},"x_scale":{"id":"1397"},"y_range":{"id":"1395"},"y_scale":{"id":"1399"}},"id":"1390","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1406","type":"BasicTicker"},{"attributes":{"fields":["unique"]},"id":"1424","type":"Stack"},{"attributes":{"data_source":{"id":"1427"},"glyph":{"id":"1429"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1430"},"view":{"id":"1432"}},"id":"1431","type":"GlyphRenderer"},{"attributes":{"bottom":{"expr":{"id":"1423"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1424"}},"x":{"field":"indices"}},"id":"1429","type":"VBar"},{"attributes":{"data":{"duplicate":[116,121,35,18,9,23,12,6,6,11,4,4,5,1,7,5,6,5,1,1,5,4,3,1,1,2,3,4,1,5,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],"unique":[241,75,82,36,40,13,21,25,22,15,22,21,16,15,6,8,5,6,9,9,5,6,7,8,8,7,6,5,7,2,5]},"selected":{"id":"1441"},"selection_policy":{"id":"1442"}},"id":"1427","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"1401"},"ticker":null},"id":"1404","type":"Grid"},{"attributes":{},"id":"1461","type":"Selection"},{"attributes":{"axis":{"id":"1405"},"dimension":1,"ticker":null},"id":"1408","type":"Grid"},{"attributes":{"source":{"id":"1445"}},"id":"1450","type":"CDSView"},{"attributes":{"formatter":{"id":"1435"},"major_label_policy":{"id":"1434"},"ticker":{"id":"1406"}},"id":"1405","type":"LinearAxis"},{"attributes":{"data":{"duplicate":[116,121,35,18,9,23,12,6,6,11,4,4,5,1,7,5,6,5,1,1,5,4,3,1,1,2,3,4,1,5,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],"unique":[241,75,82,36,40,13,21,25,22,15,22,21,16,15,6,8,5,6,9,9,5,6,7,8,8,7,6,5,7,2,5]},"selected":{"id":"1461"},"selection_policy":{"id":"1462"}},"id":"1445","type":"ColumnDataSource"},{"attributes":{},"id":"1442","type":"UnionRenderers"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1431"}]},"id":"1444","type":"LegendItem"},{"attributes":{},"id":"1397","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1415","type":"BoxAnnotation"},{"attributes":{"active_multi":null,"tools":[{"id":"1409"},{"id":"1410"},{"id":"1411"},{"id":"1412"},{"id":"1413"},{"id":"1414"}]},"id":"1416","type":"Toolbar"},{"attributes":{},"id":"1462","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1445"},"glyph":{"id":"1447"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1448"},"view":{"id":"1450"}},"id":"1449","type":"GlyphRenderer"},{"attributes":{"bottom":{"expr":{"id":"1425"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1426"}},"x":{"field":"indices"}},"id":"1448","type":"VBar"},{"attributes":{},"id":"1441","type":"Selection"},{"attributes":{},"id":"1409","type":"PanTool"},{"attributes":{},"id":"1438","type":"BasicTickFormatter"},{"attributes":{},"id":"1410","type":"WheelZoomTool"},{"attributes":{},"id":"1437","type":"AllLabels"},{"attributes":{},"id":"1435","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"1415"}},"id":"1411","type":"BoxZoomTool"},{"attributes":{},"id":"1434","type":"AllLabels"},{"attributes":{},"id":"1412","type":"SaveTool"},{"attributes":{"items":[{"id":"1444"},{"id":"1463"}]},"id":"1443","type":"Legend"},{"attributes":{},"id":"1393","type":"DataRange1d"}],"root_ids":["1390"]},"title":"Bokeh Application","version":"2.3.1"}}';
                  var render_items = [{"docid":"3f7d2a7e-0bee-4db5-85a3-b130d13d8389","root_ids":["1390"],"roots":{"1390":"ca02331f-b4a4-4991-b52b-3fa876d2169e"}}];
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