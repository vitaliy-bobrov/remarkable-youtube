function generateOpenTag(href, className = '') {
  const id = href.split(':')[1];

  return `<iframe class="remarkable-youtube ${className}" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>`;
}

function isYouTubeLink(href) {
  return href.indexOf('youtube:') === 0;
}

const remarkableYouTube = (md, config = {}) => {
  const originalLinkOpenRenderer = md.renderer.rules.link_open;
  const originalLinkCloseRenderer = md.renderer.rules.link_close;

  md.renderer.rules.link_open = (tokens, idx, options, env) => {
    const href = tokens[idx].href;

    if (isYouTubeLink(href)) {
      env.youtube = true;
      return generateOpenTag(href, config.className);
    }

    return originalLinkOpenRenderer(tokens, idx, options, env);
  };

  md.renderer.rules.link_close = (tokens, idx, options, env) => {
    if (env.youtube) {
      env.youtube = false;
      return '</iframe>';
    }

    return originalLinkCloseRenderer(tokens, idx, options, env);
  };
};

module.exports = remarkableYouTube;
