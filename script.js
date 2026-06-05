        // Extensive Product Data - 40+ Products
        const products = [
            // Electronics (12 items)
            {
                id: 1,
                name: "Premium Wireless Headphones",
                category: "Electronics",
                price: 299.99,
                originalPrice: 449.99,
                image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
                rating: 4.8,
                reviews: 328,
                badge: "Sale"
            },
            {
                id: 2,
                name: "Luxury Smart Watch Pro",
                category: "Electronics",
                price: 599.99,
                originalPrice: 799.99,
                image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
                rating: 4.9,
                reviews: 256,
                badge: "New"
            },
            {
                id: 3,
                name: "4K Professional Camera",
                category: "Electronics",
                price: 1299.99,
                originalPrice: 1599.99,
                image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop",
                rating: 4.7,
                reviews: 189,
                badge: "Hot"
            },
            {
                id: 4,
                name: "Gaming Laptop Elite",
                category: "Electronics",
                price: 2499.99,
                originalPrice: 2999.99,
                image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop",
                rating: 4.9,
                reviews: 412,
                badge: "Sale"
            },
            {
                id: 5,
                name: "Wireless Earbuds Pro",
                category: "Electronics",
                price: 199.99,
                originalPrice: 279.99,
                image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
                rating: 4.6,
                reviews: 567,
                badge: ""
            },
            {
                id: 6,
                name: "Smart Home Hub",
                category: "Electronics",
                price: 149.99,
                originalPrice: 199.99,
                image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=400&h=400&fit=crop",
                rating: 4.5,
                reviews: 234,
                badge: "New"
            },
            {
                id: 7,
                name: "Portable Projector 4K",
                category: "Electronics",
                price: 899.99,
                originalPrice: 1199.99,
                image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=400&fit=crop",
                rating: 4.7,
                reviews: 156,
                badge: "Sale"
            },
            {
                id: 8,
                name: "Drone Professional",
                category: "Electronics",
                price: 1599.99,
                originalPrice: 1999.99,
                image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=400&fit=crop",
                rating: 4.8,
                reviews: 89,
                badge: "Hot"
            },
            {
                id: 9,
                name: "Mechanical Keyboard RGB",
                category: "Electronics",
                price: 179.99,
                originalPrice: 249.99,
                image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400&h=400&fit=crop",
                rating: 4.6,
                reviews: 445,
                badge: ""
            },
            {
                id: 10,
                name: "Smart Speaker Premium",
                category: "Electronics",
                price: 299.99,
                originalPrice: 399.99,
                image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=400&h=400&fit=crop",
                rating: 4.4,
                reviews: 312,
                badge: "New"
            },
            {
                id: 11,
                name: "Tablet Pro 12.9",
                category: "Electronics",
                price: 1099.99,
                originalPrice: 1299.99,
                image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
                rating: 4.8,
                reviews: 678,
                badge: "Sale"
            },
            {
                id: 12,
                name: "VR Headset Elite",
                category: "Electronics",
                price: 799.99,
                originalPrice: 999.99,
                image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=400&h=400&fit=crop",
                rating: 4.7,
                reviews: 234,
                badge: "Hot"
            },

            // Fashion (10 items)
            {
                id: 13,
                name: "Designer Leather Jacket",
                category: "Fashion",
                price: 599.99,
                originalPrice: 899.99,
                image: "https://images.unsplash.com/photo-1551028919-ac76c9028d1e?w=400&h=400&fit=crop",
                rating: 4.9,
                reviews: 156,
                badge: "Sale"
            },
            {
                id: 14,
                name: "Luxury Handbag",
                category: "Fashion",
                price: 1299.99,
                originalPrice: 1699.99,
                image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop",
                rating: 4.8,
                reviews: 234,
                badge: "New"
            },
            {
                id: 15,
                name: "Premium Sunglasses",
                category: "Fashion",
                price: 349.99,
                originalPrice: 499.99,
                image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
                rating: 4.7,
                reviews: 189,
                badge: ""
            },
            {
                id: 16,
                name: "Italian Leather Shoes",
                category: "Fashion",
                price: 449.99,
                originalPrice: 599.99,
                image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop",
                rating: 4.9,
                reviews: 312,
                badge: "Hot"
            },
            {
                id: 17,
                name: "Cashmere Sweater",
                category: "Fashion",
                price: 299.99,
                originalPrice: 399.99,
                image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop",
                rating: 4.6,
                reviews: 278,
                badge: "Sale"
            },
            {
                id: 18,
                name: "Designer Watch Classic",
                category: "Fashion",
                price: 2499.99,
                originalPrice: 3299.99,
                image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop",
                rating: 4.9,
                reviews: 145,
                badge: "New"
            },
            {
                id: 19,
                name: "Silk Scarf Collection",
                category: "Fashion",
                price: 149.99,
                originalPrice: 199.99,
                image: "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa33?w=400&h=400&fit=crop",
                rating: 4.5,
                reviews: 89,
                badge: ""
            },
            {
                id: 20,
                name: "Premium Denim Jeans",
                category: "Fashion",
                price: 199.99,
                originalPrice: 279.99,
                image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
                rating: 4.7,
                reviews: 456,
                badge: "Sale"
            },
            {
                id: 21,
                name: "Wool Overcoat",
                category: "Fashion",
                price: 799.99,
                originalPrice: 1099.99,
                image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=400&fit=crop",
                rating: 4.8,
                reviews: 123,
                badge: "Hot"
            },
            {
                id: 22,
                name: "Designer Belt",
                category: "Fashion",
                price: 249.99,
                originalPrice: 349.99,
                image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=400&h=400&fit=crop",
                rating: 4.6,
                reviews: 234,
                badge: ""
            },

            // Jewelry (8 items)
            {
                id: 23,
                name: "Diamond Pendant Necklace",
                category: "Jewelry",
                price: 2999.99,
                originalPrice: 3999.99,
                image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
                rating: 5.0,
                reviews: 89,
                badge: "New"
            },
            {
                id: 24,
                name: "Gold Bracelet 18K",
                category: "Jewelry",
                price: 1299.99,
                originalPrice: 1699.99,
                image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
                rating: 4.9,
                reviews: 156,
                badge: "Sale"
            },
            {
                id: 25,
                name: "Pearl Earrings Set",
                category: "Jewelry",
                price: 499.99,
                originalPrice: 699.99,
                image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
                rating: 4.8,
                reviews: 234,
                badge: ""
            },
            {
                id: 26,
                name: "Luxury Ring Collection",
                category: "Jewelry",
                price: 899.99,
                originalPrice: 1199.99,
                image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
                rating: 4.9,
                reviews: 178,
                badge: "Hot"
            },
            {
                id: 27,
                name: "Sapphire Brooch",
                category: "Jewelry",
                price: 1599.99,
                originalPrice: 2099.99,
                image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
                rating: 4.7,
                reviews: 67,
                badge: "New"
            },
            {
                id: 28,
                name: "Platinum Wedding Band",
                category: "Jewelry",
                price: 1999.99,
                originalPrice: 2499.99,
                image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&h=400&fit=crop",
                rating: 5.0,
                reviews: 234,
                badge: ""
            },
            {
                id: 29,
                name: "Emerald Drop Earrings",
                category: "Jewelry",
                price: 2499.99,
                originalPrice: 3299.99,
                image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
                rating: 4.8,
                reviews: 89,
                badge: "Sale"
            },
            {
                id: 30,
                name: "Rose Gold Anklet",
                category: "Jewelry",
                price: 399.99,
                originalPrice: 549.99,
                image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop",
                rating: 4.6,
                reviews: 123,
                badge: ""
            },

            // Home (10 items)
            {
                id: 31,
                name: "Velvet Sofa Premium",
                category: "Home",
                price: 2499.99,
                originalPrice: 3299.99,
                image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
                rating: 4.8,
                reviews: 156,
                badge: "Sale"
            },
            {
                id: 32,
                name: "Crystal Chandelier",
                category: "Home",
                price: 1899.99,
                originalPrice: 2499.99,
                image: "https://images.unsplash.com/photo-1540932296774-3ed6d23f9b58?w=400&h=400&fit=crop",
                rating: 4.9,
                reviews: 89,
                badge: "New"
            },
            {
                id: 33,
                name: "Marble Coffee Table",
                category: "Home",
                price: 899.99,
                originalPrice: 1199.99,
                image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=400&h=400&fit=crop",
                rating: 4.7,
                reviews: 234,
                badge: ""
            },
            {
                id: 34,
                name: "Egyptian Cotton Sheets",
                category: "Home",
                price: 299.99,
                originalPrice: 399.99,
                image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=400&fit=crop",
                rating: 4.8,
                reviews: 445,
                badge: "Hot"
            },
            {
                id: 35,
                name: "Smart Thermostat",
                category: "Home",
                price: 249.99,
                originalPrice: 349.99,
                image: "https://images.unsplash.com/photo-1563456020-53494e77b8b7?w=400&h=400&fit=crop",
                rating: 4.6,
                reviews: 312,
                badge: ""
            },
            {
                id: 36,
                name: "Artisan Rug 8x10",
                category: "Home",
                price: 1299.99,
                originalPrice: 1699.99,
                image: "https://images.unsplash.com/photo-1575414003591-ece8d0416c7a?w=400&h=400&fit=crop",
                rating: 4.9,
                reviews: 123,
                badge: "Sale"
            },
            {
                id: 37,
                name: "Wine Cooler Cabinet",
                category: "Home",
                price: 1499.99,
                originalPrice: 1999.99,
                image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=400&fit=crop",
                rating: 4.7,
                reviews: 89,
                badge: ""
            },
            {
                id: 38,
                name: "Robot Vacuum Pro",
                category: "Home",
                price: 799.99,
                originalPrice: 999.99,
                image: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?w=400&h=400&fit=crop",
                rating: 4.5,
                reviews: 567,
                badge: "New"
            },
            {
                id: 39,
                name: "Espresso Machine",
                category: "Home",
                price: 599.99,
                originalPrice: 799.99,
                image: "https://images.unsplash.com/photo-1517914309578-2742d2f007e6?w=400&h=400&fit=crop",
                rating: 4.8,
                reviews: 234,
                badge: "Hot"
            },
            {
                id: 40,
                name: "Leather Recliner",
                category: "Home",
                price: 1799.99,
                originalPrice: 2299.99,
                image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=400&fit=crop",
                rating: 4.9,
                reviews: 178,
                badge: "Sale"
            }
        ];

        const newArrivals = [
            {
                id: 41,
                name: "Limited Edition Sneakers",
                category: "Fashion",
                price: 449.99,
                originalPrice: 599.99,
                image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
                rating: 4.9,
                reviews: 234,
                badge: "New"
            },
            {
                id: 42,
                name: "Smart Fitness Mirror",
                category: "Sports",
                price: 1499.99,
                originalPrice: 1999.99,
                image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=400&fit=crop",
                rating: 4.7,
                reviews: 89,
                badge: "New"
            },
            {
                id: 43,
                name: "Portable Power Station",
                category: "Electronics",
                price: 899.99,
                originalPrice: 1199.99,
                image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=400&h=400&fit=crop",
                rating: 4.8,
                reviews: 156,
                badge: "New"
            },
            {
                id: 44,
                name: "Organic Skincare Set",
                category: "Beauty",
                price: 299.99,
                originalPrice: 399.99,
                image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
                rating: 4.9,
                reviews: 312,
                badge: "New"
            },
            {
                id: 45,
                name: "Yoga Mat Premium",
                category: "Sports",
                price: 129.99,
                originalPrice: 179.99,
                image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop",
                rating: 4.7,
                reviews: 445,
                badge: "New"
            },
            {
                id: 46,
                name: "Ceramic Cookware Set",
                category: "Home",
                price: 399.99,
                originalPrice: 549.99,
                image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=400&h=400&fit=crop",
                rating: 4.8,
                reviews: 234,
                badge: "New"
            },
            {
                id: 47,
                name: "Diamond Stud Earrings",
                category: "Jewelry",
                price: 1999.99,
                originalPrice: 2599.99,
                image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
                rating: 5.0,
                reviews: 67,
                badge: "New"
            },
            {
                id: 48,
                name: "Leather Weekender Bag",
                category: "Fashion",
                price: 599.99,
                originalPrice: 799.99,
                image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
                rating: 4.9,
                reviews: 123,
                badge: "New"
            }
        ];

        const bestSellers = [
            {
                id: 49,
                name: "Noise Cancelling Headphones",
                category: "Electronics",
                price: 349.99,
                originalPrice: 449.99,
                image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
                rating: 4.8,
                reviews: 2345,
                badge: "Hot"
            },
            {
                id: 50,
                name: "Running Shoes Elite",
                category: "Sports",
                price: 189.99,
                originalPrice: 249.99,
                image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
                rating: 4.7,
                reviews: 1876,
                badge: "Hot"
            },
            {
                id: 51,
                name: "Anti-Aging Serum",
                category: "Beauty",
                price: 149.99,
                originalPrice: 199.99,
                image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
                rating: 4.9,
                reviews: 3421,
                badge: "Hot"
            },
            {
                id: 52,
                name: "Weighted Blanket",
                category: "Home",
                price: 129.99,
                originalPrice: 179.99,
                image: "https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?w=400&h=400&fit=crop",
                rating: 4.8,
                reviews: 1234,
                badge: "Hot"
            },
            {
                id: 53,
                name: "Gold Chain Necklace",
                category: "Jewelry",
                price: 799.99,
                originalPrice: 999.99,
                image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&h=400&fit=crop",
                rating: 4.9,
                reviews: 567,
                badge: "Hot"
            },
            {
                id: 54,
                name: "Bluetooth Speaker",
                category: "Electronics",
                price: 149.99,
                originalPrice: 199.99,
                image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
                rating: 4.6,
                reviews: 2890,
                badge: "Hot"
            },
            {
                id: 55,
                name: "Designer Sunglasses",
                category: "Fashion",
                price: 299.99,
                originalPrice: 399.99,
                image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop",
                rating: 4.7,
                reviews: 1567,
                badge: "Hot"
            },
            {
                id: 56,
                name: "Air Purifier Pro",
                category: "Home",
                price: 449.99,
                originalPrice: 599.99,
                image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop",
                rating: 4.8,
                reviews: 2134,
                badge: "Hot"
            }
        ];

        let cart = [];
        let currentProduct = null;

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            renderProducts();
            renderNewArrivals();
            renderBestSellers();
            startCountdown();
        });

        // Render Functions
        function renderProducts() {
            const grid = document.getElementById('productsGrid');
            grid.innerHTML = products.slice(0, 12).map(product => createProductCard(product)).join('');
        }

        function renderNewArrivals() {
            const grid = document.getElementById('newArrivalsGrid');
            grid.innerHTML = newArrivals.map(product => createProductCard(product)).join('');
        }

        function renderBestSellers() {
            const grid = document.getElementById('bestSellersGrid');
            grid.innerHTML = bestSellers.map(product => createProductCard(product)).join('');
        }

        function createProductCard(product) {
            const badgeClass = product.badge === 'New' ? 'new' : product.badge === 'Hot' ? 'hot' : '';
            return `
                <div class="product-card fade-in">
                    ${product.badge ? `<div class="product-badge ${badgeClass}">${product.badge}</div>` : ''}
                    <div class="product-wishlist" onclick="toggleWishlist(this)">
                        <i class="far fa-heart"></i>
                    </div>
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}">
                        <div class="product-quick-view" onclick="openModal(${product.id})">
                            Quick View
                        </div>
                    </div>
                    <div class="product-info">
                        <div class="product-category">${product.category}</div>
                        <h3 class="product-name">${product.name}</h3>
                        <div class="product-rating">
                            <div class="stars">
                                ${generateStars(product.rating)}
                            </div>
                            <span class="rating-count">(${product.reviews})</span>
                        </div>
                        <div class="product-price">
                            <span class="current-price">$${product.price}</span>
                            <span class="original-price">$${product.originalPrice}</span>
                        </div>
                        <button class="add-to-cart" onclick="addToCart(${product.id})">
                            <i class="fas fa-shopping-bag"></i> Add to Cart
                        </button>
                    </div>
                </div>
            `;
        }

        function generateStars(rating) {
            let stars = '';
            for (let i = 1; i <= 5; i++) {
                if (i <= rating) {
                    stars += '<i class="fas fa-star"></i>';
                } else if (i - 0.5 <= rating) {
                    stars += '<i class="fas fa-star-half-alt"></i>';
                } else {
                    stars += '<i class="far fa-star"></i>';
                }
            }
            return stars;
        }

        // Modal Functions
        function openModal(productId) {
            const allProducts = [...products, ...newArrivals, ...bestSellers];
            currentProduct = allProducts.find(p => p.id === productId);
            
            if (currentProduct) {
                document.getElementById('modalImage').src = currentProduct.image;
                document.getElementById('modalCategory').textContent = currentProduct.category;
                document.getElementById('modalTitle').textContent = currentProduct.name;
                document.getElementById('modalPrice').textContent = `$${currentProduct.price}`;
                document.getElementById('productModal').classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        }

        function closeModal() {
            document.getElementById('productModal').classList.remove('active');
            document.body.style.overflow = 'auto';
            document.getElementById('quantityInput').value = 1;
        }

        function updateQuantity(change) {
            const input = document.getElementById('quantityInput');
            let value = parseInt(input.value) + change;
            if (value >= 1 && value <= 10) {
                input.value = value;
            }
        }

        function addToCartFromModal() {
            if (currentProduct) {
                const quantity = parseInt(document.getElementById('quantityInput').value);
                addToCart(currentProduct.id, quantity);
                closeModal();
            }
        }

        // Cart Functions
        function addToCart(productId, quantity = 1) {
            const allProducts = [...products, ...newArrivals, ...bestSellers];
            const product = allProducts.find(p => p.id === productId);
            
            if (product) {
                const existingItem = cart.find(item => item.id === productId);
                if (existingItem) {
                    existingItem.quantity += quantity;
                } else {
                    cart.push({ ...product, quantity });
                }
                updateCart();
                showToast('Added to cart successfully!');
            }
        }

        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCart();
        }

        function updateCart() {
            const cartCount = document.getElementById('cartCount');
            const cartItems = document.getElementById('cartItems');
            const cartTotal = document.getElementById('cartTotal');
            
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            
            cartCount.textContent = totalItems;
            
            if (cart.length === 0) {
                cartItems.innerHTML = `
                    <div style="text-align: center; padding: 60px 20px; color: var(--gray);">
                        <i class="fas fa-shopping-bag" style="font-size: 4rem; margin-bottom: 20px; color: var(--primary);"></i>
                        <p style="font-size: 1.2rem;">Your cart is empty</p>
                        <p style="margin-top: 10px;">Add some luxury items!</p>
                    </div>
                `;
            } else {
                cartItems.innerHTML = cart.map(item => `
                    <div class="cart-item">
                        <div class="cart-item-image">
                            <img src="${item.image}" alt="${item.name}">
                        </div>
                        <div class="cart-item-details">
                            <div class="cart-item-name">${item.name}</div>
                            <div class="cart-item-price">$${item.price} x ${item.quantity}</div>
                        </div>
                        <div class="cart-item-remove" onclick="removeFromCart(${item.id})">
                            <i class="fas fa-trash"></i>
                        </div>
                    </div>
                `).join('');
            }
            
            cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
        }

        function toggleCart() {
            document.getElementById('cartSidebar').classList.toggle('active');
            document.getElementById('overlay').classList.toggle('active');
        }

        function checkout() {
            if (cart.length === 0) {
                showToast('Your cart is empty!');
                return;
            }
            showToast('Processing your order...');
            setTimeout(() => {
                alert('Thank you for your purchase! Your luxury items will be delivered soon.');
                cart = [];
                updateCart();
                toggleCart();
            }, 2000);
        }

        // Utility Functions
        function toggleWishlist(element) {
            const icon = element.querySelector('i');
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                element.classList.add('active');
                showToast('Added to wishlist!');
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                element.classList.remove('active');
            }
        }

        function showToast(message) {
            const toast = document.getElementById('toast');
            document.getElementById('toastMessage').textContent = message;
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }

        function filterCategory(category) {
            showToast(`Showing ${category} products...`);
            // Scroll to products section
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        }

        // Countdown Timer
        function startCountdown() {
            let hours = 12, minutes = 45, seconds = 30;
            
            setInterval(() => {
                seconds--;
                if (seconds < 0) {
                    seconds = 59;
                    minutes--;
                    if (minutes < 0) {
                        minutes = 59;
                        hours--;
                        if (hours < 0) hours = 23;
                    }
                }
                
                document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
                document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
                document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
            }, 1000);
        }

        // Close modal on outside click
        window.onclick = function(event) {
            const modal = document.getElementById('productModal');
            if (event.target === modal) {
                closeModal();
            }
        }

        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
