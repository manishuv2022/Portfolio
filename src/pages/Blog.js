import '../styles/blog.css'
export default function Blog(params) {
    return(<>
        <header className='header'>
            <div className='header-title'>Prescripson</div>
            <div className='header-sub-title'>Book Doctor Online</div>
        </header>


        <section className="container home-cover-area justify-center flex">
            <div className="home-cover-wrap">
                <div className="text-center">
                    <h1 className="intro-title heading-large">In depth resource on UI, UX and everything in between.</h1>
                    <div className="intro-description">Inros is a modern classic blog theme for Ghost. Use this theme for company blog, magazine, niche or personal blog.</div>
                </div>
            </div>
        </section>


        <section className="container featured-posts">
                
            <h2 className="section-title">Featured Posts</h2>

            <div className='featured-post-grid'>
                
                <div className='featured-post-item-one'>
                    <div className='card-item'>
                        <img src='/images/image-2.jpg' className='featured-post-item-one-image'/>
                        <div className='featured-post-item-one-info'>
                            <span className='tag-wrap'>Lifestyle</span>
                            <h1 className='featured-post-item-one-post-title'>Self-observation is the first step of inner unfolding</h1>
                            <div className='featured-post-item-one-post-description'>Almost instantly the whole truth of the transaction seemed to rush upon her
                                mind, and her wrath was inconceivably violent. She asked me a thousand questions
                                in a breath; but, fortunately, was too vehement to attend to my embarrassment,
                                which must otherwise have betrayed my knowledge of the deceit.
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='featured-post-item-two'>
                    <div className='featured-post-item-two-card'>
                            <img src='/images/image-1.jpg' className='featured-post-item-two-image'/>
                        <div className='featured-post-item-two-post-info'>
                            <span className='tag-wrap'>Lifestyle</span>
                            <div className='featured-post-item-two-post-title'>The mind and body are not separate. what affects one, affects the other.</div>
                        </div>
                    </div>
                    <div className='featured-post-item-two-card'>
                            <img src='/images/image-3.jpg' className='featured-post-item-two-image'/>
                        <div className='featured-post-item-two-post-info'>
                            <span className='tag-wrap'>Lifestyle</span>
                            <div className='featured-post-item-two-post-title'>The mind and body are not separate. what affects one, affects the other.</div>
                        </div>
                    </div>
                    <div className='featured-post-item-two-card'>
                            <img src='/images/image-4.jpg' className='featured-post-item-two-image'/>
                        <div className='featured-post-item-two-post-info'>
                            <span className='tag-wrap'>Lifestyle</span>
                            <div className='featured-post-item-two-post-title'>The mind and body are not separate. what affects one, affects the other.</div>
                        </div>
                    </div>
                    <div className='featured-post-item-two-card'>
                            <img src='/images/image-5.jpg' className='featured-post-item-two-image'/>
                        <div className='featured-post-item-two-post-info'>
                            <span className='tag-wrap'>Lifestyle</span>
                            <div className='featured-post-item-two-post-title'>The mind and body are not separate. what affects one, affects the other.</div>
                        </div>
                    </div>
                    <div className='featured-post-item-two-card'>
                            <img src='/images/image-7.jpg' className='featured-post-item-two-image'/>
                        <div className='featured-post-item-two-post-info'>
                            <span className='tag-wrap'>Lifestyle</span>
                            <div className='featured-post-item-two-post-title'>The mind and body are not separate. what affects one, affects the other.</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </>)
}