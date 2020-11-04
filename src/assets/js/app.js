window.onload = () => {

    ////////////////////////////////////////////////////////////////////
    // Shop

    // product page
    if ($('.product') !== undefined) {
        const selectedCssClass = 'selected-border';

        function selectVariationImageOnInit(image, mainImageSrc) {
            if (image.src !== undefined
                && image.src === mainImageSrc) {

                addCssClassTo(image, selectedCssClass);
            }
        }

        function updateImages(selected) {
            // Updated the selected image
            removeCssClassFromAll(variationSelectors, selectedCssClass);
            addCssClassTo(selected, selectedCssClass);

            // Updated the main image
            productImage.src = selected.src;
        }

        // Put a selected frame around the current variation image
        const productImage = $('#main-image');
        const productImageSrc = productImage.src;
        console.log('Main image src: ' + productImageSrc);



        const variationSelectors = $('.btn');
        variationSelectors.forEach(selectorButton => {

            // select the variation on init
            selectVariationImageOnInit(selectorButton, productImageSrc);

            selectorButton.addEventListener('click', function (event) {
                updateImages(selectorButton);
            });
        })
    }

}; // window.onload
