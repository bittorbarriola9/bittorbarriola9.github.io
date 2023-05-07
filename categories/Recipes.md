---
layout: page
title: Recipes
permalink: /blog/categories/recipes/
color: red
---

<h5> Posts by Category : {{ page.title }} </h5>

<div class="card">
{% for post in site.categories.recipes %}
 <li class="category-posts"><span>{{ post.date | date_to_string }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</div>