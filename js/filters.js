/**
 * @file filters.js
 * Block Admin filters
 */

BlockAdmin = {
  // Some classes and IDs, for reference
  p: {
    filters: "blockadmin-filters",
    masterFilter: "blockadmin-master-filter",
    allRows: ".blockadmin-block",
    someRows: ".blockadmin-block-",
    hideRow: 'blockadmin-hide'
  },

  // Initialize the filter change function
  initFilters: function() {
    jQuery("#" + BlockAdmin.p.masterFilter)
      .change(BlockAdmin.filterChange);
  },

  filterChange: function(ev) {
    var sel = jQuery(this).find("option:selected").val();
    // Has the user selected all? If so, remove hide class
    if (sel == "") {
      jQuery(BlockAdmin.p.allRows).removeClass(BlockAdmin.p.hideRow);
    }
    // Otherwise, add the hide class to everything except the
    // selected module's rows
    else {
      jQuery(BlockAdmin.p.allRows).addClass(BlockAdmin.p.hideRow);
      jQuery(BlockAdmin.p.someRows + jQuery(this).find("option:selected").text())
        .removeClass(BlockAdmin.p.hideRow);
    }
  },

  go: function() {
    BlockAdmin.initFilters();
  }
};

// Assign as a Drupal behavior
Drupal.behaviors.blockAdmin = BlockAdmin.go;
