function findMarkdownPath(absolutePath, docsFolder = '/docs') {
  const split = absolutePath.split(docsFolder)
  if (!split || split.length < 2) {
    return absolutePath
  }

  return split[1].replace(/\.[^/.]+$/, '')
}

module.exports = {
  findMarkdownPath: findMarkdownPath,
}
