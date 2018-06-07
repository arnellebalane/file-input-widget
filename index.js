const input = document.querySelector('input');
const label = document.querySelector('label');
const span = document.querySelector('span');

input.addEventListener('change', e => {
    const files = e.target.files;

    if (files.length === 0) {
        label.firstChild.data = 'Select Files';
        span.textContent = '';
    } else if (files.length === 1) {
        label.firstChild.data = files[0].name;
        span.textContent = `That file is ${humanize(files[0].size)} large`;
    } else {
        label.firstChild.data = `You selected ${files.length} files`;

        const totalSize = [...files].reduce((total, file) => total + file.size, 0);
        span.textContent = `They are all ${humanize(totalSize)} in total`;
    }
});

function humanize(bytes) {
    if (bytes >= Math.pow(1024, 3)) {
        return (bytes / Math.pow(1024, 3)).toFixed(2) + ' GB';
    } else if (bytes >= Math.pow(1024, 2)) {
        return (bytes / Math.pow(1024, 2)).toFixed(2) + ' MB';
    } else if (bytes >= 1024) {
        return (bytes / 1024).toFixed(2) + ' KB';
    }
    return bytes + ' bytes';
}
