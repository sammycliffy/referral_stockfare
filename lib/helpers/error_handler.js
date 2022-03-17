export default {
    errorHandler(errorData) {
        for (const [key, value] of Object.entries(errorData)) {
            var str = `${key}: ${value}`;
            return str;
            // return str.substring(str.indexOf(":") + 1);
        }

    }
}