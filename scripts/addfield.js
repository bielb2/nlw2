// Search for the button
document.querySelector("#add-time")
.addEventListener('click', cloneField)

// When click on button
// Execute an action
function cloneField() {
    // Duplicate fields. What fields?

    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)
    
    // Take fields. What fields?
    const fields = newFieldContainer.querySelectorAll('input')

    // for each fields, clean
    fields.forEach(function(field) {
        // take the current field and clear
        
    })

    
    // Put on page. Where?
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
    
}
    
