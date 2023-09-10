
        // JavaScript for shopping cart functionality
        let cartItemCount = 0;

        function addToCart(bookTitle) {
            cartItemCount++;
            document.getElementById('cart').textContent = cartItemCount;
        }
    
