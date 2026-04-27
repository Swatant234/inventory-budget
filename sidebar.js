const sidebarHTML = `
<aside id="sidebar">
    <div class="sidebar-header">
        <div class="d-flex align-items-center gap-3">
            <div class="logo-box">
                <img src="/inventory-budget/assets/MTS Logo.jpg" class="menu-icon">
            </div>
            <div class="brand-text">MICRO LABS</div>
        </div>
    </div>

    <div class="section-label">APPLICATIONS</div>

    <div class="sidebar-body">
        <nav class="nav flex-column">

            <!-- INVENTORY -->
            <div class="nav-item">
                <a href="#inventoryCollapse" class="nav-link" data-bs-toggle="collapse">
                    <i class="bi bi-box-seam"></i> 
                    <span>INVENTORY</span>
                    <i class="bi bi-chevron-down ms-auto arrow-icon"></i>
                </a>

                <div class="collapse" id="inventoryCollapse">
                    <div class="sub-menu-tree">
                        <div class="operations-group">

                            <div class="nested-item">
                                <div class="nested-header" data-bs-toggle="collapse" data-bs-target="#masterNested">
                                    <span>Master</span>
                                    <i class="bi bi-chevron-down arrow-icon small"></i>
                                </div>

                                <div class="collapse" id="masterNested">
                                    <a href="/inventory-budget/Material_Master/a1.html" class="tree-link">Material Master</a>
                                    <a href="/inventory-budget/Service_Master/a1.html" class="tree-link">Service Master</a>
                                </div>
                            </div>

                            <a href="/inventory-budget/Inward_Inventory/a1.html" class="tree-link">Inward - Inventory</a>
                            <a href="/inventory-budget/Put_Away/a1.html" class="tree-link">Put Away</a>
                            <a href="/inventory-budget/Stock_Transfer/a1.html" class="tree-link">Stock Transfer</a>
                            <a href="/inventory-budget/Request_for_Issuance/a1.html" class="tree-link">Requests for Material</a>
                            <a href="/inventory-budget/Issuance_of_Material/a1.html" class="tree-link">Issuance of Material</a>
                            <a href="/inventory-budget/Return_Material/a1.html" class="tree-link">Return Material</a>
                            <a href="/inventory-budget/Stock_Verification/a1.html" class="tree-link">Stock Verification</a>
                            <a href="/inventory-budget/Stock_Adjustment/a1.html" class="tree-link">Stock Adjustment</a>

                        </div>
                    </div>
                </div>
            </div>

            <!-- PURCHASE -->
            <div class="nav-item">
                <a href="#purchaseCollapse" class="nav-link" data-bs-toggle="collapse">
                    <i class="bi bi-cart-plus"></i> 
                    <span>PURCHASE</span>
                    <i class="bi bi-chevron-down ms-auto arrow-icon"></i>
                </a>

                <div class="collapse" id="purchaseCollapse">
                    <div class="sub-menu-tree">
                        <div class="operations-group">
                            <a href="/inventory-budget/Purchase/purchase_request.html" class="tree-link">
                                Purchase Request
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- BUDGET -->
            <div class="nav-item">
                <a href="#budgetCollapse" class="nav-link" data-bs-toggle="collapse">
                    <i class="bi bi-wallet2"></i> 
                    <span>BUDGET</span>
                    <i class="bi bi-chevron-down ms-auto arrow-icon"></i>
                </a>

                <div class="collapse" id="budgetCollapse">
                    <div class="sub-menu-tree">
                        <div class="operations-group">
                            <a href="/inventory-budget/Budget/budget_entry.html" class="tree-link">
                                Budget Entry
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </nav>
    </div>
</aside>
`;

document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("sidebar-placeholder");

    if (!container) return;

    container.innerHTML = sidebarHTML;

    // ✅ INIT BOOTSTRAP COLLAPSE
    if (window.bootstrap) {
        container.querySelectorAll(".collapse").forEach(el => {
            new bootstrap.Collapse(el, { toggle: false });
        });
    }

    // ✅ ACTIVE LINK LOGIC (IMPROVED)
    const currentPath = window.location.pathname;

    const links = container.querySelectorAll(".tree-link");

    links.forEach(link => {
        const linkPath = new URL(link.href).pathname;

        if (currentPath === linkPath) {
            link.classList.add("active-tree");

            // ✅ Scroll to active link
            setTimeout(() => {
                link.scrollIntoView({ block: "center", behavior: "smooth" });
            }, 200);

            // ✅ OPEN PARENT COLLAPSES
            let parent = link.closest(".collapse");

            while (parent) {
                parent.classList.add("show");

                const trigger = container.querySelector(
                    `[data-bs-target="#${parent.id}"]`
                );

                if (trigger) {
                    trigger.classList.remove("collapsed");
                    trigger.setAttribute("aria-expanded", "true");
                }

                parent = parent.parentElement.closest(".collapse");
            }
        }
    });

    // ✅ OPTIONAL: KEEP FULLSCREEN AFTER CLICK
    document.addEventListener("click", function () {
        const elem = document.documentElement;

        if (!document.fullscreenElement) {
            elem.requestFullscreen?.().catch(() => {});
        }
    });
});