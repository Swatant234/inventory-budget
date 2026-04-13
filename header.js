const headerHTML = `
<header id="topbar">
    <div class="d-flex align-items-center">
        <div class="p-2 me-3 rounded-circle hover-bg-light" style="cursor:pointer">
            <i class="bi bi-text-indent-left fs-4 text-secondary"></i>
        </div>
        <div class="logo-text">
            <h3>e<span>connect</span></h3>
        </div>
    </div>

    <div class="d-flex align-items-center">
        <div class="user-meta d-none d-lg-block">
            <b>Good Morning, Stores</b><br>
            Location: <span class="text-dark fw-medium">ML11</span> | Last Login: 08/04/2026 10:13<br>
            Password expires in: <span class="text-danger fw-bold">136 days</span>
        </div>
        
        <div class="d-flex gap-3 align-items-center">
            <div class="position-relative p-2 text-secondary cursor-pointer">
                <i class="bi bi-bell fs-5"></i>
                <span class="position-absolute top-10 start-50 translate-middle-y badge rounded-pill bg-danger" style="font-size: 8px;">3</span>
            </div>
            <i class="bi bi-fullscreen text-secondary cursor-pointer fs-5"></i>
            <div class="d-flex align-items-center gap-2 ps-3 border-start ms-2">
                <div class="text-end d-none d-sm-block">
                    <div class="fw-bold text-dark small">Stores User</div>
                    <div class="text-muted" style="font-size: 10px;">Manager</div>
                </div>
                <i class="bi bi-person-circle fs-2 text-primary"></i>
            </div>
        </div>
    </div>
</header>
`;

document.addEventListener("DOMContentLoaded", function() {
    const headerContainer = document.getElementById('header-placeholder');
    if (headerContainer) {
        headerContainer.innerHTML = headerHTML;
    }
});