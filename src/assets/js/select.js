function getSelectedOptionIndex(dataOptions, selectedValue)
{
    const variationKeys = Object.keys(dataOptions);

    let result = 0;
    variationKeys.forEach((value, key) => {
        if (value == selectedValue) {
            result = key;
        }
    });

    return result;
}

function updatedSelectByValue(selectNode, dataOptions, selectedValue)
{
    const index = getSelectedOptionIndex(dataOptions, selectedValue);

    // select the option by order
    selectNode.options[index].selected = 'selected';
}
