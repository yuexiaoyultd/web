function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[$$$$]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

const pathData = getParameterByName('path');
const size = getParameterByName('size');
const time = getParameterByName('time');

const svgContent = `
    <svg width="${size}px" height="${size}px" viewBox="0 0 ${size} ${size}">
      <path d="${pathData}" stroke="#0d66fe" stroke-width="2.5" fill="none"/>
      <circle cx="0" cy="0" r="8" fill="rgba(13,102,254,1)">
        <animateMotion path="${pathData}" dur="${time}s" begin="0s" fill="freeze" rotate="auto"/>
      </circle>
    </svg>
  `;

document.getElementById('svgContainer').innerHTML = svgContent;