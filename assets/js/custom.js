import mermaid from 'mermaid';

document.addEventListener('DOMContentLoaded', () => {
    mermaid.initialize({
        startOnLoad: true,
        layout: 'dagre',
        theme: 'default',
        look: 'classic',
    });
});
