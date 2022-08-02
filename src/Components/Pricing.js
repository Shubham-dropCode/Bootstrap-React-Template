import React from 'react'

const Pricing = () => {
  return (
    <React.Fragment><section id="pricing" className ="pricing section-bg">
    <div className ="container" data-aos="fade-up">

      <div className ="section-title">
        <h2>Pricing</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.</p>
      </div>

      <div className ="row">

        <div className ="col-lg-4 col-md-6">
          <div className ="box" data-aos="fade-up" data-aos-delay="100">
            <h3>Free</h3>
            <h4><sup>$</sup>0<span> / month</span></h4>
            <ul>
              <li>Aida dere</li>
              <li>Nec feugiat nisl</li>
              <li>Nulla at volutpat dola</li>
              <li className ="na">Pharetra massa</li>
              <li className ="na">Massa ultricies mi</li>
            </ul>
            <div className ="btn-wrap">
              <a href="#" className ="btn-buy">Buy Now</a>
            </div>
          </div>
        </div>

        <div className ="col-lg-4 col-md-6 mt-4 mt-md-0">
          <div className ="box featured" data-aos="fade-up" data-aos-delay="200">
            <h3>Business</h3>
            <h4><sup>$</sup>19<span> / month</span></h4>
            <ul>
              <li>Aida dere</li>
              <li>Nec feugiat nisl</li>
              <li>Nulla at volutpat dola</li>
              <li>Pharetra massa</li>
              <li className ="na">Massa ultricies mi</li>
            </ul>
            <div className ="btn-wrap">
              <a href="#" className ="btn-buy">Buy Now</a>
            </div>
          </div>
        </div>

        <div className ="col-lg-4 col-md-6 mt-4 mt-lg-0">
          <div className ="box" data-aos="fade-up" data-aos-delay="300">
            <h3>Developer</h3>
            <h4><sup>$</sup>29<span> / month</span></h4>
            <ul>
              <li>Aida dere</li>
              <li>Nec feugiat nisl</li>
              <li>Nulla at volutpat dola</li>
              <li>Pharetra massa</li>
              <li>Massa ultricies mi</li>
            </ul>
            <div className ="btn-wrap">
              <a href="#" className ="btn-buy">Buy Now</a>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section></React.Fragment>
  )
}

export default Pricing