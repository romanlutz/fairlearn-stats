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
    
      
      
    
      var element = document.getElementById("c3cc905e-2e30-4d67-ae5d-770dfcab597e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c3cc905e-2e30-4d67-ae5d-770dfcab597e' but no matching script tag was found.")
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
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.1.1.min.js": "kLr4fYcqcSpbuI95brIH3vnnYCquzzSxHPU6XGQCIkQRGJwhg0StNbj1eegrHs12", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.1.1.min.js": "xIGPmVtaOm+z0BqfSOMn4lOR6ciex448GIKG4eE61LsAvmGj48XcMQZtKcE/UXZe", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.1.1.min.js": "Dc9u1wF/0zApGIWoBbH77iWEHtdmkuYWG839Uzmv8y8yBLXebjO9ZnERsde5Ln/P", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.1.1.min.js": "cT9JaBz7GiRXdENrJLZNSC6eMNF3nh3fa5fTF51Svp+ukxPdwcU5kGXGPBgDCa2j"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
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
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.1.1.min.js"];
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
                    
                  var docs_json = '{&quot;2b4dd87f-f0c0-408a-89d3-40a12811031f&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1271&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;fields&quot;:[]},&quot;id&quot;:&quot;1301&quot;,&quot;type&quot;:&quot;Stack&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;expr&quot;:{&quot;id&quot;:&quot;1301&quot;}},&quot;fill_color&quot;:{&quot;value&quot;:&quot;#e84d60&quot;},&quot;line_color&quot;:{&quot;value&quot;:&quot;#e84d60&quot;},&quot;line_width&quot;:{&quot;value&quot;:7},&quot;top&quot;:{&quot;expr&quot;:{&quot;id&quot;:&quot;1302&quot;}},&quot;x&quot;:{&quot;field&quot;:&quot;indices&quot;}},&quot;id&quot;:&quot;1307&quot;,&quot;type&quot;:&quot;VBar&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;expr&quot;:{&quot;id&quot;:&quot;1303&quot;}},&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;#718dbf&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_color&quot;:{&quot;value&quot;:&quot;#718dbf&quot;},&quot;line_width&quot;:{&quot;value&quot;:7},&quot;top&quot;:{&quot;expr&quot;:{&quot;id&quot;:&quot;1304&quot;}},&quot;x&quot;:{&quot;field&quot;:&quot;indices&quot;}},&quot;id&quot;:&quot;1324&quot;,&quot;type&quot;:&quot;VBar&quot;},{&quot;attributes&quot;:{&quot;fields&quot;:[&quot;unique&quot;,&quot;duplicate&quot;]},&quot;id&quot;:&quot;1304&quot;,&quot;type&quot;:&quot;Stack&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1277&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1318&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;duplicate&quot;:[1,133,5,69,77,38,38,44,180,84,82,69,44,38,85,90,79,97,59,52,44,155,75,76,99,67,41,39,104,62,118,95,135,40,32,54,58,36,62,45,34,45,53,40,44,52,83,35,45,35,44,33,42,124,34,34,43,38,42,39,79,61,19,32,23,66,42,21,20,22,79,47,45,149,47,19,62,52,88,52,43,81,32,34,32,58,63,122,101,51,57],&quot;indices&quot;:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90],&quot;unique&quot;:[12,89,21,49,77,2,5,25,209,95,70,69,25,5,90,102,68,101,64,37,13,71,85,89,115,73,28,25,119,85,130,139,136,30,3,54,51,24,69,45,5,29,38,32,30,11,77,10,25,25,27,14,28,72,6,6,40,18,3,29,90,17,5,40,24,50,56,12,3,15,104,55,55,111,58,5,14,53,69,33,25,28,2,6,5,23,23,31,116,35,48]},&quot;selected&quot;:{&quot;id&quot;:&quot;1317&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;1318&quot;}},&quot;id&quot;:&quot;1305&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;fields&quot;:[&quot;unique&quot;]},&quot;id&quot;:&quot;1302&quot;,&quot;type&quot;:&quot;Stack&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1292&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1315&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1290&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1284&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;1279&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;1282&quot;},{&quot;id&quot;:&quot;1286&quot;},{&quot;id&quot;:&quot;1319&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;1283&quot;}],&quot;plot_width&quot;:900,&quot;renderers&quot;:[{&quot;id&quot;:&quot;1309&quot;},{&quot;id&quot;:&quot;1325&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;1269&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;1294&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;1271&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;1275&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;1273&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;1277&quot;}},&quot;id&quot;:&quot;1268&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;1287&quot;},{&quot;id&quot;:&quot;1288&quot;},{&quot;id&quot;:&quot;1289&quot;},{&quot;id&quot;:&quot;1290&quot;},{&quot;id&quot;:&quot;1291&quot;},{&quot;id&quot;:&quot;1292&quot;}]},&quot;id&quot;:&quot;1294&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;1321&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;1323&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;name&quot;:&quot;duplicate&quot;,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;1324&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;1326&quot;}},&quot;id&quot;:&quot;1325&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;ticks&quot;:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90]},&quot;id&quot;:&quot;1338&quot;,&quot;type&quot;:&quot;FixedTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1288&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;expr&quot;:{&quot;id&quot;:&quot;1301&quot;}},&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;#e84d60&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_color&quot;:{&quot;value&quot;:&quot;#e84d60&quot;},&quot;line_width&quot;:{&quot;value&quot;:7},&quot;top&quot;:{&quot;expr&quot;:{&quot;id&quot;:&quot;1302&quot;}},&quot;x&quot;:{&quot;field&quot;:&quot;indices&quot;}},&quot;id&quot;:&quot;1308&quot;,&quot;type&quot;:&quot;VBar&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;1293&quot;}},&quot;id&quot;:&quot;1289&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;label&quot;:{&quot;value&quot;:&quot;unique&quot;},&quot;renderers&quot;:[{&quot;id&quot;:&quot;1309&quot;}]},&quot;id&quot;:&quot;1320&quot;,&quot;type&quot;:&quot;LegendItem&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;duplicate&quot;:[1,133,5,69,77,38,38,44,180,84,82,69,44,38,85,90,79,97,59,52,44,155,75,76,99,67,41,39,104,62,118,95,135,40,32,54,58,36,62,45,34,45,53,40,44,52,83,35,45,35,44,33,42,124,34,34,43,38,42,39,79,61,19,32,23,66,42,21,20,22,79,47,45,149,47,19,62,52,88,52,43,81,32,34,32,58,63,122,101,51,57],&quot;indices&quot;:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90],&quot;unique&quot;:[12,89,21,49,77,2,5,25,209,95,70,69,25,5,90,102,68,101,64,37,13,71,85,89,115,73,28,25,119,85,130,139,136,30,3,54,51,24,69,45,5,29,38,32,30,11,77,10,25,25,27,14,28,72,6,6,40,18,3,29,90,17,5,40,24,50,56,12,3,15,104,55,55,111,58,5,14,53,69,33,25,28,2,6,5,23,23,31,116,35,48]},&quot;selected&quot;:{&quot;id&quot;:&quot;1335&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;1336&quot;}},&quot;id&quot;:&quot;1321&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1291&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;Clones traffic&quot;},&quot;id&quot;:&quot;1269&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;1321&quot;}},&quot;id&quot;:&quot;1326&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;1293&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1317&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;expr&quot;:{&quot;id&quot;:&quot;1303&quot;}},&quot;fill_color&quot;:{&quot;value&quot;:&quot;#718dbf&quot;},&quot;line_color&quot;:{&quot;value&quot;:&quot;#718dbf&quot;},&quot;line_width&quot;:{&quot;value&quot;:7},&quot;top&quot;:{&quot;expr&quot;:{&quot;id&quot;:&quot;1304&quot;}},&quot;x&quot;:{&quot;field&quot;:&quot;indices&quot;}},&quot;id&quot;:&quot;1323&quot;,&quot;type&quot;:&quot;VBar&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;1313&quot;},&quot;major_label_orientation&quot;:0.75,&quot;major_label_overrides&quot;:{&quot;0&quot;:&quot;2020-05-18 00:00:00&quot;,&quot;1&quot;:&quot;2020-05-19 00:00:00&quot;,&quot;10&quot;:&quot;2020-05-28 00:00:00&quot;,&quot;11&quot;:&quot;2020-05-29 00:00:00&quot;,&quot;12&quot;:&quot;2020-05-30 00:00:00&quot;,&quot;13&quot;:&quot;2020-05-31 00:00:00&quot;,&quot;14&quot;:&quot;2020-06-01 00:00:00&quot;,&quot;15&quot;:&quot;2020-06-02 00:00:00&quot;,&quot;16&quot;:&quot;2020-06-03 00:00:00&quot;,&quot;17&quot;:&quot;2020-06-04 00:00:00&quot;,&quot;18&quot;:&quot;2020-06-05 00:00:00&quot;,&quot;19&quot;:&quot;2020-06-06 00:00:00&quot;,&quot;2&quot;:&quot;2020-05-20 00:00:00&quot;,&quot;20&quot;:&quot;2020-06-07 00:00:00&quot;,&quot;21&quot;:&quot;2020-06-08 00:00:00&quot;,&quot;22&quot;:&quot;2020-06-09 00:00:00&quot;,&quot;23&quot;:&quot;2020-06-10 00:00:00&quot;,&quot;24&quot;:&quot;2020-06-11 00:00:00&quot;,&quot;25&quot;:&quot;2020-06-12 00:00:00&quot;,&quot;26&quot;:&quot;2020-06-13 00:00:00&quot;,&quot;27&quot;:&quot;2020-06-14 00:00:00&quot;,&quot;28&quot;:&quot;2020-06-15 00:00:00&quot;,&quot;29&quot;:&quot;2020-06-16 00:00:00&quot;,&quot;3&quot;:&quot;2020-05-21 00:00:00&quot;,&quot;30&quot;:&quot;2020-06-17 00:00:00&quot;,&quot;31&quot;:&quot;2020-06-18 00:00:00&quot;,&quot;32&quot;:&quot;2020-06-19 00:00:00&quot;,&quot;33&quot;:&quot;2020-06-20 00:00:00&quot;,&quot;34&quot;:&quot;2020-06-21 00:00:00&quot;,&quot;35&quot;:&quot;2020-06-22 00:00:00&quot;,&quot;36&quot;:&quot;2020-06-23 00:00:00&quot;,&quot;37&quot;:&quot;2020-06-24 00:00:00&quot;,&quot;38&quot;:&quot;2020-06-25 00:00:00&quot;,&quot;39&quot;:&quot;2020-06-26 00:00:00&quot;,&quot;4&quot;:&quot;2020-05-22 00:00:00&quot;,&quot;40&quot;:&quot;2020-06-27 00:00:00&quot;,&quot;41&quot;:&quot;2020-06-28 00:00:00&quot;,&quot;42&quot;:&quot;2020-06-29 00:00:00&quot;,&quot;43&quot;:&quot;2020-06-30 00:00:00&quot;,&quot;44&quot;:&quot;2020-07-01 00:00:00&quot;,&quot;45&quot;:&quot;2020-07-02 00:00:00&quot;,&quot;46&quot;:&quot;2020-07-03 00:00:00&quot;,&quot;47&quot;:&quot;2020-07-04 00:00:00&quot;,&quot;48&quot;:&quot;2020-07-05 00:00:00&quot;,&quot;49&quot;:&quot;2020-07-06 00:00:00&quot;,&quot;5&quot;:&quot;2020-05-23 00:00:00&quot;,&quot;50&quot;:&quot;2020-07-07 00:00:00&quot;,&quot;51&quot;:&quot;2020-07-08 00:00:00&quot;,&quot;52&quot;:&quot;2020-07-09 00:00:00&quot;,&quot;53&quot;:&quot;2020-07-10 00:00:00&quot;,&quot;54&quot;:&quot;2020-07-11 00:00:00&quot;,&quot;55&quot;:&quot;2020-07-12 00:00:00&quot;,&quot;56&quot;:&quot;2020-07-13 00:00:00&quot;,&quot;57&quot;:&quot;2020-07-14 00:00:00&quot;,&quot;58&quot;:&quot;2020-07-15 00:00:00&quot;,&quot;59&quot;:&quot;2020-07-16 00:00:00&quot;,&quot;6&quot;:&quot;2020-05-24 00:00:00&quot;,&quot;60&quot;:&quot;2020-07-17 00:00:00&quot;,&quot;61&quot;:&quot;2020-07-18 00:00:00&quot;,&quot;62&quot;:&quot;2020-07-19 00:00:00&quot;,&quot;63&quot;:&quot;2020-07-20 00:00:00&quot;,&quot;64&quot;:&quot;2020-07-21 00:00:00&quot;,&quot;65&quot;:&quot;2020-07-22 00:00:00&quot;,&quot;66&quot;:&quot;2020-07-23 00:00:00&quot;,&quot;67&quot;:&quot;2020-07-24 00:00:00&quot;,&quot;68&quot;:&quot;2020-07-25 00:00:00&quot;,&quot;69&quot;:&quot;2020-07-26 00:00:00&quot;,&quot;7&quot;:&quot;2020-05-25 00:00:00&quot;,&quot;70&quot;:&quot;2020-07-27 00:00:00&quot;,&quot;71&quot;:&quot;2020-07-28 00:00:00&quot;,&quot;72&quot;:&quot;2020-07-29 00:00:00&quot;,&quot;73&quot;:&quot;2020-07-30 00:00:00&quot;,&quot;74&quot;:&quot;2020-07-31 00:00:00&quot;,&quot;75&quot;:&quot;2020-08-01 00:00:00&quot;,&quot;76&quot;:&quot;2020-08-02 00:00:00&quot;,&quot;77&quot;:&quot;2020-08-03 00:00:00&quot;,&quot;78&quot;:&quot;2020-08-04 00:00:00&quot;,&quot;79&quot;:&quot;2020-08-05 00:00:00&quot;,&quot;8&quot;:&quot;2020-05-26 00:00:00&quot;,&quot;80&quot;:&quot;2020-08-06 00:00:00&quot;,&quot;81&quot;:&quot;2020-08-07 00:00:00&quot;,&quot;82&quot;:&quot;2020-08-08 00:00:00&quot;,&quot;83&quot;:&quot;2020-08-09 00:00:00&quot;,&quot;84&quot;:&quot;2020-08-10 00:00:00&quot;,&quot;85&quot;:&quot;2020-08-11 00:00:00&quot;,&quot;86&quot;:&quot;2020-08-12 00:00:00&quot;,&quot;87&quot;:&quot;2020-08-13 00:00:00&quot;,&quot;88&quot;:&quot;2020-08-14 00:00:00&quot;,&quot;89&quot;:&quot;2020-08-15 00:00:00&quot;,&quot;9&quot;:&quot;2020-05-27 00:00:00&quot;,&quot;90&quot;:&quot;2020-08-16 00:00:00&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;1338&quot;}},&quot;id&quot;:&quot;1279&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;1305&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;1307&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;name&quot;:&quot;unique&quot;,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;1308&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;1310&quot;}},&quot;id&quot;:&quot;1309&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;1305&quot;}},&quot;id&quot;:&quot;1310&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1336&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;items&quot;:[{&quot;id&quot;:&quot;1320&quot;},{&quot;id&quot;:&quot;1337&quot;}]},&quot;id&quot;:&quot;1319&quot;,&quot;type&quot;:&quot;Legend&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;1279&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;1282&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;1283&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;1286&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1275&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;1315&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;1284&quot;}},&quot;id&quot;:&quot;1283&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1273&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;label&quot;:{&quot;value&quot;:&quot;duplicate&quot;},&quot;renderers&quot;:[{&quot;id&quot;:&quot;1325&quot;}]},&quot;id&quot;:&quot;1337&quot;,&quot;type&quot;:&quot;LegendItem&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1287&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;fields&quot;:[&quot;unique&quot;]},&quot;id&quot;:&quot;1303&quot;,&quot;type&quot;:&quot;Stack&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1335&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1313&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;}],&quot;root_ids&quot;:[&quot;1268&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.1&quot;}}';
                  var render_items = [{"docid":"2b4dd87f-f0c0-408a-89d3-40a12811031f","root_ids":["1268"],"roots":{"1268":"c3cc905e-2e30-4d67-ae5d-770dfcab597e"}}];
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