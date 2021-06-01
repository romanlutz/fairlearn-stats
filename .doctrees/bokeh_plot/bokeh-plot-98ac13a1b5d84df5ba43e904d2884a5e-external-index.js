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
    
      
      
    
      var element = document.getElementById("f3a3424e-ec4d-41c6-a35c-4c7981eb9a6c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f3a3424e-ec4d-41c6-a35c-4c7981eb9a6c' but no matching script tag was found.")
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
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.3.2.min.js": "XypntL49z55iwGVUW4qsEu83zKL3XEcz0MjuGOQ9SlaaQ68X/g+k1FcioZi7oQAc", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.2.min.js": "bEsM86IHGDTLCS0Zod8a8WM6Y4+lafAL/eSiyQcuPzinmWNgNO2/olUF0Z2Dkn5i", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.2.min.js": "TX0gSQTdXTTeScqxj6PVQxTiRW8DOoGVwinyi1D3kxv7wuxQ02XkOxv0xwiypcAH"};
    
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
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.3.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.2.min.js"];
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
                    
                  var docs_json = '{"71ff77a6-5d4e-4b78-a7c9-387077c89e03":{"defs":[],"roots":{"references":[{"attributes":{"fields":["unique"]},"id":"1465","type":"Stack"},{"attributes":{"axis":{"id":"1445"},"dimension":1,"ticker":null},"id":"1448","type":"Grid"},{"attributes":{},"id":"1480","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1485"},"glyph":{"id":"1487"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1488"},"view":{"id":"1490"}},"id":"1489","type":"GlyphRenderer"},{"attributes":{},"id":"1446","type":"BasicTicker"},{"attributes":{},"id":"1479","type":"AllLabels"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1471"}]},"id":"1484","type":"LegendItem"},{"attributes":{"below":[{"id":"1441"}],"center":[{"id":"1444"},{"id":"1448"},{"id":"1483"}],"left":[{"id":"1445"}],"renderers":[{"id":"1471"},{"id":"1489"}],"title":{"id":"1431"},"toolbar":{"id":"1456"},"width":900,"x_range":{"id":"1433"},"x_scale":{"id":"1437"},"y_range":{"id":"1435"},"y_scale":{"id":"1439"}},"id":"1430","subtype":"Figure","type":"Plot"},{"attributes":{"bottom":{"expr":{"id":"1465"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1466"}},"x":{"field":"indices"}},"id":"1487","type":"VBar"},{"attributes":{},"id":"1500","type":"UnionRenderers"},{"attributes":{"items":[{"id":"1484"},{"id":"1503"}]},"id":"1483","type":"Legend"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1455","type":"BoxAnnotation"},{"attributes":{"active_multi":null,"tools":[{"id":"1449"},{"id":"1450"},{"id":"1451"},{"id":"1452"},{"id":"1453"},{"id":"1454"}]},"id":"1456","type":"Toolbar"},{"attributes":{"bottom":{"expr":{"id":"1465"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1466"}},"x":{"field":"indices"}},"id":"1488","type":"VBar"},{"attributes":{},"id":"1475","type":"BasicTickFormatter"},{"attributes":{},"id":"1478","type":"BasicTickFormatter"},{"attributes":{},"id":"1449","type":"PanTool"},{"attributes":{},"id":"1476","type":"AllLabels"},{"attributes":{},"id":"1435","type":"DataRange1d"},{"attributes":{"source":{"id":"1485"}},"id":"1490","type":"CDSView"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]},"id":"1504","type":"FixedTicker"},{"attributes":{},"id":"1450","type":"WheelZoomTool"},{"attributes":{},"id":"1437","type":"LinearScale"},{"attributes":{"bottom":{"expr":{"id":"1463"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1464"}},"x":{"field":"indices"}},"id":"1470","type":"VBar"},{"attributes":{"overlay":{"id":"1455"}},"id":"1451","type":"BoxZoomTool"},{"attributes":{},"id":"1439","type":"LinearScale"},{"attributes":{"bottom":{"expr":{"id":"1463"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1464"}},"x":{"field":"indices"}},"id":"1469","type":"VBar"},{"attributes":{"data":{"duplicate":[358,120,128,11,18,9,25,6,6,11,4,3,5,4,12,8,5,7,4,7,5,5,4,2,1,1,2,2,4,6,1,5,2,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],"unique":[274,221,127,44,36,40,13,25,22,15,22,20,16,16,8,12,13,10,12,6,8,5,6,8,8,8,7,7,5,3,7,2,5,5]},"selected":{"id":"1501"},"selection_policy":{"id":"1500"}},"id":"1485","type":"ColumnDataSource"},{"attributes":{},"id":"1452","type":"SaveTool"},{"attributes":{},"id":"1481","type":"Selection"},{"attributes":{},"id":"1453","type":"ResetTool"},{"attributes":{"source":{"id":"1467"}},"id":"1472","type":"CDSView"},{"attributes":{},"id":"1501","type":"Selection"},{"attributes":{"data":{"duplicate":[358,120,128,11,18,9,25,6,6,11,4,3,5,4,12,8,5,7,4,7,5,5,4,2,1,1,2,2,4,6,1,5,2,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],"unique":[274,221,127,44,36,40,13,25,22,15,22,20,16,16,8,12,13,10,12,6,8,5,6,8,8,8,7,7,5,3,7,2,5,5]},"selected":{"id":"1481"},"selection_policy":{"id":"1480"}},"id":"1467","type":"ColumnDataSource"},{"attributes":{},"id":"1454","type":"HelpTool"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1489"}]},"id":"1503","type":"LegendItem"},{"attributes":{"data_source":{"id":"1467"},"glyph":{"id":"1469"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1470"},"view":{"id":"1472"}},"id":"1471","type":"GlyphRenderer"},{"attributes":{"fields":["unique","duplicate"]},"id":"1466","type":"Stack"},{"attributes":{"formatter":{"id":"1478"},"major_label_orientation":0.75,"major_label_overrides":{"0":"github.com","1":"Google","10":"mail.google.com","11":"kdnuggets.com","12":"classroom.udacity.com","13":"docs.microsoft.com","14":"Bing","15":"gitter.im","16":"pypi.org","17":"linkedin.com","18":"t.co","19":"DuckDuckGo","2":"fairlearn.org","20":"up-for-grabs.net","21":"engineering.linkedin.com","22":"ai.googleblog.com","23":"towardsdatascience.com","24":"fairlearn.github.io","25":"medium.com","26":"microsoft.com","27":"anaconda.com","28":"madewithml.com","29":"aiforpeople.org","3":"paperswithcode.com","30":"azure.microsoft.com","31":"com.google.android.gm","32":"goodfirstissues.com","33":"infoworld.com","4":"mybuild.microsoft.com","5":"finance.yahoo.com","6":"statics.teams.cdn.office.net","7":"sparkaisummit.com","8":"event.on24.com","9":"opendatascience.com"},"major_label_policy":{"id":"1479"},"ticker":{"id":"1504"}},"id":"1441","type":"LinearAxis"},{"attributes":{"fields":["unique"]},"id":"1464","type":"Stack"},{"attributes":{"formatter":{"id":"1475"},"major_label_policy":{"id":"1476"},"ticker":{"id":"1446"}},"id":"1445","type":"LinearAxis"},{"attributes":{"text":"Top referrers"},"id":"1431","type":"Title"},{"attributes":{"fields":[]},"id":"1463","type":"Stack"},{"attributes":{"axis":{"id":"1441"},"ticker":null},"id":"1444","type":"Grid"},{"attributes":{},"id":"1433","type":"DataRange1d"}],"root_ids":["1430"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"71ff77a6-5d4e-4b78-a7c9-387077c89e03","root_ids":["1430"],"roots":{"1430":"f3a3424e-ec4d-41c6-a35c-4c7981eb9a6c"}}];
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