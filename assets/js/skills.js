(function () {
  var container = document.getElementById('skills-grid');
  if (!container || !window.SKILLS_DATA) return;

  window.SKILLS_DATA.forEach(function (section) {
    var wrap = document.createElement('div');
    wrap.className = 'skills-section';

    var heading = document.createElement('h3');
    heading.textContent = section.category;
    wrap.appendChild(heading);

    var grid = document.createElement('div');
    grid.className = 'skills-grid';

    section.skills.forEach(function (skill) {
      var badge = document.createElement('div');
      badge.className = 'skill-badge ' + (skill.unlocked ? 'unlocked' : 'locked');
      badge.title = skill.name;

      var iconWrap = document.createElement('div');
      iconWrap.className = 'skill-icon';

      if (skill.letter) {
        iconWrap.classList.add('skill-letter');
        iconWrap.textContent = skill.letter;
      } else {
        var i = document.createElement('i');
        i.className = skill.icon;
        iconWrap.appendChild(i);
      }

      var name = document.createElement('span');
      name.className = 'skill-name';
      name.textContent = skill.name;

      badge.appendChild(iconWrap);
      badge.appendChild(name);
      grid.appendChild(badge);
    });

    wrap.appendChild(grid);
    container.appendChild(wrap);
  });
})();
