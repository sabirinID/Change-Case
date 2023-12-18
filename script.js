function change(caseType) {
    var nameInput = document.getElementById('name');
    var name = nameInput.value;

    switch (caseType) {
        case 'sentence':
            nameInput.value = name.charAt(0)
                .toUpperCase() + name.slice(1)
                .toLowerCase();
            break;
        case 'lower':
            nameInput.value = name.toLowerCase();
            break;
        case 'upper':
            nameInput.value = name.toUpperCase();
            break;
        case 'capitalize':
            nameInput.value = name.split(' ')
                .map(function(word) {
                    return word.charAt(0)
                        .toUpperCase() + word.slice(1)
                        .toLowerCase();
                })
                .join(' ');
            break;
        case 'snake':
            nameInput.value = name.replace(/[\W_]+/g, "_")
                .toLowerCase();
            break;
        case 'kebab':
            nameInput.value = name.replace(/([a-z])([A-Z])/g, '$1-$2')
                .replace(/\s+/g, '-')
                .toLowerCase();
            break;
        case 'camel':
            nameInput.value = name.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
                    return index === 0 ? word.toLowerCase() : word.toUpperCase();
                })
                .replace(/\s+/g, '');
            break;
        case 'pascal':
            nameInput.value = name.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word) {
                    return word.toUpperCase();
                })
                .replace(/\s+/g, '');
            break;
    }
}
