document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll(".day-checkbox");
    const noneCheckbox = document.getElementById("none");
    let selectedDays = [];

    checkboxes.forEach(checkbox=> {
        checkbox.addEventListener("change", () => {
            if (checkbox.id === "none" && checkbox.checked) {
                deselectAll();
                selectedDays = [];
            } else if (checkbox.id !== "none" && checkbox.checked) {
                if (selectedDays.length >= 3) {
                alert(`Only 3 days can be selected.You have already selected ${selectedDays.join(", ")}.`);
                    checkbox.checked = false;
                } else {
                    selectedDays.push(checkbox.id);
                    noneCheckbox.checked = false;
                }
            } else if (checkbox.id !== "none" && !checkbox.checked) {
                selectedDays = selectedDays.filter(day => day !== checkbox.id);
            }
        });
    });

    function deselectAll() {
        checkboxes.forEach(checkbox => {
            if (checkbox.id !== "none") {
                checkbox.checked = false;
            }
        });
    }
});