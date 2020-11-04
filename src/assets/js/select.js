function getSelectedOptionIndex(dataOptions, selectedValue)
{
    let result = 0;
    const optionKeys = Object.keys(dataOptions);

    if (optionKeys && typeof (optionKeys) === 'object'
        && Array.isArray(optionKeys)) {

        optionKeys.forEach((value, index) => {
            if (value == selectedValue) {
                result = index;
            }
        });
    }


    return result;
}

function updatedSelectByValue(selectNode, dataOptions, selectedValue)
{
    const index = getSelectedOptionIndex(dataOptions, selectedValue);

    // select the option by order
    selectNode.options[index].selected = 'selected';
}
