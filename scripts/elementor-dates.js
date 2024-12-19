<script>
document.addEventListener('DOMContentLoaded', function() {
    const interval = setInterval(() => {
        const checkInFields = document.querySelectorAll('#form-field-incheckning');
        const checkOutFields = document.querySelectorAll('#form-field-utcheckning');

        if (checkInFields.length && checkOutFields.length) {
            clearInterval(interval);

            checkInFields.forEach((checkInField, index) => {
                const checkOutField = checkOutFields[index];

                if (checkInField && checkOutField) {
                    const today = new Date();
                    const yyyy = today.getFullYear();
                    const mm = String(today.getMonth() + 1).padStart(2, '0');
                    const dd = String(today.getDate()).padStart(2, '0');
                    const todayDate = `${yyyy}-${mm}-${dd}`;

                    checkInField.setAttribute('min', todayDate);

                    flatpickr(checkInField, {
                        minDate: todayDate,
                        dateFormat: "Y-m-d"
                    });

                    flatpickr(checkOutField, {
                        dateFormat: "Y-m-d",
                        clickOpens: false,
                        onOpen: function(selectedDates, dateStr, instance) {
                            const checkInDate = checkInField.value;
                            if (!checkInDate) {
                                instance.close();
                                return;
                            }

                            instance.set('minDate', checkInDate);
                        }
                    });

                    // Disable check-out field by default
                    checkOutField.disabled = true;

                    checkInField.addEventListener('change', function() {
                        const checkInDate = checkInField.value;
                        if (checkInDate) {
                            checkOutField.disabled = false;

                            const checkOutPicker = flatpickr(checkOutField, {
                                minDate: checkInDate,
                                dateFormat: "Y-m-d"
                            });

                            checkOutPicker.set('minDate', checkInDate);
                        } else {
                            checkOutField.disabled = true;
                            checkOutField.value = '';
                        }
                    });
                }
            });
        }
    }, 100);
});
</script>
