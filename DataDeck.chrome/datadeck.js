redraw();
document.addEventListener('DOMSubtreeModified', redraw);

function redraw() {
  var parts = location.pathname.substring(1).split('/');
  var user = parts[0];
  var gist= parts[1];

  if (!user || !/^[a-z0-9][a-z0-9]*$/.test(user)) return;
  // Gist Test
  if (!/gist/.test(location.hostname)) return;

  var root = document.querySelector('.actions');
  if (!root) return;

  var group = document.querySelector('.button-group');
  if (!group) {
    group = document.createElement('div');
    div.className = 'button-group';
    root.appendChild(group);
  }

  var a = document.querySelector('#datadeck');
  if (!a) {
    var link = document.createElement('a');
    link.id = 'datadeck';
    link.innerHTML = '<span class="datadeck-icon"></span>Edit in DataDeck';
    link.className = 'minibutton';
    a = link.firstChild;
    group.insertBefore(link, group.firstChild);
  }

  a.href = 'http://explorer.okfnlabs.org/#' + user + '/' + gist;
}
