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
    
      
      
    
      var element = document.getElementById("27f8b4b8-289f-41e1-bfbc-58276e61cf5f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '27f8b4b8-289f-41e1-bfbc-58276e61cf5f' but no matching script tag was found.")
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
                    
                  var docs_json = '{"4fef266f-d8f4-416d-843c-1fe9e52a159a":{"defs":[],"roots":{"references":[{"attributes":{"axis":{"id":"1400"},"dimension":1,"ticker":null},"id":"1403","type":"Grid"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1426"}]},"id":"1439","type":"LegendItem"},{"attributes":{},"id":"1432","type":"AllLabels"},{"attributes":{"source":{"id":"1440"}},"id":"1445","type":"CDSView"},{"attributes":{"fields":[]},"id":"1418","type":"Stack"},{"attributes":{},"id":"1434","type":"BasicTickFormatter"},{"attributes":{},"id":"1429","type":"AllLabels"},{"attributes":{},"id":"1455","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1410","type":"BoxAnnotation"},{"attributes":{"active_multi":null,"tools":[{"id":"1404"},{"id":"1405"},{"id":"1406"},{"id":"1407"},{"id":"1408"},{"id":"1409"}]},"id":"1411","type":"Toolbar"},{"attributes":{"bottom":{"expr":{"id":"1418"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1419"}},"x":{"field":"indices"}},"id":"1425","type":"VBar"},{"attributes":{},"id":"1435","type":"Selection"},{"attributes":{},"id":"1404","type":"PanTool"},{"attributes":{"data":{"duplicate":[77,112,29,18,9,7,23,6,6,11,4,4,5,8,8,10,1,7,5,3,8,4,5,4,3,1,0,4,1,5,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],"unique":[238,74,81,36,40,31,10,25,22,15,22,21,16,10,10,6,13,6,8,8,3,6,5,6,7,8,9,5,7,2,5]},"selected":{"id":"1455"},"selection_policy":{"id":"1456"}},"id":"1440","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1422"},"glyph":{"id":"1424"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1425"},"view":{"id":"1427"}},"id":"1426","type":"GlyphRenderer"},{"attributes":{},"id":"1405","type":"WheelZoomTool"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]},"id":"1459","type":"FixedTicker"},{"attributes":{"items":[{"id":"1439"},{"id":"1458"}]},"id":"1438","type":"Legend"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1444"}]},"id":"1458","type":"LegendItem"},{"attributes":{"overlay":{"id":"1410"}},"id":"1406","type":"BoxZoomTool"},{"attributes":{"fields":["unique"]},"id":"1419","type":"Stack"},{"attributes":{"source":{"id":"1422"}},"id":"1427","type":"CDSView"},{"attributes":{},"id":"1456","type":"UnionRenderers"},{"attributes":{"bottom":{"expr":{"id":"1418"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1419"}},"x":{"field":"indices"}},"id":"1424","type":"VBar"},{"attributes":{},"id":"1407","type":"SaveTool"},{"attributes":{},"id":"1392","type":"LinearScale"},{"attributes":{"data":{"duplicate":[77,112,29,18,9,7,23,6,6,11,4,4,5,8,8,10,1,7,5,3,8,4,5,4,3,1,0,4,1,5,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],"unique":[238,74,81,36,40,31,10,25,22,15,22,21,16,10,10,6,13,6,8,8,3,6,5,6,7,8,9,5,7,2,5]},"selected":{"id":"1435"},"selection_policy":{"id":"1436"}},"id":"1422","type":"ColumnDataSource"},{"attributes":{},"id":"1408","type":"ResetTool"},{"attributes":{"fields":["unique","duplicate"]},"id":"1421","type":"Stack"},{"attributes":{"bottom":{"expr":{"id":"1420"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1421"}},"x":{"field":"indices"}},"id":"1442","type":"VBar"},{"attributes":{},"id":"1409","type":"HelpTool"},{"attributes":{},"id":"1436","type":"UnionRenderers"},{"attributes":{"fields":["unique"]},"id":"1420","type":"Stack"},{"attributes":{},"id":"1394","type":"LinearScale"},{"attributes":{"below":[{"id":"1396"}],"center":[{"id":"1399"},{"id":"1403"},{"id":"1438"}],"left":[{"id":"1400"}],"renderers":[{"id":"1426"},{"id":"1444"}],"title":{"id":"1386"},"toolbar":{"id":"1411"},"width":900,"x_range":{"id":"1388"},"x_scale":{"id":"1392"},"y_range":{"id":"1390"},"y_scale":{"id":"1394"}},"id":"1385","subtype":"Figure","type":"Plot"},{"attributes":{"bottom":{"expr":{"id":"1420"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1421"}},"x":{"field":"indices"}},"id":"1443","type":"VBar"},{"attributes":{"formatter":{"id":"1434"},"major_label_orientation":0.75,"major_label_overrides":{"0":"Google","1":"github.com","10":"mail.google.com","11":"t.co","12":"classroom.udacity.com","13":"anaconda.com","14":"paperswithcode.com","15":"medium.com","16":"kdnuggets.com","17":"DuckDuckGo","18":"up-for-grabs.net","19":"Bing","2":"fairlearn.org","20":"gitter.im","21":"statics.teams.cdn.office.net","22":"engineering.linkedin.com","23":"ai.googleblog.com","24":"linkedin.com","25":"fairlearn.github.io","26":"microsoft.com","27":"madewithml.com","28":"azure.microsoft.com","29":"com.google.android.gm","3":"mybuild.microsoft.com","30":"infoworld.com","4":"finance.yahoo.com","5":"docs.microsoft.com","6":"pypi.org","7":"sparkaisummit.com","8":"event.on24.com","9":"opendatascience.com"},"major_label_policy":{"id":"1432"},"ticker":{"id":"1459"}},"id":"1396","type":"LinearAxis"},{"attributes":{},"id":"1388","type":"DataRange1d"},{"attributes":{"data_source":{"id":"1440"},"glyph":{"id":"1442"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1443"},"view":{"id":"1445"}},"id":"1444","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"1431"},"major_label_policy":{"id":"1429"},"ticker":{"id":"1401"}},"id":"1400","type":"LinearAxis"},{"attributes":{"text":"Top referrers"},"id":"1386","type":"Title"},{"attributes":{},"id":"1390","type":"DataRange1d"},{"attributes":{"axis":{"id":"1396"},"ticker":null},"id":"1399","type":"Grid"},{"attributes":{},"id":"1401","type":"BasicTicker"},{"attributes":{},"id":"1431","type":"BasicTickFormatter"}],"root_ids":["1385"]},"title":"Bokeh Application","version":"2.3.1"}}';
                  var render_items = [{"docid":"4fef266f-d8f4-416d-843c-1fe9e52a159a","root_ids":["1385"],"roots":{"1385":"27f8b4b8-289f-41e1-bfbc-58276e61cf5f"}}];
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