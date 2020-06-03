# Configuration file for the Sphinx documentation builder.
#
# This file only contains a selection of the most common options. For a full
# list see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Path setup --------------------------------------------------------------

# If extensions (or modules to document with autodoc) are in another directory,
# add these directories to sys.path here. If the directory is relative to the
# documentation root, use os.path.abspath to make it absolute, like shown here.
#
import os
import sys
sys.path.insert(0, os.path.abspath('../'))
print("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
[print(p) for p in sys.path]
print("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")


# -- Project information -----------------------------------------------------

project = 'Fairlearn-stats'
# copyright = ''
author = 'Roman Lutz'

# The full version, including alpha/beta/rc tags
# release = ''

# -- General configuration ---------------------------------------------------

# Add any Sphinx extension module names here, as strings. They can be
# extensions coming with Sphinx (named 'sphinx.ext.*') or your custom
# ones.
extensions = [
    'bokeh.sphinxext.bokeh_autodoc',
    'bokeh.sphinxext.bokeh_color',
    'bokeh.sphinxext.bokeh_enum',
    'bokeh.sphinxext.bokeh_github',
    'bokeh.sphinxext.bokeh_jinja',
    'bokeh.sphinxext.bokeh_model',
    'bokeh.sphinxext.bokeh_options',
    'bokeh.sphinxext.bokeh_palette',
    'bokeh.sphinxext.bokeh_palette_group',
    'bokeh.sphinxext.bokeh_plot',
    'bokeh.sphinxext.bokeh_prop',
    'bokeh.sphinxext.bokeh_releases',
    'bokeh.sphinxext.bokeh_settings',
    'bokeh.sphinxext.bokeh_sitemap',
    'bokeh.sphinxext.bokehjs_content',
    'bokeh.sphinxext.collapsible_code_block',
    'bokeh.sphinxext.theme',
]

# Add any paths that contain templates here, relative to this directory.
templates_path = ['_templates']

# List of patterns, relative to source directory, that match files and
# directories to ignore when looking for source files.
# This pattern also affects html_static_path and html_extra_path.
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']

master_doc = 'index'

# -- Options for HTML output -------------------------------------------------

# The theme to use for HTML and HTML Help pages. See the documentation for
# a list of builtin themes.
html_theme = 'alabaster'
html_sidebars = {
    '**': []
}

# Theme options are theme-specific and customize the look and feel of a theme
# further. For a list of options available for each theme, see the
# documentation.
# html_theme_options = {
#     "external_links": [
#         {"name": "Gitter", "url": "https://gitter.im/fairlearn/community"},
#         {"name": "StackOverflow", "url": "https://stackoverflow.com/questions/tagged/fairlearn"}
#     ],
#     "github_url": "https://github.com/fairlearn/fairlearn-stats",
#     "show_prev_next": False
# }
html_context = {
    'AUTHOR': author,
    'DESCRIPTION': 'Fairlearn stats',
    'SITEMAP_BASE_URL': 'https://romanlutz.github.io/fairlearn-stats/',  # Trailing slash is needed
    'VERSION': "0.1",
}

# The name of an image file (relative to this directory) to place at the top
# of the sidebar.
# html_logo = ""

# Additional templates that should be rendered to pages, maps page names to
# template names.
# html_additional_pages = {
#     'index': 'index.html'
# }

# If false, no index is generated.
# html_use_index = False

# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named "default.css" will overwrite the builtin "default.css".
# html_static_path = ['_static']

# html_css_files = []
