/**
 *  Change active menu based on current section example.
 */

var sectionPosition = new Array();

// This function will get the top and bottom of each section in the site and
// insert this information into an array.
// Change the identifier to a class that represents your section separator.
jQuery.each(jQuery('body').find('[section_identifier]'), function() {
  var id = jQuery(this).attr('id');
  var top = jQuery(this).offset().top;
  var bottom = jQuery(this).offset().top + jQuery(this).height();
  sectionPosition.push({
    'id': id,
    'bottom': bottom,
    'top': top
  });
});

// On window scroll, check our array to see if we are inside a section.
// If the scrollTop is inside a section, change the menu item that represents
// that section to the active layout by adding the active class.
jQuery(window).scroll(function() {
  var scroll = $(window).scrollTop();
  sectionPosition.forEach(function (item) {
    if (scroll >= item.top && scroll < item.bottom) {
      // This expects that each menu item has an id that is the SAME one
      // that can be found in the section + '-menu'.
      // Example: section id -> #section | menu id -> #section-menu
      var menuItem = "#" + item.id + "-menu";
      // If the item for this section is already active, we don't need to
      // add the class again nor remove the class from any of the items.
      if (!menuItem.hasClass('active')) {
        jQuery('.menu-class li').removeClass('active');
        jQuery(menuItem).addClass('active');
      }
    }
  });
});
