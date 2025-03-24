document.addEventListener('keydown', (e) => {
  const pathSegments = window.location.pathname.split('/').filter(Boolean);
  const currentPage = parseInt(pathSegments[pathSegments.length - 1].replace('page', ''), 10) || 1;
  const pageIndicator = document.querySelector('.page-indicator');
  const totalPages = pageIndicator ? parseInt(pageIndicator.dataset.totalPages, 10) : 0;

  if (e.key === 'ArrowLeft' && currentPage > 1) {
    const previousPage = currentPage - 1;
    window.location.href = `/voice/page${previousPage}`;
  } else if (e.key === 'ArrowRight' && currentPage < totalPages) {
    const nextPage = currentPage + 1;
    window.location.href = `/voice/page${nextPage}`;
  }
});

window.addEventListener('load', () => {
  const logs = JSON.parse(sessionStorage.getItem('navigationLogs') || '[]');
  logs.forEach((log) => console.log(log));
  sessionStorage.removeItem('navigationLogs');
});