TextElement = function(text, format){
    Element.apply(this, [format]);
    this.text=text;
};

TextElement.subclass(Element);

TextElement.prototype.getRTFCode = function(colorTable, fontTable){
  return this.format.formatText(this.text, colorTable, fontTable);
};