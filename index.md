---
layout: home
---

* Toc
{:toc}

## Welcome

Welcome to Skatteetaten (The Norwegian Tax Administration) on [GitHub](https://github.com/Skatteetaten).

### Open source projects by Skatteetaten

<section class="ske-repos">
  {% for repo in site.repos %}
      <a  class="mdl-button mdl-js-button mdl-button--raised mdl-button--primary" href="{{ repo[1] }}">{{ repo[0] }}</a>
  {% endfor %}
</section>
