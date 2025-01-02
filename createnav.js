const pageHeader = document.createElement('header');
const pageFooter = document.createElement('footer');

pageHeader.innerHTML = `
<h1>The <span id="ltlogo">LOONEY TUNES</span> Restoration Guide</h1>
<p><a target="_parent" href="\/lt-restoration-guide\/">Home</a> • <a target="_parent" href="\/lt-restoration-guide\/history.html">History</a> • <a target="_parent" href="\/lt-restoration-guide\/collectorsguide.html">Collector's Guide</a> • <a target="_parent" href="\/lt-restoration-guide\/excel.html">Excel Guide</a> • <a target="_parent" href="\/lt-restoration-guide\/about.html">About</a></p>`;

pageFooter.innerHTML = `Copyright &copy; 2025 • Looney Tunes, Merrie Melodies, and its related characters are the exclusive properties of Warner Bros., a Warner Bros. Discovery company. This website is not affiliated with Warner Bros. • <a target="_parent" href="\/lt-restoration-guide\/glossary.html">Glossary</a> • <a target="_parent" href="\/lt-restoration-guide\/comment.html">Comments?</a>`;

document.querySelector('.headbar').appendChild(pageHeader);
document.querySelector('.footbar').appendChild(pageFooter);