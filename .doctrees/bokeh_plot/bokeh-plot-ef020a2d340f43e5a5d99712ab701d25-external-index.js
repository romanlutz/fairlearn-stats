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
    
      
      
    
      var element = document.getElementById("f071265b-3caa-4744-b813-caa369e340f8");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f071265b-3caa-4744-b813-caa369e340f8' but no matching script tag was found.")
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
                    
                  var docs_json = '{"9c17bf05-8446-4c15-9d24-a3980f598a4b":{"defs":[],"roots":{"references":[{"attributes":{"active_multi":null,"tools":[{"id":"1464"},{"id":"1465"},{"id":"1466"},{"id":"1467"},{"id":"1468"},{"id":"1469"}]},"id":"1471","type":"Toolbar"},{"attributes":{},"id":"1464","type":"PanTool"},{"attributes":{},"id":"1491","type":"BasicTickFormatter"},{"attributes":{"fields":["unique"]},"id":"1479","type":"Stack"},{"attributes":{"data_source":{"id":"1482"},"glyph":{"id":"1484"},"hover_glyph":null,"muted_glyph":null,"name":"unique","nonselection_glyph":{"id":"1485"},"view":{"id":"1487"}},"id":"1486","type":"GlyphRenderer"},{"attributes":{"bottom":{"expr":{"id":"1480"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1481"}},"x":{"field":"indices"}},"id":"1502","type":"VBar"},{"attributes":{},"id":"1465","type":"WheelZoomTool"},{"attributes":{"fields":["unique","duplicate"]},"id":"1481","type":"Stack"},{"attributes":{"overlay":{"id":"1470"}},"id":"1466","type":"BoxZoomTool"},{"attributes":{},"id":"1495","type":"UnionRenderers"},{"attributes":{},"id":"1467","type":"SaveTool"},{"attributes":{},"id":"1468","type":"ResetTool"},{"attributes":{"items":[{"id":"1499"},{"id":"1518"}]},"id":"1498","type":"Legend"},{"attributes":{},"id":"1492","type":"AllLabels"},{"attributes":{},"id":"1450","type":"DataRange1d"},{"attributes":{"label":{"value":"unique"},"renderers":[{"id":"1486"}]},"id":"1499","type":"LegendItem"},{"attributes":{},"id":"1469","type":"HelpTool"},{"attributes":{},"id":"1489","type":"AllLabels"},{"attributes":{"fields":[]},"id":"1478","type":"Stack"},{"attributes":{"below":[{"id":"1456"}],"center":[{"id":"1459"},{"id":"1463"},{"id":"1498"}],"left":[{"id":"1460"}],"renderers":[{"id":"1486"},{"id":"1504"}],"title":{"id":"1446"},"toolbar":{"id":"1471"},"width":900,"x_range":{"id":"1448"},"x_scale":{"id":"1452"},"y_range":{"id":"1450"},"y_scale":{"id":"1454"}},"id":"1445","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"duplicate":[62,126,85,18,9,9,6,20,6,4,5,0,13,11,6,1,9,5,5,7,10,5,4,1,2,1,1,2,4,6,1,5,2,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],"unique":[137,70,99,36,40,29,25,11,22,22,16,20,6,7,11,16,6,9,8,6,2,5,6,9,8,8,8,7,5,3,7,2,5,5]},"selected":{"id":"1516"},"selection_policy":{"id":"1515"}},"id":"1500","type":"ColumnDataSource"},{"attributes":{},"id":"1515","type":"UnionRenderers"},{"attributes":{},"id":"1452","type":"LinearScale"},{"attributes":{"label":{"value":"duplicate"},"renderers":[{"id":"1504"}]},"id":"1518","type":"LegendItem"},{"attributes":{},"id":"1496","type":"Selection"},{"attributes":{"bottom":{"expr":{"id":"1478"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1479"}},"x":{"field":"indices"}},"id":"1484","type":"VBar"},{"attributes":{"ticks":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]},"id":"1519","type":"FixedTicker"},{"attributes":{},"id":"1454","type":"LinearScale"},{"attributes":{},"id":"1516","type":"Selection"},{"attributes":{"text":"Top referrers"},"id":"1446","type":"Title"},{"attributes":{},"id":"1448","type":"DataRange1d"},{"attributes":{"bottom":{"expr":{"id":"1480"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#718dbf"},"line_alpha":{"value":0.1},"line_color":{"value":"#718dbf"},"line_width":{"value":7},"top":{"expr":{"id":"1481"}},"x":{"field":"indices"}},"id":"1503","type":"VBar"},{"attributes":{"fields":["unique"]},"id":"1480","type":"Stack"},{"attributes":{"formatter":{"id":"1494"},"major_label_orientation":0.75,"major_label_overrides":{"0":"Google","1":"github.com","10":"classroom.udacity.com","11":"t.co","12":"pypi.org","13":"up-for-grabs.net","14":"microsoft.com","15":"kdnuggets.com","16":"gitter.im","17":"paperswithcode.com","18":"Bing","19":"DuckDuckGo","2":"fairlearn.org","20":"opendatascience.com","21":"engineering.linkedin.com","22":"ai.googleblog.com","23":"linkedin.com","24":"towardsdatascience.com","25":"fairlearn.github.io","26":"medium.com","27":"anaconda.com","28":"madewithml.com","29":"aiforpeople.org","3":"mybuild.microsoft.com","30":"azure.microsoft.com","31":"com.google.android.gm","32":"goodfirstissues.com","33":"infoworld.com","4":"finance.yahoo.com","5":"docs.microsoft.com","6":"sparkaisummit.com","7":"statics.teams.cdn.office.net","8":"event.on24.com","9":"mail.google.com"},"major_label_policy":{"id":"1492"},"ticker":{"id":"1519"}},"id":"1456","type":"LinearAxis"},{"attributes":{"source":{"id":"1482"}},"id":"1487","type":"CDSView"},{"attributes":{},"id":"1461","type":"BasicTicker"},{"attributes":{"data_source":{"id":"1500"},"glyph":{"id":"1502"},"hover_glyph":null,"muted_glyph":null,"name":"duplicate","nonselection_glyph":{"id":"1503"},"view":{"id":"1505"}},"id":"1504","type":"GlyphRenderer"},{"attributes":{"bottom":{"expr":{"id":"1478"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#e84d60"},"line_alpha":{"value":0.1},"line_color":{"value":"#e84d60"},"line_width":{"value":7},"top":{"expr":{"id":"1479"}},"x":{"field":"indices"}},"id":"1485","type":"VBar"},{"attributes":{"axis":{"id":"1456"},"ticker":null},"id":"1459","type":"Grid"},{"attributes":{"data":{"duplicate":[62,126,85,18,9,9,6,20,6,4,5,0,13,11,6,1,9,5,5,7,10,5,4,1,2,1,1,2,4,6,1,5,2,1],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],"unique":[137,70,99,36,40,29,25,11,22,22,16,20,6,7,11,16,6,9,8,6,2,5,6,9,8,8,8,7,5,3,7,2,5,5]},"selected":{"id":"1496"},"selection_policy":{"id":"1495"}},"id":"1482","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"1460"},"dimension":1,"ticker":null},"id":"1463","type":"Grid"},{"attributes":{"formatter":{"id":"1491"},"major_label_policy":{"id":"1489"},"ticker":{"id":"1461"}},"id":"1460","type":"LinearAxis"},{"attributes":{},"id":"1494","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"1500"}},"id":"1505","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1470","type":"BoxAnnotation"}],"root_ids":["1445"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"9c17bf05-8446-4c15-9d24-a3980f598a4b","root_ids":["1445"],"roots":{"1445":"f071265b-3caa-4744-b813-caa369e340f8"}}];
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