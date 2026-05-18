$(document).ready(function () {
    // Variables
    let scrollThreashold = 300;

    // Constants
    const hostingPlans = {
        basic: {
            1: { basePrice: 5.99, discount: 0 },
            12: { basePrice: 5.99, discount: 0.50 }
        },
        premium: {
            1: { basePrice: 11.99, discount: 0 },
            12: { basePrice: 11.99, discount: 0.75 },
            24: { basePrice: 11.99, discount: 0.80 },
            48: { basePrice: 11.99, discount: 0.85 }
        }
    };

    // Load Header
    $("#header-placeholder").load("components/header.html");

    // Load Footer
    $("#footer-placeholder").load("components/footer.html");

    // back to top button
    $("body").append(`<button type="button" class="btn btn-primary btn-lg rounded-circle d-flex justify-content-center align-items-center" id="btn-back-to-top">&#8679;</button>`
    );

    $(window).scroll(function () {
        if ($(this).scrollTop() > scrollThreashold) {
            $('#btn-back-to-top').fadeIn();
        }
        else {
            $('#btn-back-to-top').fadeOut();
        }
    });

    $("body").on('click', '#btn-back-to-top', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 500);
    });

    $(document).on('click', '#searchDomainBtn', function (e) {
        e.preventDefault();
        const domain = $('#domainInput').val();
        if (domain) {
            alert(`Searching for availability of ${domain}...`);
        }
    });

    $(document).on('click', '.add-to-cart-btn', function (e) {
        let btn = $(this);
        let originalText = btn.html();
        btn.html('<i class="fas fa-spinner fa-spin"></i> Adding...');
        setTimeout(function () {
            btn.html('<i class="fas fa-check"></i> Added');
            btn.removeClass('btn-primary').addClass('btn-success');
            setTimeout(function () {
                btn.html(originalText);
                btn.removeClass('btn-success').addClass('btn-primary');
            }, 2000);
        }, 800);
    });

    // Cart plan selection
    function updateOrderSummary(tier, duration) { 
        let plan = hostingPlans[tier][duration]
        
        let planBaseFullPrice = plan.basePrice * duration;
        let priceMonth = plan.basePrice * (1 - plan.discount);
        let priceFull = priceMonth * duration;
        let planSavedAmount = priceFull - planBaseFullPrice; 

        $('#summary-base-price').text("$" + planBaseFullPrice.toFixed(2));
        $('#summary-discount').text("Discount: " + (plan.discount * 100) + "%");
        $('#summary-discount-amount').text("-$" + planSavedAmount.toFixed(2));
        $('#summary-total').text("$" + priceFull.toFixed(2));
    }

    updateOrderSummary('premium', 12);

    $(".plan-selector").click(function() {
        let activeStyle = "border-primary bg-primary bg-opacity-10"
        $(".plan-selector").removeClass(activeStyle);
        $(this).addClass(activeStyle);

        let tier = $(this).data('tier');
        let duration = $(this).data('duration');

        updateOrderSummary(tier, duration); 
    });

    // Cart item deletion
    $(".delete-item").click(function(){
        $(this).closest('.card').remove();        
        $('#summary-base-price').text("$" + (0).toFixed(2));
        $('#summary-discount').text("Discount: " + 0 + "%");
        $('#summary-discount-amount').text("-$" + (0).toFixed(2));
        $('#summary-total').text("$" + (0).toFixed(2));
    });

    $("#theme-toggle").click(function(){
        let currentTheme = $("html").attr("data-bs-theme");

        if (currentTheme === "dark"){
            
        }
    })
});
