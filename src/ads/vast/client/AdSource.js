function AdSource(adSourceJTree) {
  if(!(this instanceof AdSource)) {
    return new AdSource(adSourceJTree);
  }

  //Required elements
  this.VASTAdTagURI = xml.keyValue(adSourceJTree.adTagURI);

  //Optional elements
  this.error = xml.keyValue(adSourceJTree.error);

  //Optional attrs
  this.followRedirects = adSourceJTree.attr('followRedirects') !== false;
  this.allowMultipleAds = adSourceJTree.attr('allowMultipleAds');
}
