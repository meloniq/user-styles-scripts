// ==UserScript==
// @name        Github Gist - Collapse-Expand Code in Search
// @namespace   https://github.com/meloniq/user-styles-scripts/tree/master/github.com/Gist-Search
// @description Github Gist - Collapse-Expand Code in Search
// @include     *gist.github.com/search*
// @run-at      document-body
// @author      meloniq
// @homepage    http://blog.meloniq.net
// @license     GNU General Public License v2 or later
// @version     1.0
// @grant       none
// ==/UserScript==


(function($) {

	function gist_add_expand_links() {
		$('.file-box').not( ':has(> a.gist-expand)' ).each(function() {
			$(this).prepend('<a href="#" class="gist-expand"><span>Expand/Collapse</span></a>');
		});
	}
	gist_add_expand_links();

	jQuery(document).ajaxComplete( function() {
		gist_add_expand_links();
	});

	$(document).on('click', '.gist-expand', function() {
		$(this).closest('.gist-item').toggleClass('expand');
		return false;
	});
}(unsafeWindow.jQuery));
