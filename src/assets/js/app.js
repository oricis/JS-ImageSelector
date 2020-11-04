window.onload = () => {

    ////////////////////////////////////////////////////////////////////
    // Shop

    const data = {
        variations: {
            1: {
                price       : '20.00',
                name        : "Colgante Maduli",
                description : "3 hojas, 2 colores",
                stock       : 1,
            },
            2: {
                price       : '22.00',
                name        : "Colgante Maduli",
                description : "3 hojas, 3 colores",
                stock       : 2,
            },
            3: {
                price       : '20.00',
                name        : "Colgante Maduli",
                description : "hilo arcoiris",
                stock       : 1,
            },
            4: {
                price       : '25.00',
                name        : "Colgante Maduli",
                description : "gema esmeralda",
                stock       : 3,
            },
            5: {
                price       : '20.00',
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

        function updateItemDetails(selectedId, selectNode)
        {
            const variationId = getLastSlice(selectedId, '-');
            const variationData = data.variations[variationId];

            // Updated text details
            const stock = variationData.stock;
            setText($('#price'), variationData.price);
            setText($('#stock'), stock);
            const stockUdsNode = (stock === 1) ? 'ud' : 'uds';
            setText($('#stock-uds'), stockUdsNode);

            // Updated select details
            updatedSelectByValue(selectNode, data.variations, variationId);
        }

        // Put a selected frame around the current variation image
        const productImage = $('#main-image');
        const productImageSrc = productImage.src;
        console.log('Main image src: ' + productImageSrc);


        const selectVariations = $('#variations');
        const variationSelectors = $('.btn');
        variationSelectors.forEach(selectorButton => {

            // select the variation on init
            selectVariationImageOnInit(selectorButton, productImageSrc);

            selectorButton.addEventListener('click', () => {
                updateImages(selectorButton);
                updateItemDetails(selectorButton.id, selectVariations);
            });
        })


        selectVariations.addEventListener("change", (event) => {
            const optionId = event.target.value;
            const variationData = data.variations[optionId];

            // Updated text details
            const stock = variationData.stock;
            setText($('#price'), variationData.price);
            setText($('#stock'), stock);
            const stockUdsNode = (stock === 1) ? 'ud' : 'uds';
            setText($('#stock-uds'), stockUdsNode);

            // Updates the selected image

        });
    }

}; // window.onload
