document.addEventListener('DOMContentLoaded', () => {

  const scrollItemsHeader = document.querySelectorAll('.animated-header');
  const scrollItemsLearnHist = document.querySelectorAll('.animated-learn__hist');
  const scrollItemsCreateSell = document.querySelectorAll('.animated-create__sell');
  const scrollItemsTopGallary = document.querySelectorAll('.animated-top__gallary');
  const scrollItemsTopSell = document.querySelectorAll('.animated-top__sell');
  const scrollItemsLastestBlog = document.querySelectorAll('.animated-lastest__blog');
  const scrollItemsFooter = document.querySelectorAll('.animated-footer');

  const learnHist = document.querySelector('.learn__history');
  const createSell = document.querySelector('.create__sell');
  const topGallary = document.querySelector('.top__gallary');
  const topSell = document.querySelector('.top__sell');
  const lastestBlog = document.querySelector('.lastest__blog');
  const footer = document.querySelector('.footer');

  let learnHistHeight = learnHist.offsetHeight / 3 + learnHist.offsetTop;
  let createSellHeight = createSell.offsetHeight / 3 + createSell.offsetTop;
  let topGallaryHeight = topGallary.offsetHeight / 3 + topGallary.offsetTop;
  let topSellHeight = topSell.offsetHeight / 3 + topSell.offsetTop;
  let lastestBlogHeight = lastestBlog.offsetHeight / 3 + lastestBlog.offsetTop;
  let footerHeight = footer.offsetHeight / 3 + footer.offsetTop;
  
  const scrollAnimationHeader = () => {
    scrollItemsHeader.forEach(el => {
      el.classList.add('_active');
    });
  };

  const scrollAnimationLearnHist = () => {
    scrollItemsLearnHist.forEach(el => {
      el.classList.add('_active');
    });
  };

  const scrollAnimationCreateSell = () => {
    scrollItemsCreateSell.forEach(el => {
      el.classList.add('_active');
    });
  };

  const scrollAnimationTopGallary = () => {
    scrollItemsTopGallary.forEach(el => {
      el.classList.add('_active');
    });
  };

  const scrollAnimationTopSell = () => {
    scrollItemsTopSell.forEach(el => {
      el.classList.add('_active');
    });
  };

  const scrollAnimationLastestBlog = () => {
    scrollItemsLastestBlog.forEach(el => {
      el.classList.add('_active');
    });
  };

  const scrollAnimationFooter = () => {
    scrollItemsFooter.forEach(el => {
      el.classList.add('_active');
    });
  };

  scrollAnimationHeader();

  window.addEventListener('scroll', () => {
    let windowEnd = window.innerHeight + window.scrollY;

    if (windowEnd >= learnHistHeight){
      scrollAnimationLearnHist();
    };

    if (windowEnd >= createSellHeight){
      scrollAnimationCreateSell();
    };

    if (windowEnd >= topGallaryHeight){
      scrollAnimationTopGallary();
    };

    if (windowEnd >= topSellHeight){
      scrollAnimationTopSell();
    };

    if (windowEnd >= lastestBlogHeight){
      scrollAnimationLastestBlog();
    };

    if (windowEnd >= footerHeight){
      scrollAnimationFooter();
    };
    
  });
});