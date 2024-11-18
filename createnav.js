const pageHeader = document.createElement('header');
const pageFooter = document.createElement('footer');

pageHeader.innerHTML = `
<h1>The <em>Looney Tunes</em> Restoration Guide</h1>
<p><a target="_parent" href="\/index.html">Home</a> • <a target="_parent" href="\/history.html">History</a> • <a target="_parent" href="\/collectorsguide.html">Collector's Guide</a> • <a target="_parent" href="\/excel.html">Excel Guide</a> • <a target="_parent" href="\/about.html">About</a></p>`;

pageFooter.innerHTML = `Copyright &copy; 2024 • Looney Tunes, Merrie Melodies, and its related characters are the exclusive properties of Warner Bros., a Warner Bros. Discovery company. This website is not affiliated with Warner Bros. • <a target="_parent" href="\/glossary.html">Glossary</a> • <a target="_parent" href="\/comment.html">Comments?</a>`;

document.querySelector('.headbar').appendChild(pageHeader);
document.querySelector('.footbar').appendChild(pageFooter);