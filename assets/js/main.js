$(document).ready(function() {
    // Load Header
    $("#header-placeholder").load("components/header.html", function(response, status, xhr) {
        if (status == "error") {
            console.error("Error loading header: " + xhr.status + " " + xhr.statusText);
        } else {
            // Highlight active navigation link
            let currentPath = window.location.pathname.split("/").pop();
            if (currentPath === "") currentPath = "index.html";
            
            $(".navbar-nav .nav-link").each(function() {
                let linkPath = $(this).attr("href");
                if (linkPath === currentPath) {
                    $(this).addClass("active").css("color", "var(--primary-color)");
                }
            });
        }
    });

    // Load Footer
    $("#footer-placeholder").load("components/footer.html", function(response, status, xhr) {
         if (status == "error") {
            console.error("Error loading footer: " + xhr.status + " " + xhr.statusText);
        }
    });

    // Simple interaction for the domain search
    $(document).on('click', '#searchDomainBtn', function(e) {
        e.preventDefault();
        const domain = $('#domainInput').val();
        if(domain) {
            alert(`Searching for availability of ${domain}...`);
            // In a real app, this would make an API call
        }
    });
    
    // Add to cart animation
    $(document).on('click', '.add-to-cart-btn', function(e) {
        let btn = $(this);
        let originalText = btn.html();
        btn.html('<i class="fas fa-spinner fa-spin"></i> Adding...');
        setTimeout(function() {
            btn.html('<i class="fas fa-check"></i> Added');
            btn.removeClass('btn-primary').addClass('btn-success');
            setTimeout(function() {
                btn.html(originalText);
                btn.removeClass('btn-success').addClass('btn-primary');
            }, 2000);
        }, 800);
    });
});
