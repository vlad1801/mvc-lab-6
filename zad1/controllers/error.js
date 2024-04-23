const getNotFoundPage = (_, res) => {
    res.status(404).render('not-found', { title: 'Page Not Found' });
  }
  
  module.exports = {
    getNotFoundPage,
  }