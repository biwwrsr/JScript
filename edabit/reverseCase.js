function reverseCase(str) {
    return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
                return chr ? match.toUpperCase() : match.toLowerCase();
            });
        }
    console.log(reverseCase('AaBbc'));