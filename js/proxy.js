function openProxy(type) {
    const url = "https://yourproxy.example.com"; // Replace with actual proxy URL

    if (type === "aboutblank") {
        const newWindow = window.open();
        newWindow.document.write(`<iframe src="${url}" style="width:100%;height:100vh;border:none;"></iframe>`);
    } else if (type === "object") {
        document.getElementById('home').innerHTML = `<object data="${url}" style="width:100%;height:100vh;"></object>`;
    } else if (type === "cloudflare") {
        window.location.href = `https://yourcloudflareworker.workers.dev?url=${encodeURIComponent(url)}`;
    }
}
