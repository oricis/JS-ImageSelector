window.onload = () => {

    ////////////////////////////////////////////////////////////////////
    // Shop

    const data = {
        variations: {
            1: {
                price       : 10.00,
                name        : "Colgante Maduli",
                description : "3 hojas, 2 colores",
                stock       : 1,
            },
            2: {
                price       : 10.00,
                name        : "Colgante Maduli",
                description : "3 hojas, 3 colores",
                stock       : 2,
            },
            3: {
                price       : 10.00,
                name        : "Colgante Maduli",
                description : "hilo arcoiris",
                stock       : 1,
            },
            4: {
                price       : 10.00,
                name        : "Colgante Maduli",
                description : "gema esmeralda",
                stock       : 1,
            },
            5: {
                price       : 10.00,
                name        : "Colgante Maduli",
                description : "cuerda marrón",
                stock       : 1,
            }
        }
    }

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

        function updateItemDetails(selectedId)
        {
            console.log('selectedId: ' + selectedId); // HACK:

            // Updated text details

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
                updateItemDetails(selectorButton.id);
            });
        })
    }

}; // window.onload
