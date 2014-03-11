if (!Element.prototype.matches && Element.prototype.oMatchesSelector) {
    Element.prototype.matches = Element.prototype.oMatchesSelector;
}
