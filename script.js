// Function to copy the URL for sharing
function copyToClipboard() {
    const dummy = document.createElement('input');
    dummy.value = window.location.href;
    document.body.appendChild(dummy);
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    alert('Link copied to clipboard!');
}
