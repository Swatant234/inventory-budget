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
        <div class="nav-item">
            <a href="#inventoryCollapse" class="nav-link" data-bs-toggle="collapse" aria-expanded="true">
                <i class="bi bi-box-seam"></i> 
                <span>INVENTORY</span>
                <i class="bi bi-chevron-down ms-auto arrow-icon"></i>
            </a>

            <div class="collapse show" id="inventoryCollapse">
                <div class="sub-menu-tree">
                    <div class="nested-item">
                        <div class="nested-header" data-bs-toggle="collapse" data-bs-target="#masterNested" aria-expanded="true">
                            <span>Master</span>
                            <i class="bi bi-chevron-down arrow-icon small"></i>
                        </div>
                        
                        <div class="collapse show tree-line-nested" id="masterNested">
                            <a href="/inventory-budget/Material_Master/a1.html" class="tree-link">Material Master</a>
                            <a href="/inventory-budget/Service_Master/a1.html" class="tree-link">Service Master</a>
                        </div>
                    </div>

                    <div class="operations-group">
                        <a href="/inventory-budget/Inward_Inventory/a1.html" class="tree-link">Inward - Inventory</a>
                        <a href="/inventory-budget/Put_Away/a1.html" class="tree-link">Put Away</a>
                        <a href="/inventory-budget/Request_for_Issuance/a1.html" class="tree-link">Request for Issuance</a>
                        <a href="/inventory-budget/Issuance_of_Material/a1.html" class="tree-link">Issuance of Material</a>
                        <a href="#" class="tree-link">Return Material</a>
                   <a href="/inventory-budget/Stock_Adjustment/a1.html" class="tree-link">Stock Adjustment</a>
                    <a href="/inventory-budget/Stock_Verification/a1.html" class="tree-link">Stock Verification</a>
                    </div>
                </div>
            </div>
        </div>
       <div class="nav-item">
    <a href="#budgetCollapse" class="nav-link" data-bs-toggle="collapse" aria-expanded="true">
        <i class="bi bi-wallet2"></i> 
        <span>BUDGET</span>
        <i class="bi bi-chevron-down ms-auto arrow-icon"></i>
    </a>

    <div class="collapse show" id="budgetCollapse">
        <div class="sub-menu-tree">
            <div class="operations-group">
                <a href="/inventory-budget/Budget/budget_entry.html" class="tree-link">
                    Budget Entry
                </a>
            </div>
        </div>
    </div>
</div>

<div class="nav-item">
    <a href="#purchaseCollapse" class="nav-link" data-bs-toggle="collapse" aria-expanded="true">
        <i class="bi bi-cart-plus"></i> 
        <span>PURCHASE</span>
        <i class="bi bi-chevron-down ms-auto arrow-icon"></i>
    </a>

    <div class="collapse show" id="purchaseCollapse">
        <div class="sub-menu-tree">
            <div class="operations-group">
                <a href="/inventory-budget/Purchase/purchase_request.html" class="tree-link">
            
                Purchase Request
                </a>
            </div>
        </div>
    </div>
</div>
    </div>

    </nav>
</aside>
`;

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("sidebar-placeholder");

  if (container) {
    container.innerHTML = sidebarHTML;

    // Bootstrap collapse init
    if (window.bootstrap) {
      const collapseElementList = container.querySelectorAll(".collapse");
      collapseElementList.forEach((collapseEl) => {
        new bootstrap.Collapse(collapseEl, { toggle: false });
      });
    }

    // ✅ AUTO ACTIVE LINK
    const currentURL = window.location.href;

    const links = container.querySelectorAll(".tree-link");

    links.forEach((link) => {
      const linkURL = link.href;

      // ignore #
      if (!linkURL || link.getAttribute("href") === "#") return;

      // ✅ MATCH CURRENT PAGE
      if (currentURL === linkURL) {
        link.classList.add("active-tree");

        // ✅ OPEN PARENT MENUS
        let parentCollapse = link.closest(".collapse");

        while (parentCollapse) {
          parentCollapse.classList.add("show");

          const trigger = document.querySelector(
            `[data-bs-target="#${parentCollapse.id}"]`,
          );

          if (trigger) {
            trigger.setAttribute("aria-expanded", "true");
            trigger.classList.remove("collapsed");
          }

          parentCollapse = parentCollapse.parentElement.closest(".collapse");
        }
      }
    });
  }
});

link.scrollIntoView({ block: "center" });
