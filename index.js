const url = require('url');

const YOUTUBE_HOSTS = new Set([
  'youtu.be',
  'youtube.com'
]);

function generateOpenTag(href, className = '') {
  return `<iframe class="remarkable-youtube ${className}" src="${href}" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>`;
}

function isYouTubeLink(href) {
  const host = url.parse(href).hostname;

  return YOUTUBE_HOSTS.has(host);
}

const remarkableYouTube = (md, options) => {
  const originalLinkOpenRenderer = md.renderer.rules.link_open;
  const originalLinkCloseRenderer = md.renderer.rules.link_close;

  md.renderer.rules.link_open = (tokens, idx, options, env) => {
    const href = tokens[idx].href;

    if (isYouTubeLink(href)) {
      env.youtube = true;
      return generateOpenTag(href, options.className);
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
