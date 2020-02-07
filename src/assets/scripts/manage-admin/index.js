var url = window.location.href;

if(url.includes("add-remove-admin")) {
    // Get references to administrator table and rows
    var allAdminsTable = document.querySelector('#adminTable');
    var adminRows = allAdminsTable.tBodies[0].rows;
    var confirmAdminRemovalButton = document.querySelector('#confirmAdminDelete');
    var confirmAdminRemovalModalText = document.querySelector('#confirmModalText');

    // Get references to power user table
    var allPowerUsersTable = document.querySelector('#powerUserTable');
    var powerUserRemovalButton = document.querySelector('#removeSelectedPowerUsersButton');

    // Add "highlightable-admin-row" helper class to each row
    for(let item of adminRows) {
        item.classList.add("highlightable-admin-row");
    }

    /*LISTENER DECLARATIONS*/
    
    // This is the listener for determining which table rows to highlight based on which checkboxes are selected
    function determineHighlightStateListener(e) {
        var removalButton = document.querySelector('.tab-pane .removal-button');

        // The event will fire from the target, but the listener is attached to the table and not the checkbox itself, so the event target is needed
        var tableEventTarget = e.target;

        // The type of the input is important since we only want to catch events that originate from a type="checkbox" input
        var targetType = tableEventTarget.type;

        // If the event target is a checkbox and is checked, add the "currently-highlighted-admin-row" class to highlight the row.  If the target is a checkbox 
        // and is not checked, remove the "currently-highlighted-admin-row" class 
        if(targetType === "checkbox" && tableEventTarget.checked) {
            tableEventTarget.closest("tr").classList.add("currently-highlighted-row");
        }
        else if(targetType === "checkbox" && !tableEventTarget.checked) {
            tableEventTarget.closest("tr").classList.remove("currently-highlighted-row");
        }

        // If at least one checkbox is selected, enable the "Remove Selected" button and display the number of selections
        if(getAllSelectedCheckboxRows(this.id, removalButton).length > 0) {
            removalButton.classList.remove("disabled");
            var buttonText = `Remove Selected (${getAllSelectedCheckboxRows(this.id).length})`;
            removalButton.setAttribute("data-toggle", "modal")
            removalButton.setAttribute("data-target", "#confirmDeletionModal");
            removalButton.innerHTML = buttonText;
        }

        // If nothing is selected, disable the "Remove Selected" button and remove number of selections
        else if(getAllSelectedCheckboxRows(this.id).length < 1) {
            removalButton.classList.add("disabled");
            removalButton.setAttribute("data-toggle", "")
            removalButton.setAttribute("data-target", "");
            removalButton.innerHTML = "Remove Selected";
        }
    }

    // This is the listener for the "Remove Selected" button; it listens for clicks on the button
    function removalButtonListener() {
        removeSelectedRows(this);
    }

    /*CUSTOM FUNCTION DECLARATIONS*/

    // This function finds all selected table rows and returns a NodeList of them
    function getAllSelectedCheckboxRows(tableId) {
        var selectedRows = document.querySelector('#' + tableId).querySelectorAll(".currently-highlighted-row");
        return selectedRows;
    }

    // This function takes a NodeList of all the selected table rows and removes them from the DOM
    function removeSelectedRows() {
        var tableId = document.querySelector('.tab-pane.active').querySelector('.table').id;
        var selection = getAllSelectedCheckboxRows(tableId);
        selection.forEach(function(node) {
            node.remove();
        })

        // Dispatch change event in table to trigger button re-render
        var myEvent = new CustomEvent("change");
        allAdminsTable.dispatchEvent(myEvent);
    }


    /*LISTENER ATTACHMENT*/

    // Attach determineHighlightStateListener to administrator table
    allAdminsTable.addEventListener('change', determineHighlightStateListener);
    allPowerUsersTable.addEventListener('change', determineHighlightStateListener);

    // Attach removalButtonListener to the confirm administrator removal button
    confirmAdminRemovalButton.addEventListener('click', removalButtonListener);
    confirmPowerUserRemovalButton.addEventListener('click', removalButtonListener);
}



