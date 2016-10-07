/* Utility functions for form validation and submission */

const validate = {
    checkTextField(value) {
        if (value == '') {
            return false;
        }

        return true;
    },
};

export default validate;
