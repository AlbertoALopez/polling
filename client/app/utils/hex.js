/* Generates a random hex code */

const hex = {
    generate() {
        return '#' + ("000000" + Math.random()
            .toString(16).slice(2, 8).toUpperCase()).slice(-6);
    },
};

export default hex;
