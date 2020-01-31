var url = window.location.href;

if(url.includes("add-remove-admin")) {
    // Get references to administrator table and rows
    var allAdminsTable = document.querySelector('#adminTable');
    var adminRows = allAdminsTable.tBodies[0].rows;
    var adminRemovalButton = document.querySelector('#removeSelectedAdminsButton');
    var confirmAdminRemovalButton = document.querySelector('#confirmAdminDelete');
    var confirmAdminRemovalModalText = document.querySelector('#confirmModalText');

    // Add "highlightable-admin-row" helper class to each row
    for(let item of adminRows) {
        item.classList.add("highlightable-admin-row");
    }

    /*LISTENER DECLARATIONS*/
    
    // This is the listener for determining which table rows to highlight based on which checkboxes are selected
    function determineHighlightStateListener(e) {
        // The event will fire from the target, but the listener is attached to the table and not the checkbox itself, so the event target is needed
        var adminTableEventTarget = e.target;

        // The type of the input is important since we only want to catch events that originate from a type="checkbox" input
        var adminTargetType = adminTableEventTarget.type;

        // If the event target is a checkbox and is checked, add the "currently-highlighted-admin-row" class to highlight the row.  If the target is a checkbox 
        // and is not checked, remove the "currently-highlighted-admin-row" class 
        if(adminTargetType === "checkbox" && adminTableEventTarget.checked) {
            adminTableEventTarget.closest("tr").classList.add("currently-highlighted-admin-row");
        }
        else if(adminTargetType === "checkbox" && !adminTableEventTarget.checked) {
            adminTableEventTarget.closest("tr").classList.remove("currently-highlighted-admin-row");
        }

        // If at least one checkbox is selected, enable the "Remove Selected" button and display the number of selections
        if(getAllSelectedCheckboxRows().length > 0) {
            adminRemovalButton.classList.remove("disabled");
            var buttonText = `Remove Selected (${getAllSelectedCheckboxRows().length})`;
            adminRemovalButton.setAttribute("data-toggle", "modal")
            adminRemovalButton.setAttribute("data-target", "#confirmDeletionModal");
            adminRemovalButton.innerHTML = buttonText;
        }

        // If nothing is selected, disable the "Remove Selected" button and remove number of selections
        else if(getAllSelectedCheckboxRows().length < 1) {
            adminRemovalButton.classList.add("disabled");
            adminRemovalButton.setAttribute("data-toggle", "")
            adminRemovalButton.setAttribute("data-target", "");
            adminRemovalButton.innerHTML = "Remove Selected";
        }
    }

    // This is the listener for the "Remove Selected" button; it listens for clicks on the button
    function adminRemovalButtonListener(e) {
        removeSelectedAdmins();
    }


    /*CUSTOM FUNCTION DECLARATIONS*/

    // This function finds all selected table rows and returns a NodeList of them
    function getAllSelectedCheckboxRows() {
        var selectedRows = document.querySelectorAll(".currently-highlighted-admin-row");
        return selectedRows;
    }

    // This function takes a NodeList of all the selected table rows and removes them from the DOM
    function removeSelectedAdmins() {
        var selection = getAllSelectedCheckboxRows();
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

    // Attach adminRemovalButtonListener to the confirm administrator removal button
    confirmAdminRemovalButton.addEventListener('click', adminRemovalButtonListener);
}



