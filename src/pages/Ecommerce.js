import '../styles/ecommerce.css';
const Ecommarce = ()=>{
    return(
    <div className="root">
        <header>
            <div className="title-container">
                <div className="menu-bar-container">
                    <span className="material-symbols-outlined">menu</span>
                    <span>Menu</span>
                </div>
                <span className='title-logo'>Delish Food</span>
            </div>
            <div className="search-container">
                <span className='search-selector-container'>
                    <span class="material-symbols-outlined">expand_more</span>
                    <span>Category</span>
                </span>
                <div className='vertical-devider'/>
                <div className='search-input-container'>
                    <input className='search-input'/>
                    <span class="material-symbols-outlined">search</span>
                </div>
            </div>
            <div className="cart-container">
                <span class="material-symbols-outlined">shopping_cart</span>
            </div>
        </header>
        <div className='page-info-area'>
            <div className='page-info-text-container'>
                <div className='page-title'>Detail Product</div>
                <div className='page-breadcrumb'>Shop / Kerpik / Banana Chips Rasa Brown</div>
            </div>
        </div>
        <div className='product-details-container'>
            <div className='product-details-grid-item'>
                <div className='product-description-image-container'>
                    <div className='product-description-small-image-container'>
                        <div className='product-description-small-image'></div>
                        <div className='product-description-small-image'></div>
                        <div className='product-description-small-image'></div>
                    </div>
                    <div className='product-description-large-image-container'>
                        <div className='product-description-large-image'></div>
                    </div>
                </div>
            </div>
            <div className='product-details-grid-item'></div>

        </div>
        
    </div>)
}
export default Ecommarce;