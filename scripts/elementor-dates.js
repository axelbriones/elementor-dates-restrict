document.addEventListener('DOMContentLoaded', function() {
    const interval = setInterval(() => {
        const checkInField = document.getElementById('form-field-incheckning');
        const checkOutField = document.getElementById('form-field-utcheckning');

        if (checkInField && checkOutField) {
            clearInterval(interval);

            // Get today's date in YYYY-MM-DD format
            const today = new Date();
            const yyyy = today.getFullYear();
            const mm = String(today.getMonth() + 1).padStart(2, '0');
            const dd = String(today.getDate()).padStart(2, '0');
            const todayDate = `${yyyy}-${mm}-${dd}`;

            // Set the minimum date for the check-in field
            checkInField.setAttribute('min', todayDate);

            // Initialize flatpickr for check-in and check-out fields
            flatpickr(checkInField, {
                minDate: todayDate, // Restrict check-in to today or later
                dateFormat: "Y-m-d"
            });

            flatpickr(checkOutField, {
                dateFormat: "Y-m-d",
                clickOpens: false, // Initially disable date selection
                onOpen: function(selectedDates, dateStr, instance) {
                    const checkInDate = checkInField.value;
                    if (!checkInDate) {
                        instance.close(); // Prevent opening if check-in is not set
                        return;
                    }

                    instance.set('minDate', checkInDate); // Set minDate based on check-in
                }
            });

            // Disable check-out field by default
            checkOutField.disabled = true; // << NEWLY ADDED LINE

            // Enable and restrict dates in check-out field dynamically
            checkInField.addEventListener('change', function() {
                const checkInDate = checkInField.value;
                if (checkInDate) {
                    // Enable check-out field
                    checkOutField.disabled = false;

                    // Update flatpickr minDate dynamically
                    const checkOutPicker = flatpickr(checkOutField, {
                        minDate: checkInDate,
                        dateFormat: "Y-m-d"
                    });

                    checkOutPicker.set('minDate', checkInDate);
                } else {
                    // Disable check-out field if check-in is cleared
                    checkOutField.disabled = true;
                    checkOutField.value = '';
                }
            });
        }
    }, 100);
});
