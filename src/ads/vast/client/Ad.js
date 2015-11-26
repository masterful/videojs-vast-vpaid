function Ad(adJTree) {
  if (!(this instanceof Ad)) {
    return new Ad(adJTree);
  }

  this.id = adJTree.attr('id');
  this.sequence = adJTree.attr('sequence');

  if(adJTree.inLine) {
    this.inLine = new InLine(adJTree.inLine);
  }

  if(adJTree.wrapper){
    this.wrapper = new Wrapper(adJTree.wrapper);
  }

  if(adJTree.prefix === 'vmap' && adJTree.adSource){
    this.source = new AdSource(adJTree.adSource);

    this.id = adJTree.adSource.attr('breakId');
    this.type = adJTree.attr('breakType');
    this.timeOffset = adJTree.attr('timeOffset');
  }
}
