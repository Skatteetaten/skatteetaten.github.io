# [skatteetaten.github.io] (https://skatteetaten.github.io)

Information about the Skatteetaten GitHub organisation, repositories and approaches to software

## Getting Started


### Requirements

* [Ruby](https://www.ruby-lang.org/) 
	* `> 2.0.0`
* [Bundler](http://bundler.io/) 
	* `gem install bundler`

### Running locally

* Clone this repo
* Run `bundle install`
* Run `bundle exec jekyll serve`
* Open a browser at [http://localhost:4000](http://localhost:4000)


## Making changes

* Create/edit `.md` files in the `/_posts/` folder
* Directory structure gets turned into urls
	* i.e. `/pages/foo/bar/index.md` becomes `localhost:4000/pages/foo/bar`
* Make sure to include a title, set the layout to **post**, and set the category to one that exists in the category-list in _config.yml, at the top of each page like so:
```
---
title: New Sample Article
layout: page
category: Development Documentation
---
```
