(function(){
  CKEDITOR.on( 'dialogDefinition', function( ev ) {
    // Take the dialog name and its definition from the event data.
    var dialogName = ev.data.name;
    var dialogDefinition = ev.data.definition;

    // Check if the definition is from the dialog we're
    // interested on (the "Table" dialog).
    if ( dialogName == 'table' ) {
      // Get a reference to the "Table Info" tab.
      var infoTab = dialogDefinition.getContents( 'info' );
      // Adjust the default Table Width.
      txtWidth = infoTab.get( 'txtWidth' );
      txtWidth['default'] = '';
      // Adjust the default Cell Padding.
      txtCellPad = infoTab.get( 'txtCellPad' );
      txtCellPad['default'] = '';
      // Adjust the default Cell Spacing.
      txtCellPad = infoTab.get( 'txtCellSpace' );
      txtCellPad['default'] = '';
      // Adjust the default Table Border.
      txtCellPad = infoTab.get( 'txtBorder' );
      txtCellPad['default'] = '0';
    }
  });
})();