/**
 * Chọn element dựa trên selector.
 * @param {string} selector Selector của element.
 * @returns {HTMLElement} Element được chọn.
 */
function $(selector) {
    return document.querySelector(selector);
  }
  
  /**
   * Tạo một element mới.
   * @param {string} tagName Tên của tag element.
   * @returns {HTMLElement} Element được tạo.
   */
  function createElement(tagName) {
    return document.createElement(tagName);
  }
  
  /**
   * Thêm một element vào một element khác.
   * @param {HTMLElement} child Element con.
   * @param {HTMLElement} parent Element cha.
   */
  function appendChild(child, parent) {
    parent.appendChild(child);
  }
  
  module.exports = {
    $: $,
    createElement: createElement,
    appendChild: appendChild
  };