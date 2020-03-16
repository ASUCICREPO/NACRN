var url = window.location.href;

if(url.includes("manage-users-admin")) {
    // Set up multi-selection for organizations  
    require('bootstrap-select');
    $('#organizationSelect').selectpicker();
    $('#intakeQuestionManagerSelect').selectpicker();
    $('#dataExportSelect').selectpicker();
    $('#addUserOrganizationSelect').selectpicker();

    // Get references to administrator table and rows
    var allAdminsTable = document.querySelector('#adminTable');
    var adminRows = allAdminsTable.tBodies[0].rows;
    var confirmAdminRemovalButton = document.querySelector('#confirmAdminDelete');
    var confirmAdminRemovalModalText = document.querySelector('#confirmModalText');
    var adminTableEditButton = document.querySelector('#adminTableEditButton');

    // Get references to power user table
    var allPowerUsersTable = document.querySelector('#powerUserTable');
    var powerUserRemovalButton = document.querySelector('#powerUserTableRemovalButton');
    var powerUserTableEditButton = document.querySelector('#powerUserTableEditButton');

    // Get references to care coordinator table
    var allCareCoordinatorsTable = document.querySelector('#careCoordinatorTable');
    var careCoordinatorRemovalButton = document.querySelector('#careCoordinatorTableRemovalButton');
    var careCoordinatorTableEditButton = document.querySelector('#careCoordinatorTableEditButton');

    // Get references to intake manager table
    var allIntakeManagersTable = document.querySelector('#intakeManagerTable');
    var intakeManagerRemovalButton = document.querySelector('#intakeManagerRemovalButton');
    var intakeManagerTableEditButton = document.querySelector('#intakeManagerTableEditButton')

    // Get references to end user table
    var allEndUsersTable = document.querySelector('#endUserTable');
    var endUserRemovalButton = document.querySelector('#endUserRemovalButton');
    var endUserTableEditButton = document.querySelector('#endUserTableEditButton');

    // Add "highlightable-admin-row" helper class to each row
    for(let item of adminRows) {
        item.classList.add("highlightable-admin-row");
    }


    /*LISTENER DECLARATIONS*/
    
    // This is the listener for determining which table rows to highlight based on which checkboxes are selected
    function determineHighlightStateListener(e) {
        // Dynamic strings that allows querySelector() to find the correct removal/edit buttons for each table
        var removalButtonQueryString = '.tab-pane ' + '#' + this.id + 'RemovalButton' + '.removal-button';
        var editSelectedUserButtonQueryString = '.tab-pane ' + '#' + this.id + "EditButton" + '.edit-button';

        // Get references to the removal/edit buttons for the table in which the event occured
        var editButton = document.querySelector(editSelectedUserButtonQueryString);
        var removalButton = document.querySelector(removalButtonQueryString);

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
        if(getAllSelectedCheckboxRows(this.id).length > 0) {
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

        // In the case that one user is selected, enable the "Edit Selected User" button
        if(getAllSelectedCheckboxRows(this.id).length === 1){
            editButton.classList.remove("disabled");
            editButton.setAttribute("data-toggle", "modal");
            editButton.setAttribute("data-target", "#editUserModal")
        } 
        
        // If zero or more than one user is selected, disable the "Edit Selected User" button
        else {
            editButton.classList.add("disabled");
            editButton.setAttribute("data-toggle", "");
            editButton.setAttribute("data-target", "")
        }
    }

    // This is the listener for the "Remove Selected" button; it listens for clicks on the button
    function removalButtonListener() {
        removeSelectedRows();
    }

    function editButtonListener(e) {
        var activeTable = document.querySelector('.tab-pane.active').querySelector('.table').id;
        if(!e.target.classList.contains('disabled')) {
            var editObject = {
                userType: getAllSelectedCheckboxRows(activeTable),
                activeTable: activeTable
            }

            return editObject;
        }
    }


    /*WORKER FUNCTION DEFINITIONS*/

    // This function finds all selected table rows (i.e. rows with the class "currently-highlighted-row") and returns a NodeList of them
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

        // Dispatch a change event in table to trigger the removal button to re-render
        var myEvent = new CustomEvent("change");
        document.querySelector('#' + tableId).dispatchEvent(myEvent);
    }


    /*LISTENER ATTACHMENT*/

    // Attach determineHighlightStateListener to user tables
    allAdminsTable.addEventListener('change', determineHighlightStateListener);
    allPowerUsersTable.addEventListener('change', determineHighlightStateListener);
    allCareCoordinatorsTable.addEventListener('change', determineHighlightStateListener);
    allIntakeManagersTable.addEventListener('change', determineHighlightStateListener);
    allEndUsersTable.addEventListener('change', determineHighlightStateListener);

    // Attach removalButtonListener to the "Confirm Removal" removal buttons
    confirmAdminRemovalButton.addEventListener('click', removalButtonListener);

    // Attach editButtonListener to the "Edit Selected User" buttons
    adminTableEditButton.addEventListener('click', editButtonListener);
    powerUserTableEditButton.addEventListener('click', editButtonListener);
    careCoordinatorTableEditButton.addEventListener('click', editButtonListener);
    intakeManagerTableEditButton.addEventListener('click', editButtonListener);
    endUserTableEditButton.addEventListener('click', editButtonListener);
}